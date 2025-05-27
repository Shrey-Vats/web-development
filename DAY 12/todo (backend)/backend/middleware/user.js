//  start writing from here
const jwt = require("jsonwebtoken");
require("dotenv").config()
const Secret = process.env.JWT_SECRET;

function auth(req, res, next){
    const authHeader = req.headers["authorization"];
    
    if(!authHeader){
        return res.status(403).json({
            message: "token not provided"
        })
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token, Secret, (err, user)=> {
        if(err){
            return res.status(403).json({
              message: "Token verification failed" + err.message,
            });
        }
        req.userId = user.userId;
        next() 
    })
}

module.exports = {
    auth,
    Secret
}
