import { app } from "./app.js";
import dbConnect from "./data/database.js";
const port = process.env.PORT;
dbConnect();

app.listen(port, () =>
  console.log(`Server is working on port ${port} in ${process.env.NODE_ENV}`)
);
