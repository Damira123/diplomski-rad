const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Please Login Again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Ekstrahiraj `id` iz tokena i postavi ga na `req.body.userId`
    req.body.userId = token_decode.id; // Sada `req.body.userId` sadrži samo `ObjectId` string
    
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = authMiddleware;
