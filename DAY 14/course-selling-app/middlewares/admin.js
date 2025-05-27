const { Admin } = require("../db/user.js")

const adminMiddleware = async (req, res, next) =>{
  const token = req.headers.token;

  const verifyToken = jwt.verify(token, process.env.JWT_ADMIN_SECREAT);
  const admin = await Admin.findOne({
      _id: verifyToken
  })

  if(!admin){
      return res.status(402).json({
          message: "invalid token"
      })
  }

  req.adminId = admin._id
  res.json({
      message: admin._id
  })
}

module.exports = {
  adminMiddleware,
};