const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URI) {
      throw new Error('DATABASE_URI environment variable is not defined');
    }

    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndexes: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
