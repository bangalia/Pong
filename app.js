// app.js
const express = require("express")
const app = express()
const http = require('http')

//Socket.io
const io = require('socket.io')(server)

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html')
})