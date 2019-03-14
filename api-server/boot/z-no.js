import accepts from 'accepts';
// TODO: Handlear estos mensajes en el frontend.
export default function fourOhFour(app) {
  app.all('*', function(req, res) {
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');
    // const { path } = req;


    if (type === 'html') {
      // req.flash('danger', `We couldn't find path ${ path }`);
      return res.status('404').json({ error: 'path not found' });
    }

    if (type === 'json') {
      return res.status('404').json({ error: 'path not found' });
    }

    res.setHeader('Content-Type', 'text/plain');
    return res.send('404 path not found');
  });
}

console.log('====================================');
console.log('> BOOT: 404 [✓]');
console.log('====================================');
