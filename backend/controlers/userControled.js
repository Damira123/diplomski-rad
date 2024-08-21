const userModel = require ("../models/userModels.js");
const bcrypt= require ("bcrypt")
const jwt = require( "jsonwebtoken")
const validator = require( "validator")

// login user

const loginUser =  async(req , res) => {
  const {email,password} = req.body
  try {
     // checking is email exist
     const user = await userModel.findOne({email})

     if (!user) {
        return res.json({success:false , massage:"User does not exsist"})
     }

     // for passwords
     const isMatch = await bcrypt.compare(password,user.password)
    if (!isMatch) {
        return res.json({success:false , massage:"Invalid password"})
    }
    const token = createToken(user._id)
    res.json({success:true , token})
  } catch (error) {
     console.log(error)
     res.json({success:false , massage : "Error"})
  }
}

const createToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET )
}
// register user

const registerUser = async(req,res) => {
   const {name,password,email} = req.body
   try {
    // checking is user exsisting already
    const exists = await userModel.findOne({email})
    if (exists) {
        return res.json({success:false,massage:"User already exists" })
    }
    // valideiting email format i password strong
    if (!validator.isEmail(email)) {
        return res.json({success:false,massage:"Plase enter the valid email"})
    }
    if (password.length < 8) {
        return res.json({success:false , massage: "Plase enter the strong password"})
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt) 

    // creating new user
    const newUser = new userModel ({
        name:name,
        email:email,
        password:hashedPassword,
        
    })

     const user =await newUser.save()
     const token = createToken(user._id)
     res.json({success:true,token})
     
   } catch (error) {
     console.log(error)
     res.json({success:false , message:"Error"})
   }
}

module.exports = {loginUser , registerUser}
