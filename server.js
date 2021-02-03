const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const POST = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(POST, () => {
  console.log(`listening on PORT ${POST}`)
});