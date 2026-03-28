const { Router } = require('express');
const router = Router();

const chatsRoutes = require('./chats.routes');

router.use('/chats', chatsRoutes);

module.exports = router;
