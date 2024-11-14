import "dotenv/config";
import mongoose from "mongoose";

const dbUrl = process.env.DB_URL || "";

// write an method to connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl).then((data) => {
      console.log(`DataBase connected success ${data.connection.host}`);
    });
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }

};

export default connectDB;