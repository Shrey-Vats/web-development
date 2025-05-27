const {Router} = require("express");
const adminRouter = Router();
const {Admin} = require("../db/user.js");
const { adminSchema } = require("../validation/admin.js");

adminRouter.post("/signup", async (req, res) => {

  const checkValidation = adminSchema.safeParse(req.body)

  if(checkValidation.error){
    return res.status(401).json({
      messaage: "invalid input"
    })
  }

  const {email, password} = req.body;

  const admin = await Admin.find({
    email: email,
  })

  if(!admin){
    return res.status(402).json({
      message: "There is no admin with this email"
    })
  }


}); 

adminRouter.post("/signin", async (req, res) => {
  const checkValidation = adminSchema.safeParse(req.body)

  if(checkValidation.error){
    return res.status(401).json({
      messaage: "invalid input"
    })
  }

  const {email, password} = req.body;

  const checkAdminEmail = await Admin.find({
    email: email,
  })

  if(!admin){
    return res.status(402).json({
      message: "There is no admin with this email"
    })
  }
  
  const checkAdminData = await Admin.find({
    email: email,
    password: password
  });

  if(!checkAdminData){
    return res.status(401).json({
      message: "invalid password"
    })
  }

  res.json({
    adminId: checkAdminData._id
  })
});

adminRouter.post("/course", (req, res)=> {
    res.json({
        message:"done admin sirji"
    })
})
adminRouter.put("/course", (req, res)=> {
    res.json({
        message:"done admin sirji"
    })
})
adminRouter.put("/course/bulk", (req, res)=> {
    res.json({
        message:"done admin sirji"
    })
})

module.exports = {
  adminRouter,
};