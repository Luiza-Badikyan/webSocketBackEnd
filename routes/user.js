const express = require('express');
const router = express.Router();
const {check} = require('express-validator/check');
const controller = require('../controllers/user');

router.post('/register', controller.register);
//  check('email').isEmail,
router.post('/login', controller.login);

module.exports = router;
