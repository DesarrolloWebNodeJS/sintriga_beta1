// const message = 'NEMESYSTEM - APP!';
var path = require('path');

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', index);

  app.use(router);

  function index(req, res) {
    return res.sendFile(path.join(__dirname, '../../cliente', 'index.html'));
  }
};

/*
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../cliente', 'index.html'));
}); */
