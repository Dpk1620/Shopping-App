const express = require("express")
const app = express();
require('./db/config')
const Order = require('./db/order')
app.use(express.json())
app.post("/register",async (req,res)=>{
    console.log(req)
    const addOrder = new Order(req.body)
    let result = await addOrder.save()
    res.send(result)
})

app.listen("5000")