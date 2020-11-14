const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const passwordVerification = asyncHandler(
  async (passwordToMatch, password) => {
    return await bcrypt.compare(passwordToMatch, password);
  }
);

module.exports = passwordVerification;
