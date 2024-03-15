const jwt = require('jsonwebtoken');

module.exports = {
  ensureAuthenticated: function (req, res, next) {
    // Check if token is present in the headers
    const  token = req.headers.authorization;

    // If token is not present, return unauthorized
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

      // Attach user data to the request object
      req.user = decoded;

      // Move to the next middleware
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  },
  ensureGuest: function (req, res, next) {
    // Check if token is present in the headers
    const token = req.headers.authorization;

    // If token is present, return unauthorized
    if (token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Move to the next middleware
    next();
  },
};
