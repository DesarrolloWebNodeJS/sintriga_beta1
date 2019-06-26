const accepts = require('accepts');
const path = require('path');
const createDebugger = require('debug');

const log = createDebugger('sintriga:boot');
log.enabled = true;

module.exports = function fourOhFour(app) {
  app.all('*', function(req, res) {
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');
    // const { path } = req;
    if (type === 'html') {
      return res
        .status('404')
        .sendFile(path.join(__dirname, '../../cliente', 'index.html'));
    }
    if (type === 'json') {
      return res.status('404').json({ error: 'path not found' });
    }
    res.setHeader('Content-Type', 'text/plain');
    return res.send('404 path not found');
  });
};

log('====================================');
log('> BOOT: Habilitar 404 [✓]');
log('====================================');
