var MongoClient = require('mongodb').MongoClient
var settings = require('./settings');
MongoClient.connect("mongodb://localhost/"+settings.db, function (err, db) {
  if(err){return console.dir(err);}
  console.log("conected to db")
  db.collection("users",function(err, collection){
    var docs =[
      {name:'taguchi',score:40},
      {name:'fkoji',score:80},
      {name:'dotinstall',score:60},
    ]
    // collection.find({name:"taguchi"}).toArray(function(err, items){
    //   console.log(items)
    // })
    var stream = collection.find().stream();
    stream.on("data",function(item){
      console.log(item);
    });
    stream.on("end", function(){
      console.log("finished")
    })
  })
})