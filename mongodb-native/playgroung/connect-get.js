// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/todoApp', function(error, db) {
  if (error) {
    return console.log('unable to connect mongodb serve');
  }

  db.collection('todos').find().toArray().then((collection) => {
    console.log('All Todos: '+JSON.stringify(collection, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.collection('users').find().toArray().then((collection) => {
    console.log('All Users: '+JSON.stringify(collection, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.collection('todos').find({completed: false}).toArray().then((collection) => {
    console.log('Not Completed Todos: '+JSON.stringify(collection, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.collection('todos').find({_id: new ObjectID('5a2d219ceb9f86603a2ff27e')}).toArray().then((collection) => {
    console.log('Todo By ID: : '+JSON.stringify(collection, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.close();
});
