const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  gender: {
    type: String
  },
  goalWeight: {
    type: Number,
    required: true
  },
  startingWeight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  bio: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);