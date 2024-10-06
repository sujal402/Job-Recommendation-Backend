const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/job-rec';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('db Connected :)');
  } catch (err) {
    console.error(err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
