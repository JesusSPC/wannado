const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');
const Tasks = require('../models/Tasks');

router.get('/user/home', (req, res, next) => {
  User.findOne(req.user)
  .then(user => res.json({user}))
})

module.exports = router;