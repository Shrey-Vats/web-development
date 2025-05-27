const {Router} = require("express");
const { userMiddleware } = require("../middlewares/user");
const { Purchase, User, Course } = require("../db/user");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async(req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId

  const findUser = await User.findOne({_id: userId})
  if(!findUser){
    return res.status(402).json({
      message: "user does not exit"
    })
  }
  const findCourse = await Course.findOne({_id: courseId})
  if(!findCourse){
    return res.status(402).json({
      message: "course does not exit"
    })
  }
 // here i later on check user whather paurchases or not 
  const user = await Purchase.create({
    courseId: courseId,
    userId: userId
  })

  res.json({
    message: user
  })
  
});

courseRouter.get("/preview", async (req, res) => {
  const courses = Course.find({})

  res.json({
    courses
  })
});

module.exports = {
  courseRouter,
};