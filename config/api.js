const axios = require('axios');

const api = axios.create({
  baseURL: `http://localhost:${process.env.OPEN_WEBUI_PORT}`,
  headers: { Authorization: `Bearer ${process.env.OPEN_WEBUI_KEY}` },
});

module.exports = api;
