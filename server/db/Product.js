const mongoose = require("mongoose");

// define productSchema 
const productSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  price: Number,
  rating: Number,
});
 //export data from model
module.exports = mongoose.model("products", productSchema);
