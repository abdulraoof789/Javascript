var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb1";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydb1");
  dbo.createCollection("persons", function(err, res) {
  if (err) throw err;
     console.log("Collection created!");
  var myobj = {  firstName: 'Steve', lastName: 'Jobs'  };
  dbo.collection("persons").insertOne(myobj, function(err, res) {
  if (err) throw err;
     console.log("1 document inserted");
     db.close();
  });
  });
  
});

