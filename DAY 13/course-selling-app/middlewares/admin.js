const { Admin } = require("../db/user.js")

const adminMiddleware = async (req, res, next) =>{
    const {email, password} = req.headers

    const adminEmailCheck = await Admin.find({email});

    if (!adminEmailCheck) {
      return res.status(402).json({
        message: "user does not exit",
      });
    }
    const adminCheck = await Admin.find({
        email:email,
        password:password
    })

    if(!adminCheck){
        return res.status(402).json({
            message: "invalid password"
        })
    }

    res.json({
      userid: adminCheck._id.toString(),
    });
}

module.exports = {
  adminMiddleware,
};