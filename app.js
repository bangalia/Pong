// app.js
const express = require("express")
const app = express()
const http = require('http')

const port = 3000;

//Socket.io
// const io = require('socket.io')(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.listen(port, () => console.log(`Pong app listening on port ${port}!`));