const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const hashPassword = asyncHandler(async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  return passwordHashed;
});

module.exports = hashPassword;
