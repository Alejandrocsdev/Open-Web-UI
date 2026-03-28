const chatService = require('../services/chat.service');

const { asyncHandler } = require('../middlewares');

exports.sendContent = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const result = await chatService.chatCompletions(content);
  res.json(result);
});
