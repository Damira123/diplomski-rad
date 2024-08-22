const express = require("express")
const {placeOrder, verifyOrder} = require("../controlers/orderControled.js")
const authMiddleware = require("../middlrware/auth.js")

const orderRouter = express.Router()

orderRouter.post("/place" , authMiddleware, placeOrder)




module.exports = orderRouter