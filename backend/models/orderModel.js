const mongoose = require("mongoose")

const orderShema =  new mongoose.Schema(
    {
        userId : {
            type:String,
            require:true
        },
        items : {
            type:Array,
            require:true
        },
        amount : {
            type:Number,
            require:true
        },
        address : {
            type:Object,
            require:true
        },
        status :{
            type:String,
            default:"Proccesing"
        },
        date : {
            type:Date,
            default:Date.now()
        },
      
    }
) 

const orderModel = mongoose.models.order || mongoose.model("order" , orderShema)

module.exports = orderModel