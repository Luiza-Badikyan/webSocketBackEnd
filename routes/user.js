const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.post('/:userId/messages/:groupId', controller.addMessage);

router.get('/:userId/messages/:groupId', controller.getMessages);

module.exports = router;