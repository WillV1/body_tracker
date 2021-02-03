const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = connectDB; 