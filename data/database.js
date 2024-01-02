import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { dbName: "todo" });
    console.log("db connection successfull!");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
