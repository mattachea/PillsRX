const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongoose
const uri = config.get("mongoURI");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
