var parseurl = require('parseurl');
var moment = require('moment');
var timeago = require('timeago.js');
const pkg = require('../../package.json');

module.exports = function(app) {
  const inicio = moment(new Date('01/01/2019')).format('YYYY-MM-DD');
  const ahora = moment(new Date()).format('YYYY-MM-DD');
  const hace = timeago.format(new Date('01/01/2019'));
  const daysRunning = moment().diff(new Date('01/01/2019'), 'days');

  app.use(function(req, res, next) {
    if (!req.session.views) {
      req.session.views = {};
    }
    // get the url pathname
    var pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
  });

  app.get('/lb', app.loopback.status());

  app.get('/es', function(req, res) {
    const cont = req.session.views['/es'];
    const version = pkg.version;

    res.json({
      appVersion: version,
      appInicio: inicio,
      appHoy: ahora,
      appHace: hace,
      appDiasCorriendo: daysRunning,
      appVistaPagina: cont,
      appCookies: req.secret
    });
  });

  app.get('/test', function(req, res) {
    res.send('Esta es una PRUEBA. Numero de peticiones a esta URL:  ' + req.session.views['/test'] + ' veces. ');
  });
};

console.log('====================================');
console.log('> BOOT: Estado [✓]');
console.log('====================================');
