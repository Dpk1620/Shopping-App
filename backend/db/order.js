const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    orderNumber:String,
    // userId:{
    //     type:Number,
    //     required: true,
    // },
    // mobile: Number

})

module.exports = mongoose.model('order',orderSchema)