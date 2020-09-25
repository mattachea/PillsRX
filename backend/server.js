const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//mongoose
const uri =
  "mongodb+srv://matt:matt@cluster0.pykuf.mongodb.net/data?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
