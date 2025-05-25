require("dotenv").config();
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  const token = req.headers.token;
  const decodedData = jwt.verify(token, process.env.JWT_SCREAT);

  if(decodedData){
    req.userId = decodedData.id;
    next()
  } else{
    res.status(403).json({
        message: "invalid user"
    })
  }
}

module.exports = userMiddleware;
