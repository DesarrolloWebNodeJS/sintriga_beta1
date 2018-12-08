require('dotenv').load();

const express = require('express');
const path = require('path');

const port = 5887;
const app = express();

app.set('state namespace', '__sintriga__');
app.set('port', port);

app.use(express.static(path.join(__dirname, '../cliente')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../cliente', 'index.html'));
});

app.listen(app.get('port'), function() {
  app.emit('started');
  console.log(
    'sintriga servidor escuchando en %d en %s',
    app.get('port'),
    app.get('env')
  );
});

