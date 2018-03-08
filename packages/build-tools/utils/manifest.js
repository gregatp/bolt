const log = require('./log');
const { ensureFileExists } = require('./general');
const { promisify } = require('util');
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const {getDataFile} = require('./yaml');
const path = require('path');
const config = require('./config-store').getConfig();

let boltManifest = {
  name: 'Bolt Manifest',
  components: {
    global: [],
    individual: [],
  },
};

/**
 * Get information about a components assets
 * @param {string} pkgName - Machine name of a component i.e. `@bolt/button` OR path to an entry file i.e. `./src/style.scss`
 * @returns {{name, basicName: string | * | void}} - Asset info
 */
async function getPkgInfo(pkgName) {
  if (pkgName.endsWith('.scss') || pkgName.endsWith('.js')) {
    const pathInfo = path.parse(pkgName);
    const name = pathInfo.name + pathInfo.ext.replace('.', '-');
    const info = {
      name,
      basicName: name,
      dir: path.dirname(pkgName),
      assets: {},
    };
    if (pkgName.endsWith('.scss')) {
      info.assets.style = pkgName;
    }
    if (pkgName.endsWith('.js')) {
      info.assets.main = pkgName;
    }
    ensureFileExists(pkgName);
    return info;
  } else {// package name
    const pkgJsonPath = require.resolve(`${pkgName}/package.json`);
    const dir = path.dirname(pkgJsonPath);
    const pkg = require(pkgJsonPath);
    const info = {
      name: pkg.name,
      basicName: pkg.name.replace('@bolt/', 'bolt-'),
      dir,
      assets: {},
    };
    info.twigNamespace = `@${info.basicName}`;
    if (pkg.style) {
      info.assets.style = path.join(dir, pkg.style);
      ensureFileExists(info.assets.style);
    }
    if (pkg.main) {
      info.assets.main = path.join(dir, pkg.main);
      ensureFileExists(info.assets.main);
    }
    if (pkg.schema) {
      info.schema = await getDataFile(path.join(dir, pkg.schema));
    }
    // @todo Allow verbosity settings
    // console.log(assets);
    return info;
  }
}

async function buildBoltManifest() {
  try {
    if (config.components.global) {
      const globalSrc = await Promise.all(config.components.global.map(getPkgInfo));
      boltManifest.components.global = globalSrc;
    }
    if (config.components.individual) {
      const individualSrc = await Promise.all(config.components.individual.map(getPkgInfo));
      boltManifest.components.individual = individualSrc;
    }
  } catch (err) {
    log.errorAndExit('Error building Bolt Manifest', err);
  }

  return boltManifest;
}

function getBoltManifest() {
  return boltManifest;
}

/**
 * Get all directories for components in Bolt Manifest
 * @param relativeFrom {string} - If present, the path will be relative from this, else it will be absolute.
 * @returns {Array<String>} {dirs} - List of all component/package paths in Bolt Manifest
 */
function getAllDirs(relativeFrom) {
  const dirs = [];
  const {global, individual} = getBoltManifest().components;
  [global, individual].forEach((componentList) => {
    componentList.forEach((component) => {
      dirs.push(relativeFrom
        ? path.relative(relativeFrom, component.dir)
        : component.dir
      );
    });
  });
  return dirs;
}

function createComponentsManifest() {
  const components = {};
  const manifest = getBoltManifest();
  const allComponents = [...manifest.components.global, ...manifest.components.individual];
  allComponents.forEach((component) => {
    if (component.twigNamespace) {
      components[component.twigNamespace] = component;
    }
  });
  return components;
}

async function writeBoltManifest() {
  try {
    await writeFile(path.resolve(config.dataDir, './full-manifest.bolt.json'), JSON.stringify(getBoltManifest()));
    await writeFile(path.resolve(config.dataDir, './components.bolt.json'), JSON.stringify(createComponentsManifest()));
    await writeFile(path.resolve(config.dataDir, './config.bolt.json'), JSON.stringify(config));
  } catch(error) {
    log.errorAndExit('Could not write bolt manifest files', error);
  }
}

/**
 * Builds & writes info file for Twig Namespaces
 * Creates `bolt-twig-namespaces.json` in `config.dataDir` from the Bolt Manifest. That is pulled in by [Twig Namespace plugin](https://packagist.org/packages/evanlovely/plugin-twig-namespaces) in the PL config file.
 * @param relativeFrom {string} - If present, the path will be relative from this, else it will be absolute.
 * @param extraNamespaces {object} - Extra namespaces to add to file in [this format](https://packagist.org/packages/evanlovely/plugin-twig-namespaces)
 * @async
 * @returns {Promise<void>}
 */
async function writeTwigNamespaceFile(relativeFrom, extraNamespaces = {}) {
  const namespaces = {};
  const allDirs = [];
  const {global, individual} = getBoltManifest().components;

  [global, individual].forEach((componentList) => {
    componentList.forEach((component) => {
      const dir = relativeFrom
        ? path.relative(relativeFrom, component.dir)
        : component.dir;

      namespaces[component.basicName] = {
        recursive: true,
        paths: [dir],
      };

      allDirs.push(dir);
    });
  });

  const namespaceConfigFile = Object.assign({
    // Can hit anything with `@bolt`
    bolt: {
      recursive: true,
      paths: [
        config.srcDir,
        ...allDirs,
      ],
    },
    'bolt-data': {
      recursive: true,
      paths: [
        config.dataDir,
      ],
    },
  }, namespaces, extraNamespaces);

  await writeFile(
    path.join(config.dataDir, 'twig-namespaces.bolt.json'),
    JSON.stringify(namespaceConfigFile, null, '  ')
  );
}


module.exports = {
  buildBoltManifest,
  getBoltManifest,
  writeBoltManifest,
  writeTwigNamespaceFile,
  getAllDirs,
};
