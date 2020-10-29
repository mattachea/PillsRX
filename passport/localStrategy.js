const User = require("../database/models/User");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const strategy = new LocalStrategy(function (username, password, done) {
  User.findOne({ username: username }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false, { message: "Incorrect email." });

    bcrypt.compare(password, user.password, (err, same) => {
      if (err) console.log(err);
      if (same === false)
        return done(null, false, { message: "Incorrect Password" });
      else return done(null, user);
    });
  });
});
module.exports = strategy;
