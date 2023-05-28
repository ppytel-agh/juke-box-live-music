const express = require('express');
const typeorm = require('typeorm');
const app = express();

const port = 8080;
app.use(express.json());

typeorm.createConnection().then(() => {
  console.log("Connected to the database.");
}).catch((error) => {
  console.error("Error connecting to the database:", error);
});

app.get('/', (req, res) => {
  res.send('204 no content - sam se wymysl kontent fronciarzu');
});

app.post('/register-new-user', require('./routes/register-new-user'));

app.post('/login', require('./routes/login'));

app.post('/add-new-artist', require('./routes/add-new-artist'));

app.post('/add-new-concert', require('./routes/add-new-concert'));

app.post('/add-new-booking', require('./routes/add-new-booking'));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});