/* module.exports = function(app) {

  var started = new Date();
  console.log('> pre- ' + started);
  console.log('> Status: ');

  var router = app.loopback.Router();

  app.get('/333', function(req, res) {
    console.log('Cookies: ', req.cookies);
    const ga = req.cookies;
    req.flash('info', 'Welcome');
    res.send({
      comienzo: started,
      cookies: ga,
      enLinea: (Date.now() - Number(started)) / 1000
    });
  });

  app.get('/addFlash', function(req, res) {
    req.flash('info', 'Flash Message Added');
    res.redirect('/');
  });

  app.use(router); */

/*
  function index(req, res) {
    console.log('Cookies: ', req.cookies);
    const ga = req.cookies;
    req.flash('info', 'Welcome');
    res.send({
      comienzo: started,
      cookies: ga,
      enLinea: (Date.now() - Number(started)) / 1000
    });
};
*/
var parseurl = require('parseurl');
var moment = require('moment');
const timeago = require('timeago.js');

const timeagoInstance = timeago();

module.exports = function(app) {
  console.log('> Status');
  const started = new Date();
  const ahora = moment(new Date()).format('YYYY-MM-DD');
  const hace = timeagoInstance.format(new Date('12/01/2018'));
  const daysRunning = moment().diff(new Date('12/01/2018'), 'days');

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
    // res.send('you viewed this page ' + req.session.views['/es'] + ' times ' + req.cookies);
    // res.send('you viewed this page ' + req.session.views['/es'] + ' times ' + req.cookies);
    const cont = req.session.views['/es'];
    const on = (Date.now() - Number(started)) / 1000;
/*     res.json({
      comienzo: started,
      vistaPagina: cont,
      secretCookie: req.secret,
      enLinea: on
    }); */
    res.json({
      comienzo: started,
      ahora: ahora,
      hace: hace,
      diasCorriendo: daysRunning,
      vistaPagina: cont,
      cookies: req.secret,
      enLinea: on
    });
  });

  app.get('/test', function(req, res) {
    res.send(
      'you viewed this page ' +
        req.session.views['/test'] +
        ' times '
    );
  });
};

// const message = 'NEMESYSTEM - APP!';
/* var path = require('path');

module.exports = function(app) {
  console.log('> Inicio');
  var router = app.loopback.Router();
  router.get('*', index);

  app.use(router);

  function index(req, res) {

    return res.sendFile(path.join(__dirname, '../../cliente', 'index.html'));
  }
};
 */
/*
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../cliente', 'index.html'));
}); */
