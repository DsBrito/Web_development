#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:DsBrito/most-used-words.git master:gh-pages
cd -
