const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  nuser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = Post = mongoose.model('Post', PostSchema);