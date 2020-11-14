const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const UserModel = require('../models/Users');
const GenerateToken = require('../utils/generateUserToken');
const HashPassword = require('../utils/hashUserPassword');
const Protected = require('../utils/Protected');
const MatchPassword = require('../utils/PasswordValidation');

// user auth route
router.post(
  '/signIN',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    const verifyPassword = await MatchPassword(
      password,
      user.password
    );

    if (user && verifyPassword) {
      res.send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: await GenerateToken(user._id),
      });
    } else {
      res.status(401).send('invalid email or password');
    }
  })
);
// registration route
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    let user = await UserModel.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ msg: 'user already exist' });

    user = await new UserModel({
      firstName,
      lastName,
      email,
      password: await HashPassword(password),
    });
    user = await user.save();

    user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      token: GenerateToken(user._id),
    };

    res.send(user);
  })
);

module.exports = router;
