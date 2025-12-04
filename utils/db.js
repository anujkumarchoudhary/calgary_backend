import mongoose from "mongoose";

export const dbConnect = async () => {
 const  MONGO_DB =
    "mongodb+srv://anujkumarchoudhary6699:tOx14jXbBkM4nvDB@ecommerce.45kqnho.mongodb.net/";

  try {
    await mongoose.connect(MONGO_DB);
    console.log("db connectd");
  } catch (err) {
    console.log("db not connectd");
    console.log(err);
  }
};
