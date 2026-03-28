const api = require('../config/api');

exports.chatCompletions = async (content) => {
  const { data } = await api.post('/api/chat/completions', {
    model: 'mistral-small:latest',
    files: [{ type: 'collection', id: process.env.KNOWLEDGE_ID }],
    messages: [{ role: 'user', content }],
  });
  return data;
};
