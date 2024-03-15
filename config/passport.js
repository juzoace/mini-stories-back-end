const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
// const keys = require("./keys");
require('dotenv').config();

const googleClientID = process.env.googleClientID;
const googleClientSecret = process.env.googleClientSecret;
console.log(googleClientID)
module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        // clientID: process.env.googleClientID,
        // clientSecret: process.env.googleClientSecret,
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: "/auth/google/callback",
        // https://mini-stories.onrender.com/auth/google/callback
        proxy: true,
      },
      (accessToken, refreshToken, profile, done) => {
        const image = profile.photos[0].value.substring(
          0,
          profile.photos[0].value.indexOf("?")
        );

        const newUser = {
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          image: image,
        };

        // Check for existing user
        User.findOne({
          googleID: profile.id,
        }).then((user) => {
          if (user) {
            // Return user
            done(null, user);
          } else {
            // Create user
            new User(newUser).save().then((user) => done(null, user));
          }
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user));
  });
};
