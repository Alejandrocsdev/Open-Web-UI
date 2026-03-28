const { Router } = require('express');
const router = Router();

const chatsController = require('../controllers/chat.controller');

router.post('/send/content', chatsController.sendContent);

module.exports = router;
