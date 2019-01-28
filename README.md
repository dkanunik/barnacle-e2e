# Barnacle e2e tests

##### Environment
```
MONGO_HOST
FRONT_HOST
FRONT_PORT
SELENIUM_HOST
```
##### Run e2e tests locally
```
export MONGO_HOST='localhost'
export FRONT_HOST='localhost' 
export FRONT_PORT='4200'

docker network create dev-net || true
docker-compose -f docker/docker-compose.yml up -d

npm install

npm run webdriver:update
npm run webdriver:start

npm run db:start
npm run db:update

npm run test:local
```
