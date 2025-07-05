const express = require('express')
const { createProxyMiddleware} = require('http-proxy-middleware')
const {authenticate} = require('./auth-middleware.js')

const app = express()

app.use(authenticate)

app.use('/auth', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: { '^auth': '' }
}));

app.use('/auth', createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true,
    pathRewrite: {'^auth': ''}
}))

app.use('/ai', createProxyMiddleware({
    target: "http://localhost:5003",
    changeOrigin: true,
    pathRewrite: {'^auth': ''}
}))