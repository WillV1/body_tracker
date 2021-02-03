const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  gender: {
    type: String
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  gender: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = User = mongoose.model('User', UserSchema);