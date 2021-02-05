const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Init middleware
app.use(express.json({extended: false}));
app.use(cors());

const POST = process.env.PORT || 3001;

//Routes

const routes = require('./routes');

app.use('/users', routes.users);
app.use('/auth', routes.auth);
app.use('/profile', routes.profile);
app.use('/post', routes.post);

//List for server
app.listen(POST, () => {
  console.log(`listening on PORT ${POST}`)
});