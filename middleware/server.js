const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    })
);

app.listen(4000, () => {
    console.log('Middleware running on http://localhost:4000');
});
