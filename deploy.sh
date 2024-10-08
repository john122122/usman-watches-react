#!/bin/bash

# PRODUCTION
git reset --hard
git pull origin master

npm i yarn -g
yarn
yarn run build
pm2 start "yarn run start:prod" --name=USMAN-WATCHES-REACT


# DEVELOPMENT
# npm i yarn -g
# yarn 
# pm2 start "yarn run start" --name=USMAN-WATCHES-REACT