const express = require('express');

// const path = require('path');

const bodyParser = require('body-parser');

const dbQueries = require('../db/index.js');

const app = express();

const jsonParser = bodyParser.json();

// Will need a request on load to this endpoint in order to serve
// up static files:
// app.use('/static', express.static(path.join(__dirname, '/../client/dist')));

app.get('/app/home', (req, res) => {
  res.send('hello world');
});

app.get('/app/:productId', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  return dbQueries.pullItemInfo(5, (convertedData) => {
    res.send(convertedData);
  });
});

app.listen(3001);
