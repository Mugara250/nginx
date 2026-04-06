const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

const replicaApp = process.env.APP_NAME;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log(`Request served by ${replicaApp}`);
});

app.listen(port, () => {
  console.log(`${replicaApp} is listening on port ${port}`);
});
