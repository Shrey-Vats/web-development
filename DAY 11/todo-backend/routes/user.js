const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const userMiddleware = require("../middleware/user.js");
const {User, Todo} = require("../database/index.js")

const router = Router();
const JWT_SECRAT = process.env.JWT_SCREAT;

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {name, email, password} = req.body;

    await User.create({
        name: name,
        email: email,
        password: password,
    })

    res.json({
        message: "successfuly! signup"
    })
});

router.post('/login', async (req, res) => {
     // Implement user login logic
     const {email, password} = req.body;

     const user = await User.findOne({
        email: email,
        password: password
     })

     if(!user){
        return res.status(403).json({
            message: "invaild password or username"
        }) 
    }
    
    const token = jwt.sign({
        id: user._id.toString(),
    }, JWT_SECRAT)

    res.json({
        token
    })

});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    const userId = req.userId;

    try {
        const todo = await Todo.findById(userId);
        if(todo){

        }

    } catch (error) {
        
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    
});

module.exports = router