const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { ensureAuthenticated } = require("../middleware/auth");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);




router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const { googleID, firstName, lastName, email } = req.user;

    const token = jwt.sign(
      { googleID, firstName, lastName, email },
      process.env.JWT_SECRET,
      // { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const encodedToken = encodeURIComponent(token)

    // Redirect to the dashboard route
    res.redirect(`http://localhost:5174/dashboard?token=${encodedToken}`);
  }
);


router.post("/logout", ensureAuthenticated, (req, res) => {
  try {
    req.logout();
    res.status(200).json({
      success: true
    })
  } catch(err) {
    res.status(400).json({
      success: false
    })

  }
});

module.exports = router;
