/*  ----------------------------------------   General   ------------------------------------*/
const port = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

/*  ----------------------------------------   MongoDB   ------------------------------------*/
const mongo = require("./database");

/*  ----------------------------------------   Session   ------------------------------------*/
const session = require("express-session");
app.use(
  session({
    secret: "mySecret", //random string for hash
    resave: false,
    saveUninitialized: false,
  })
);

/*  ----------------------------------------   Passport   -----------------------------------*/
const passport = require("passport");
const bcrypt = require("bcryptjs");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

/*  ----------------------------------------   Routes   -------------------------------------*/
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

/*  ----------------------------------------   Errors   -------------------------------------*/
app.use((err, req, res, next) => {
  console.log("====== ERROR =======");
  console.error(err.stack);
  res.status(500);
});

/*  ----------------------------------------   Server   -------------------------------------*/
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
