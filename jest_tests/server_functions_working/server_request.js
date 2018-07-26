// This can be considered our active server call.
// It goes to the network and fetches some user data.

const express = require('express');

// const path = require('path');

const dbQueries = require('../../db/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/app/home', (req, res) => {
  dbQueries.pullItemInfo(1, (convertedData) => {
    res.send(convertedData);
  });
});

app.get('/app/product/:productId', (req, res) => {
  const itemID = req.params.productId;
  dbQueries.pullItemInfo(itemID, (convertedData) => {
    res.send(convertedData);
  });
});

app.listen(3001);