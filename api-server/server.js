require('dotenv').load();

const _ = require('lodash');
const loopback = require('loopback');
const boot = require('loopback-boot');
const logger = require('./logger');
const expressState = require('express-state');
// const setupPassport = require('./component-passport');
const pasaporte = require('./componentes-vr');

const app = loopback();
const isBeta = !!process.env.BETA;

process.env.PORT = 5000;

expressState.extend(app);
app.set('state namespace', '__sintriga__');
app.set('port', process.env.PORT);
app.use(loopback.token({
  model: app.models.accessToken
}));
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

pasaporte(app);

const { db } = app.datasources;
db.on('connected', _.once(() => logger.msj('> BASE DE DATOS Conectada')));

app.start = _.once(function() {
  const server = app.listen(app.get('port'), function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    logger.appStarted(app.get('port'), baseUrl, isBeta);
  });

  process.on('SIGINT', () => {
    logger.msj('Apagando el servidor');
    server.close(() => {
      logger.msj('El servidor ah sido cerrado');
    });
    logger.msj('Cerrando la conexión con la Base de Datos');
    db.disconnect()
      .then(() => {
        logger.msj('La conexión con la BDD ah sido cerrada');
        // exit process
        // this may close kept alive sockets
        // eslint-disable-next-line no-process-exit
        process.exit(0);
      });
  });
});

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
