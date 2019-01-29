# Barnacle e2e tests

##### Environment variables
```
MONGO_HOST
FRONT_HOST
FRONT_PORT
SELENIUM_HOST (for remote run)
```
##### Run e2e tests locally
```
$ devHostIP=$(docker inspect dev-net | egrep -o '\"Gateway\":.\"([0-9]{1,3}\.){3}[0-9]{1,3}' | egrep -o '([0-9]{1,3}\.){3}[0-9]{1,3}')
$ export DEV_HOST_IP="$devHostIP"
$ export MONGO_HOST="$devHostIP"
$ export FRONT_HOST="$devHostIP"
$ export FRONT_PORT=4200
$ export BACK_HOST="$devHostIP"

$ docker network create dev-net || true
$ docker-compose -f docker/docker-compose.yml up -d

$ npm install

$ npm run webdriver:update

$ npm run db:update

$ npm run test:local

$ npm run reports:generate
```
