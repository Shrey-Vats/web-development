const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User, Purchase } = require("../db/user.js");
const { userSignupSchema, userSigninSchema } = require("../validation/user.js");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const validationResult = userSignupSchema.safeParse(req.body);

  // 1. Validate input
  if (!validationResult.success) {
    return res.status(400).json({
      message: "Invalid input",
      errors: validationResult.error.errors,
    });
  }

  const { name, email, password } = validationResult.data;

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

userRouter.post("/signin", async (req, res) => {

  const validationResult = userSigninSchema.safeParse(req.body);

  // 1. Validate input
  if (!validationResult.success) {
    return res.status(400).json({
      message: "Invalid input",
      errors: validationResult.error.errors,
    });
  }

  const {email, password} = req.headers;

  const emailCheck = await User.findOne({email})

  if(!emailCheck){
    return res.status(403).json({
      message: "email doesn't exit"
    })
  }

});

module.exports = {
  userRouter,
};
