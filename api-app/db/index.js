
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DB_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const database = client.db("testDB");
//     const data = database.collection("demo");
//     await data.insertOne({id: 1, name: "test", age: 23});
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports = run;

const mongoose = require("mongoose");

async function run(){
    const client = await mongoose.connect(process.env.DB_URI)
    client.connection.db = "ProductsDB";
    console.log("Connected to Database successfully");
}
module.exports = run;