const express = require('express');

// const path = require('path');

const bodyParser = require('body-parser');

const dbQueries = require('../db/index.js');

const app = express();

const jsonParser = bodyParser.json();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/app/home', (req, res) => {
  dbQueries.pullItemInfo(1, (convertedData) => {
    res.send(convertedData);
  });
});

app.get('/app/product/:productId', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  return dbQueries.pullItemInfo(5, (convertedData) => {
    res.send(convertedData);
  });
});

app.listen(3001);
