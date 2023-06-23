
// add express for get and post api
const express = require("express");
const app = express();

// Import config.js file for db connection
require("./db/config");

// import order schema for save data in db
const Order = require("./db/order");

// get request body in json format
app.use(express.json());

//root api call at localhost:5000
app.get("/", async (req, res) => {
  res.send("hellow world");
});

// api call from new Order 
app.post("/createOrder", async (req, res) => {
  console.log(req);
  const addOrder = new Order(req.body);
  let result = await addOrder.save();
  res.send(result);
});

app.listen("5000");
