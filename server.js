/*  ----------------------------------------   General   ------------------------------------*/
const config = require("config");
const port = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

/*  ----------------------------------------   MongoDB   ------------------------------------*/
const mongooseConnection = require("./database");

/*  ----------------------------------------   Session   ------------------------------------*/
const session = require("express-session");
const flash = require("connect-flash");
app.use(flash());
app.use(
  session({
    secret: config.get("sessionSecret"),
    resave: false,
    saveUninitialized: false,
  })
);

/*  ----------------------------------------   Passport   -----------------------------------*/
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

/*  ----------------------------------------   Routes   -------------------------------------*/
app.use("/api/users", require("./routes/api/users"));
app.use("/api/medicines", require("./routes/api/medicines"));

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
