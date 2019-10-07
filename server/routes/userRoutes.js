const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');
const Tasks = require('../models/Tasks');

module.exports = router;