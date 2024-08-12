const express = require("express");
const app = express();
const port = 4000
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require ("path");
const cors = require("cors");
const {type} = require("os")

const products = require("../backend/data/Products.js");
const { error } = require("console");


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

//Shema for User model

const Users = mongoose.model("Users" , {
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String,

  },
  cartData:{
    type:Object
  },
  date:{
    type:Date,
    default:Date.now
  }
})
//Creating Endpoint for regestring for User
app.post("/signup" , async(req,res) =>{
  let check = await Users.findOne({email:req.body.email})
  if(check){
    return res.status(400).json({success:false , errors :"exsisting user found with same email address"})

  }
  let cart = {}
    for (i= 0; i < 300 ; i++) {
      cart[i] = 0
    }
  const user = new Users ({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart
  }
  )
  await user.save()
  const data = {
    user : {
      id:user.id
    }
  }
  const token = jwt.sign(data,"secret-ecom")
  res.json({success:true,token})

}) 

// Creating endpoint for the userlogin
app.post("/login" , async(req,res) => {
  let user = await Users.findOne({email:req.body.email})
  if(user) {
    const passCompare = req.body.password === user.password 
    if(passCompare) {
       const data= {
        user:{
          id:user.id
        }
       }
       const token = jwt.sign(data,"secret-ecom")
       res.json({success:true , token })
    }
    else{
      res.json({success:false , errors : "Wrong password"})
    }
    
  }
  else{
    res.json({success:false , errors: "Wrong email id"})
  }
})

 app.listen(port,(error) => {
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else{
        console.log("Error :" +error)
    }
})