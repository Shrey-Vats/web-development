const { Router, application } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const { User, Purchase, Course } = require("../db/user.js");
const { userSignupSchema, userSigninSchema } = require("../validation/user.js");

const userRouter = Router();

userRouter.post("/signup", userSignupSchema, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    // 3. Hash the password 
    const hashedPassword = await bcrypt.hash(password, 8);

    // 4. Create user
    const userData = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!userData) {
      return res.status(500).json({
        message: "Something went wrong while creating the user",
      });
    }

    // 5. Return success
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});


userRouter.post("/signin",userSigninSchema ,async (req, res) => {

  const {email, password} = req.body;

  const emailCheck = await User.findOne({email})

  if(!emailCheck){
    return res.status(403).json({
      message: "email doesn't exit"
    })
  }
  const comparePassword = await bcrypt.compare(password, emailCheck.password)

  if(!comparePassword){
    return res.status(403).json({
      message: "Incoorect password"
    })
  }

  const token = jwt.sign(
    {
      userId: emailCheck._id,
    },
    process.env.JWT_USER_SECREAT
  );

  res.json({
    token: token
  })
});

userRouter.get("/purchases",userSigninSchema ,async (req, res)=>{
  const userId = req.userId;
  
  const purchases = await Purchase.find({userId})

  const courseData = await Course.find({
    _id: {$in : purchases.map(x => x.courseId)}
  })
  res.json({
    purchases,
    courseData
  })
})

module.exports = {
  userRouter,
};
