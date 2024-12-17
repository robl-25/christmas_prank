#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git initgit add -A
git commit -m 'deploy'
git push -f git@github.com:robl-25/christmas_prank.git master:gh-pages
cd -