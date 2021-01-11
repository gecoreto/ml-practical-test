const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const api = require('./backend/api');
const cors = require('cors');

/**
 * FRONTEND
 */
app.use(favicon(__dirname + '/www/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'www')));
app.use(express.static(path.join(__dirname, 'coverage/frontend')));
app.use(cors({origin: '*'}));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/items', function (req, res) {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.get('/items/:id', function (req, res) {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.get('/coverage', function (req, res) {
  res.sendFile(path.join(__dirname, 'coverage/frontend', 'index.html'));
});

/**
 * API REST
 */
app.use('/api', api);

app.listen(port, () => {
  console.log(`FRONTEND WEB http://localhost:${port}/items`)
  console.log(`COVERAGE http://localhost:${port}/coverage`)
});