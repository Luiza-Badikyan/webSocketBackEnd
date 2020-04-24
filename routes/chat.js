const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat');
const checkToken = require('../middleware/checkToken');

router.post('/:userId/messages/:groupId', checkToken, controller.addMessage);

router.get('/messages/:groupId', checkToken, controller.getMessages);

module.exports = router;