//this file is created for seperate db connection
const mongoose = require('mongoose');

// db connection String
mongoose.connect('mongodb://localhost:27017/ecommerce')