// app.js
const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = require('socket.io')(server)
const { isObject } = require("util");

const port = 3000;

app.use(express.static(__dirname + '/static'));


io.on('connection', (socket) => {
    socket.broadcast.emit("WELCOME_USER")

    io.on('disconnect', () => {
        console.log("user disconnected")
    })
    io.on('connect', () => {
        console.log("user connected")
    })

    io.on('hello', () => {
        console.log('hello')
    })

    socket.on("color change", (colorText) => {
        io.emit('color change', colorText)
        console.log("Color changed to:" + colorText)
    })
})


server.listen(3000, () => {
    console.log('listening on *:3000')
})

app.get('/colors1', function (req, res) {
    res.send(colors.slice(0,3))
})

app.get('/colors2', function (req, res) {
    res.send(colors.slice(3,6))
})

app.get('/colors3', function (req, res) {
    res.send(colors.slice(6))
})
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Pink", "Purple", "Violet", "Brown"]