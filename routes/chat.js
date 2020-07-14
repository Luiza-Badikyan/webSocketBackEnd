const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat');
const checkToken = require('../middleware/checkToken');
const upload = require('../helpers/uploader');

// router.post('/:userId/messages/:groupId', checkToken, controller.addMessage);

router.post('/:userId/messages/:groupId', upload.array('uploads[]', 10), checkToken, controller.addMessage);

router.get('/messages/:groupId', checkToken, controller.getMessages);

router.post('/attachment/:messageId', upload.single('file'), checkToken, controller.attacheFiles);

module.exports = router;