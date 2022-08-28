//================ connecting mongodb with node ================

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "employee"; //  mention your database name
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("worker"); //  mention your collection name
  let response = await collection.find().toArray();

  console.log(response);
}

getData();
