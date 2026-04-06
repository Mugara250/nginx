const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log('request served by node.js(express) application');
});

app.listen(port, () => {
  console.log(`Node application is listening on port ${port}`);
});
