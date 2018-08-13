module.exports = {
  // Environmental variable / preset to use
  lang: ['en'],
  env: 'static',
  buildDir: '../../www/build/',
  srcDir: './content',
  wwwDir: '../../www',
  images: {
    sets: [
      {
        base: './images',
        glob: '**',
        dist: '../../www/images/',
      },
    ],
  },
  components: {
    global: [
      '@bolt/global',
      '@bolt/internal-schema-form',
      '@bolt/components-placeholder',
      '@bolt/components-action-blocks',
      '@bolt/components-dropdown',
      '@bolt/components-background',
      '@bolt/components-background-shapes',
      '@bolt/components-band',
      '@bolt/components-block-list',
      '@bolt/components-blockquote',
      '@bolt/components-breadcrumb',
      '@bolt/components-button',
      '@bolt/components-button-group',
      '@bolt/components-card',
      '@bolt/components-chip',
      '@bolt/components-chip-list',
      '@bolt/components-code-snippet',
      '@bolt/components-copy-to-clipboard',
      '@bolt/components-device-viewer',
      '@bolt/components-figure',
      '@bolt/components-form',
      '@bolt/components-headline',
      '@bolt/components-icon',
      '@bolt/components-image',
      '@bolt/components-link',
      '@bolt/components-nav-indicator',
      '@bolt/components-nav-priority',
      '@bolt/components-navbar',
      '@bolt/components-navlink',
      '@bolt/components-logo',
      '@bolt/components-ordered-list',
      '@bolt/components-page-footer',
      '@bolt/components-page-header',
      '@bolt/components-pagination',
      '@bolt/components-share',
      '@bolt/components-search-filter',
      '@bolt/components-site',
      '@bolt/components-smooth-scroll',
      '@bolt/components-sticky',
      '@bolt/components-teaser',
      '@bolt/components-text',
      '@bolt/components-tooltip',
      '@bolt/components-unordered-list',
      '@bolt/components-video',
      './style.scss',
    ],
    individual: [],
  },
  extraTwigNamespaces: {
    'bolt-assets': {
      recursive: true,
      paths: ['../../www/build'],
    },
  },

  copy: [
    {
      from: `./assets/**/*`,
      to: `../../www/build/assets`,
      flatten: true,
    },
  ],
};
