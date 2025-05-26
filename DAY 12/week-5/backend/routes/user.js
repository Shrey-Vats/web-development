//  start writing your code from here
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const {z} = require("zod")
require("dotenv").config()

const {signupValidation, signinValidation} = require("../validation/validation.js")
const {User, Todo} = require("../db/index.js")
const { auth, Secret } = require("../middleware/user.js");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", signupValidation ,async (req, res)=> {

    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 8);

      await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.json({
        message: "Account created successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: `Server issue! ${error.message || error}`,
      });
    }
      
})

router.post("/signin",signinValidation, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!emailVerification) {
          return res.status(403).json({
            message: "User doesn't exit",
          });
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
          return res.status(403).json({
            message: "Invalid Password",
          });
        }

        const token = jwt.sign(
          {
            userId: user._id.toString(),
          },
          JWT_SECRET
        );

        res.json({
          token,
        });
    } catch (error) {
        res.status(500).json({
            message: `server issue ${error}`
        })
    }
});
