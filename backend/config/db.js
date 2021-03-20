import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Mongo connected :${con.connection.host}`.blue.underline);
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
  }
};

export default connectDB;
