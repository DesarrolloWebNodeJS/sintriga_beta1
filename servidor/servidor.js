require('dotenv').load();

var _ = require('lodash'),
  loopback = require('loopback'),
  boot = require('loopback-boot'),
  expressState = require('express-state');

var app = loopback();
var isBeta = !!process.env.BETA;

expressState.extend(app);
app.set('state namespace', '__sintriga__');
app.set('port', process.env.PORT || 2326);
/* app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
})); */
app.set('view engine', '.hbs');
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
    console.log(
      'sintriga servidor escuchando en %d en %s',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      console.log('----------------------------------------');
      console.log('---  sintriga esta es modo beta      ---');
      console.log('----------------------------------------');
    }
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
