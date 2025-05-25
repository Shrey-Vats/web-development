const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose =require("mongoose");
const bcrypt = require("bcrypt")
const {z} = require('zod')
require("dotenv").config()

const { UserModel, TodoModel } = require("./db");
const {auth} = require("./auth")

const app = express();
app.use(express.json())

const port = process.env.PORT;

const JWT_SCREAT = process.env.JWT_SCREAT;

app.post("/signup", async (req, res)=> {

    const requiredBody = z.object({
      name: z
        .string()
        .min(4, { message: "Name must be at least 3 characters long" }),

      email: z
        .string()
        .min(4, { message: "Email must be at least 3 characters long" })
        .email({ message: "Invalid email format" }),

      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, {
          message: "Password must include at least one special character",
        })
        .regex(/[A-Z]/, {
          message: "Password must include at least one uppercase letter",
        })
        .regex(/[0-9]/, {
          message: "Password must include at least one number",
        }),
    });

    const validate= requiredBody.safeParse(req.body)

    if(!validate.success){
        res.json({
            message: "invalid formate"
        })
        return
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
      const hashPassword = await bcrypt.hash(password, 10); // stronger hash

      await UserModel.create({
        name,
        email,
        password: hashPassword,
      });

      res.status(201).json({
        message: "Successfully signed up",
      });
    } catch (error) {
      res.status(403).json({
        message: "Email already exists",
        error: error.message, // optional
      });
    }
      
})

app.post("/signin", async (req, res)=> {
    const schema = z.object({
        email: z
          .string()
          .email({message: "Invalid email !"}),

        password: z
          .string()
          .min(8,{message: "Password must be contain at least 8 chercheters "})
    })

    const validation = schema.safeParse(req.body)

    if(!validation.success){
        return res.status(400).json({
          message: "Invalid input",
          errors: validate.error.format(), // Detailed field errors
        });
    }

    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email: email,
    })

    if(!user){
        return res.status(403).json({
          message: "email does not exit !",
        });
    }

    const hashPassword = await bcrypt.compare(password, user.password)

    if(!hashPassword){
        res.status(401).json({
            message: "invalid password"
        })
        return;
    }
    
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SCREAT
    );

    res.send({
      token: token,
    });
})


app.post("/todo", auth, async (req, res)=> {
    const userId = req.userId
    const {title, done} = req.body

    const todo = await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        todo
    })
})
app.get("/todos", auth, async (req, res)=> {
    const userId = req.userId;
    
    try {
        const todos = await TodoModel.find({
          userId: userId,
        }); 

        if(!todos){
            return res.status(403).json({
                message: "no todo found"
            })
        }

        res.json({
            todos
        })

    } catch (error) {
        res.status(500).json({
            message: "server issue!" + error,
        })
    }
})

app.listen(port, ()=> {
    console.log("server running on port " + port)
})