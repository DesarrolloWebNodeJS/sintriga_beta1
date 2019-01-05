require('dotenv').load();

var _ = require('lodash'),
  loopback = require('loopback'),
  boot = require('loopback-boot'),
  logger = require('./logger'),
  expressState = require('express-state');

  var app = loopback();
  var isBeta = !!process.env.BETA;
/*
  NOTA: CORS es para compartir recursos entre origenes para propósitos de desarrollo del frontend.
  var whitelist = ['http://localhost:4000', 'http://localhost:5000'];
  var corsOptions = {
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
    }
  }
}; */
process.env.PORT = 5000;

expressState.extend(app);
app.set('state namespace', '__sintriga__');
app.set('port', process.env.PORT);

// app.use(cors(corsOptions));
app.use(loopback.token());
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

console.log('> Seteando passoport');
// setupPassport(app);
console.log('> Passport OK');

app.start = _.once(function() {
  app.listen(app.get('port'), function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    logger.appStarted(app.get('port'), baseUrl, isBeta);
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
