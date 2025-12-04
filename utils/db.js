import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("db connectd");
  } catch (err) {
    console.log("db not connectd");
    console.log(err);
  }
};
