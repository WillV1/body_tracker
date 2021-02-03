const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./models');
require('dotenv').config();

connectDB();

const POST = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(POST, () => {
  console.log(`listening on PORT ${POST}`)
});