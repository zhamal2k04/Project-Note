const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/notes',
    createProxyMiddleware({
      target: 'http://localhost:5500', // Укажите URL вашего сервера
      changeOrigin: true,
    })
  );
};
