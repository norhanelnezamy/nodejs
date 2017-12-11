// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/todoApp', function(error, db) {
  if (error) {
    return console.log('unable to connect mongodb serve');
  }

  db.collection('todos').findOneAndUpdate({
    _id: new ObjectID('5a2d20df5bae2d5faa19af43')
  },
  {
    $set:{
      completed: true
    }
  }).then((result) => {
    console.log('Todo By ID: : '+JSON.stringify(result, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5a2d28a662499063e895cf66')
  },
  {
    $inc:{
      age: 1
    }
  }).then((result) => {
    console.log('Todo By ID: : '+JSON.stringify(result, undefined, 2));
  },(err) => {
    console.log('Error: '+err);
  });

  db.close();
});
