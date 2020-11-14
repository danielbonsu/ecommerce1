const jwt = require('jsonwebtoken');
const axios = require('axios');
const asyncHandler = require('express-async-handler');
const config = require('config');
const UserModel = require('../models/Users');

const setAuthToken = asyncHandler(
  async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token)
      return res
        .status(400)
        .json({ error: 'no token found' });

    try {
      const decodedToken = jwt.verify(
        token,
        config.get('JWT_SECRET_KEY')
      );

      if (!decodedToken)
        return res.status(400).send('bad bad token');

      req.user = await UserModel.findById(
        decodedToken.userID
      );

      next();
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = setAuthToken;
