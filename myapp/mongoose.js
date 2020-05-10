const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const uri = "mongodb+srv://legend-in:<password>@testcluster-73kpl.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("webdxd").collection("test");
  // perform actions on the collection object
  console.log(collection.find());
  client.close();
});
