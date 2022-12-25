const express = require("express");
require("dotenv").config();
const Router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

// app.use(cors());
// app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kgzzpjr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

Router.get("/crud", (err, res) => {
  res.send("server is running");

});



async function run(){
   try{

   }
   catch{

   }

}

run().catch((err) => console.log(err));


module.exports = Router;