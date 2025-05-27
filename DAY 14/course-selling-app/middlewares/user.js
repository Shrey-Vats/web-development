const { User } = require("../db/user");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userMiddleware = async (req, res, next) => {
    const token = req.headers.token;

    const verifyToken = jwt.verify(token, process.env.JWT_USER_SECREAT);
    const user = await User.findOne({
        _id: verifyToken
    })

    if(!user){
        return res.status(402).json({
            message: "invalid token"
        })
    }

    req.userId = user._id
    res.json({
        message: user._id
    })
    next()
}

module.exports = {
    userMiddleware
}