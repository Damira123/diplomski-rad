const orderModel = require("../models/orderModel.js")
const userModel = require("../models/userModels.js")




// placing user order for frontend
const placeOrder = async(req , res) => {
   
  try {
    const newOrder = new orderModel({
       userId:req.body.userId,
       items:req.body.items,
       amount:req.body.amount,
       address:req.body.address

    })
    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

    res.json({ success: true, orderId: newOrder._id });
  } catch (error) {
    console.log(error);
    res.json({success:false , message:"Error"})
    
  }

}





module.exports= {placeOrder}