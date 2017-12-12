var express = require('express');
var bodyParser = require('body-parser');
var {ObjecID} = require('mongodb');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/auth');

var app = express();

app.use(bodyParser.json());

app.post('/todo', authenticate, function (request, response) {
  var todo = new Todo({
    title: request.body.title,
    content: request.body.content,
    completed: request.body.completed
  });

  todo.save().then((collection) => {
    response.send(collection)
  }, (e) => {
    response.send(e);
  });
});

app.get('/todo', authenticate, function (request, response) {

  Todo.find().then((collection) => {
    response.send(collection)
  }, (e) => {
    response.send(e);
  });
});

app.get('/todo/:id', authenticate, function (request, response) {

  Todo.findById(request.params.id).then((collection) => {
    response.send(collection)
  }, (e) => {
    response.send(e);
  });
});

app.get('/user/me', authenticate, function (request, response) {
  response.send(request.user);
});

app.post('/user', function (request, response) {
  var data = _.pick(request.body, ['name', 'email', 'password']);
  var user = new User(data);

  user.save().then(() => {
    return user.generateAuthToken() ;
  }).then((token) => {
    response.header('x-auth', token).send(user);
  }).catch((e) => {
    response.send(e);
  });
});


app.listen(8000, () => {
  console.log('listenning on port 8000');
});
