node {

    stage('git checkout') {
        cleanWs()
        checkout scm
    }

    stage('init') {
        sh 'npm cache clean --force'
        sh 'npm install'
    }

    stage('Initialize containers') {
        sh 'docker/remove.sh'
        sh 'docker network create dev-net || true'

        env.DEV_HOST = sh(script: "ip addr ls docker0 | awk '/inet / {print \$2}' | cut -d\"/\" -f1", returnStdout: true).trim()
        env.MONGO_HOST = env.DEV_HOST
        env.FRONT_HOST = env.DEV_HOST
        env.FRONT_PORT = 4201

        sh 'docker-compose -f docker/docker-compose.yml up -d'

        sh "mongorestore --host ${env.MONGO_HOST} --gzip --drop --nsInclude barnacle.* --archive=$WORKSPACE/db/barnacle.test.gz"
    }

    stage('e2e test') {
        sh 'npm run test:e2e:remote'
    }
}
