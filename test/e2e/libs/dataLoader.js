const {exec} = require('child_process');
const root = require('app-root-path');
const config = require('./config');

const log4js = require('log4js');
const logger = log4js.getLogger();

log4js.configure({
    appenders: {
        out: {
            type: 'stdout', layout: {
                type: 'pattern',
                pattern: '%r %[%p%] %m'
            }
        },
    },
    categories: {
        default: {appenders: ['out'], level: 'info'}
    }
});

const dataLoader = {

    restoreDB: (done) => {
        dataLoader._execShellCommand(`mongorestore --drop --nsInclude \'${config.dbName}\.*' --host ${config.mongoHost} --gzip --archive=db/${config.dumpFileName}`);
        logger.info(`db has been completed`);
        done();
    },

    dropDB: () => {
        dataLoader._execShellCommand(`mongo ${config.dbName} --host ${mongoHost} --eval "db.dropDatabase()"`);
    },

    _execShellCommand: (command) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                logger.error(`err: ${err}`);
                throw err;
            }

            if (stderr) {
                logger.debug(`stderr: ${stderr}`);
            }

            if (stdout) {
                logger.debug(`info: ${stdout}`);
            }
        });
    }
};

module.exports = dataLoader;
