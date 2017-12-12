const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, './public');
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(8000, () => {
  console.log('listenning on port 8000');
});
