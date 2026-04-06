const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log('Request served');
});

app.listen(port, () => {
  console.log(`Node application is listening on port ${port}`);
});
