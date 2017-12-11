var MongoClient = require('mongodb').MongoClient;

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/todoApp', function(error, db) {
  if (error) {
    return console.log('unable to connect mongodb serve');
  }

  db.collection('todos').insertOne({
    text: 'Add other todo collection',
    completed: true

  },(error, result) => {
    if (error) {
      return console.log('unable to insert todo collection');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('users').insertOne({
    name: 'Norhan El-Nezamy',
    age: 22,
    country: 'Egypt, Almahallla Alkoubre'

  },(error, result) => {
    if (error) {
      return console.log('unable to insert user collection');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
