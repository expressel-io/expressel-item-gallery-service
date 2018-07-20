const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();

// Will need a request on load to this endpoint in order to serve
// up static files:
// app.use('/static', express.static(path.join(__dirname, '/../client/dist')));

app.get('/home', (req, res) => {
  res.send('hello world');
});

app.get('/redirect', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  res.send('A redirect action has been recieved');
});

app.listen(3001);
