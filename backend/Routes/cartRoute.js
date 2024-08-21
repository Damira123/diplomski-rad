const express = require("express")
const {addToCart} = require("../controlers/cartCotroled.js")
const {removeFromCart} = require("../controlers/cartCotroled.js")
const {getCart} = require("../controlers/cartCotroled.js")
const authMiddleware = require("../middlrware/auth.js")

const cartRouter = express.Router()

cartRouter.post("/add",authMiddleware ,addToCart)
cartRouter.post("/remove",authMiddleware , removeFromCart)
cartRouter.post("/get", authMiddleware ,getCart)

module.exports = cartRouter