const createDebugger = require('debug');

const log = createDebugger('sintriga:boot');
log.enabled = true;

module.exports = function mountRestApi(app) {
  var restApiRoot = app.get('restApiRoot');
  app.use(restApiRoot, app.loopback.rest());

  log('====================================');
  log('> BOOT: Habilitar API [✓]');
  log('====================================');
};
