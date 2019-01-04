#!/bin/bash
# Borrowed with gratitude from Create React App by Facebook; thanks!
set -e
cd "$(dirname "$0")" # Start in the scripts/publishing folder, even if run from root directory
cd ../../

if [ -n "$(git status --porcelain)" ]; then
  echo "Error: your git status is not clean. Aborting release.";
  exit 1;
fi

rm -rf ./scripts/verdaccio/storage/@bolt # remove folder from verdaccio before publishing or running through any tests

npm run lint
npm run test

echo 'Finished release pre-checks!';