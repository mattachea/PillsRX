const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongoose
const uri = process.env.local.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Routes
const usersRouter = require("./routes/api/users");
const medicinesRouter = require("./routes/api/medicines");
app.use("/api/users", usersRouter);
app.use("/api/medicines", medicinesRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
