const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

var {sendData} = require('./sendData');

const publicPath = path.join(__dirname, './public');
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log(' User Connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('send',(data, callback) => {

    // io.emit('pushData',sendData(data));

    socket.broadcast.emit('pushData', sendData(data.lat, data.lng));
    callback('response from server');

  });
});


server.listen(3000, () => {
  console.log('listenning on port 3000');
});
