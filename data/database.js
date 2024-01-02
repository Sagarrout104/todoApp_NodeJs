import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL, { dbName: "todo" })
    .then((c) => {
      console.log(`db connection successfull with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default dbConnect;
