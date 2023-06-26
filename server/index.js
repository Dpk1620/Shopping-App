const express = require("express");
// use express 
const app = express();

// import db for mongodb connection
require("./db/config");
const Product = require("./db/Product");

// for data convert into Json
app.use(express.json());

// request for api calling
app.get("/api", async (req, res) => {
  const result = await Product.find();
  res.send(result);
});

// app listen for 5000
app.listen("5000")
console.log("server connect");
