const createDebugger = require('debug');

const log = createDebugger('sintriga:boot');
log.enabled = true;

module.exports = function enableAuthentication(app) {
  // enable authentication
  app.enableAuth();
  log('====================================');
  log('> BOOT: Habilitar Autentificación [✓]');
  log('====================================');
};
