// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/todoApp', function(error, db) {
  if (error) {
    return console.log('unable to connect mongodb serve');
  }

  db.collection('todos').deleteOne({_id: new ObjectID('5a2d21ab40b83960598fa755')}).then((result) => {
    console.log('Todo By ID: : '+JSON.stringify(result, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.close();
});
