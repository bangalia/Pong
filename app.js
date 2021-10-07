// app.js
const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const { isObject } = require("util");

const port = 3000;

//Socket.io
const io = require('socket.io')(server)

app.use(express.static(__dirname + '/static'));


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/static/index.html')
// })

//app.listen(port, () => console.log(`Pong app listening on port ${port}!`));


io.on('connection', (socket) => {
    socket.broadcast.emit("WELCOME_USER")

    socket.on('disconnect', () => {
        console.log("user disconnected")
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})