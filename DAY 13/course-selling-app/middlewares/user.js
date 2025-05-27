const { User } = require("../db/user");

const userMiddleware = async (req, res, next) => {
    const {email, password} = req.headers;

    const emailCheck = await User.findOne({
        email
    })

    if(!emailCheck){
        return res.status(402).json({
            message: "User does not found"
        })
    }

    const fullValidastion = await User.findOne({
        email: email,
        password: password
    })

    if(!fullValidastion){
        return res.status(402).json({
            message: "invalid password"
        })
    }

    req.userId = fullValidastion._id
    res.json({
        message: "User get !"
    })
}

module.exports = {
    userMiddleware
}