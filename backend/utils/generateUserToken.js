const jwt = require('jsonwebtoken');
const config = require('config');
const generateToken = (userID) => {
  const token = jwt.sign(
    { userID },
    config.get('JWT_SECRET_KEY'),
    { expiresIn: '20d' }
  );

  return token;
};

module.exports = generateToken;
