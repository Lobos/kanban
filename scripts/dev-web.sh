#!/bin/sh

cd packages/dev-web
npx vue-cli-service serve &

cd ../web
npx vue-cli-service serve