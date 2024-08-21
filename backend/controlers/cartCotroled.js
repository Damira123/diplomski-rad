const userModel = require("../models/userModels.js")

//add items to user cart
const addToCart = async (req, res) => {
  try {
    // Provjeri da li je req.body.userId objekt ili samo string
    const userId = req.body.userId.id ? req.body.userId.id : req.body.userId;

    // Pronađi korisnika u bazi podataka koristeći userId
    let userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Inicijaliziraj cartData ako nije već inicijaliziran
    let cartData = userData.cartData || {};

    // Provjeri je li `itemId` prisutan u tijelu zahtjeva
    if (!req.body.itemId) {
      return res.json({ success: false, message: "Item ID is missing" });
    }

    // Dodaj ili ažuriraj količinu proizvoda u košarici
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Ažuriraj korisnikove podatke u bazi podataka
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    // Pošalji uspješan odgovor
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error.message); // Logiraj grešku kako bi dobio više informacija
    res.json({ success: false, message: "Error" });
  }
};



// remove items from user cart

const removeFromCart = async(req , res) => {
   try {
     let userData = await userModel.findById(req.body.userId)
     let cartData = await userData.cartData
     if (cartData[req.body.itemId] > 0) {
       cartData[req.body.itemId] -= 1
     }
     await userModel.findByIdAndUpdate(req.body.userId, {cartData})
     res.json({success:true , message:"Remove from cart"})
   } catch (error) {
       console.log(error);
       res.json({success:false , message:"Error"})
       
   }
}

// fetch user cart data

const getCart = async(req,res) => {
    try {
       let userData = await userModel.findById(req.body.userId)
       let cartData = await userData.cartData
       res.json({success:true , cartData})
    } catch (error) {
      console.log(error);
      res.json({success:false , message:"Error"})
       
    }
}

module.exports = {addToCart , removeFromCart , getCart }