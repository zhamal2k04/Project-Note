const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/notes',
    createProxyMiddleware({
      target: 'https://project-note-ac6k.onrender.com/', // Укажите URL вашего сервера
      changeOrigin: true,
    })
  );
};
