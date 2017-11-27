var MongoClient = require('mongodb').MongoClient
var settings = require('./settings');
MongoClient.connect("mongodb://localhost/"+settings.db, function (err, db) {
  if(err){return console.dir(err);}
  console.log("conected to db")

})