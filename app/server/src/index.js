const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('204 no content - sam se wymysl kontent fronciarzu');
});

app.listen(8080, () => {
  console.log('App is running on http://localhost:8080/');
});