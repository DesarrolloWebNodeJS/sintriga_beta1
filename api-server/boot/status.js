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

module.exports = function(app) {
  app.use(function(req, res, next) {
    if (!req.session.views) {
      req.session.views = {};
    }
    console.log('Cookies: ', req.cookies);
    // get the url pathname
    var pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
  });


  app.get('/foo', function(req, res, next) {
    res.send('you viewed this page ' + req.session.views['/foo'] + ' times ' + req.cookies);
  });

  app.get('/bar', function(req, res, next) {
    res.send('you viewed this page ' + req.session.views['/bar'] + ' times ' + req.cookies);
  });

};

