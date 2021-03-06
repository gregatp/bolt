#!/bin/bash
# Borrowed with gratitude from Create React App by Facebook; thanks!
set -e
cd "$(dirname "$0")" # Start in the scripts/release folder, even if run from root directory
cd ../../

CURRENT_BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD`

DEFAULT_BUMP="preminor"
BUMP=${1:-$DEFAULT_BUMP}

if [[ $CURRENT_BRANCH == 'release/2.x' || $CURRENT_BRANCH == 'release/1.x' ]]; then
  echo "Error: you can't publish a pre-release on a release branch! Try running 'npm run release' to do a full release instead.";
  exit 1;
elif [[ $CURRENT_BRANCH != 'next' ]]; then
  echo "Error: you can't publish a pre-release on the $CURRENT_BRANCH branch. Aborting...";
  exit 1;
fi

./scripts/release/before-release.sh #verify everything is good to go before publishing
npx lerna publish $BUMP --npm-tag next --preid rc
./scripts/release/after-release.sh #post-release work

# test the pre-release process works via verdaccio instead of NPM
# ./scripts/release/before-release.sh
# npx lerna publish $BUMP --registry http://localhost:4000 --npm-tag next --preid rc --no-commit-hooks --no-git-reset --verify-access --conventional-commits
# ./scripts/release/after-release.sh