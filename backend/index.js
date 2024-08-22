const express = require("express");
const app = express();
const port = 4000
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require ("path");
const cors = require("cors")
const products = require("../backend/data/Products.js");
const { error } = require("console");
const  userRouter  = require("./Routes/userRoute.js");
const cartRouter = require("./Routes/cartRoute.js");
const orderRouter = require("./Routes/orderRoute.js");


require("dotenv").config()

app.use(express.json());
app.use(cors());
// Database Conection With mongoDB

mongoose.connect("mongodb+srv://damiramamuzic123:armin1231@cluster0.fhpnggv.mongodb.net/")

// API Creation
 app.get("/" , (req,res) =>{
    res.send("Express App is Running")
  })

// Shema for products

const Product = mongoose.model("Product" , {
  id :{
    type:Number,
    require:true
  },
  name:{
    type:String,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  category :{
    type:String,
    require:true
  },
  new_price :{
    type:String,
    require : true
  },
  description :{
    type : String,
    require: true,
},
dimenzion:{
    type: String,
    require: true,
},
popular: {
  type: Boolean,
  require: true,
},
new_collection: {
  type: Boolean,
  require: true,
}
})
// Import products
app.post(
  "/import/products", async (req, res) => {
      await Product.deleteMany({});
      const importProducts = await Product.insertMany(products);
      res.send({ importProducts });
  }
);

// Get all products
app.get('/products' , async(req,res) => {
  let products = await Product.find({})
  console.log("All products feched")
  res.send(products)
})

// Get  single product
app.get('/products/:id', async(req,res) => {
let product = await Product.findById(req.params.id);
  if (product) {
      res.json(product)
  } else {
      res.sendStatus(404);
  }

})

app.use("/api/user", userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/order" , orderRouter)




 app.listen(port,(error) => {
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else{
        console.log("Error :" +error)
    }
})