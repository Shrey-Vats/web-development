//  start writing your code from here
const express = require("express")

const { auth, Secret} = require("../middleware/user.js");
const { Todo } = require("../db/index.js");

const router = express.Router()

router.post("/", auth, async (req, res)=>{
    const userId = req.userId;
    const createPayload = req.body;

    if(!createPayload.title){
        return res.status(400).json({
            message: "todo must be provided"
        })
    }

    try {
        await Todo.create({
          userId: userId,
          title: createPayload.title,
        });

        res.status(201).json({
          message: "todo created",
        });
    } catch (error) {
        res.status(500).json({
            message: `server error on creting todo`,
            error: error.message,
        })
    }
})

router.put("/", auth, async (req, res)=> {
    const userId = req.userId;
    const updatePayload = req.body;

    if(!updatePayload.oldTitle || !updatePayload.newTitle){
        return res.status(400).json({
            message: "Todo must be provided"
        })
    }

    try {
        const updatesData = await Todo.findOneAndUpdate(
          { userId: userId, title: oldTitle },
          { title: newTitle },
          { new: true }
        );

        if (!updatesData) {
          return res.status(401).json({
            message: "user not found",
          });
        }

        res.json({
          message: "updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "server issue, try again later",
            error: error.message 
        })
    }
})

router.delete("/", async (req, res)=> {
    const userId = req.userId;
    const deletePayload = req.body;

    if(!deletePayload.title){
        return res.status(402).json({
            message: "Todo must be provided"
        })
    }

    try {
        const delectData = await Todo.findOneAndDelete({
          userId: userId,
          title: deletePayload.title,
        });

        if (!delectData) {
          res.status(402).json({
            message: "user does not found",
          });
        }
    } catch (error) {
        res.status(500).json({
            message: `Server issue: ${error.message}`
        })
    }
})

router.get("/todo", async (req, res)=> {
    const userId = req.userId;
    
    try {
        const user = await Todo.find({
          userId: userId,
        });

        if (!user) {
          return res.status(402).json({
            message: "User doesn't found",
          });
        }

        res.json({
          user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error on geting todo",
            error: error.message
        })
    }
})

module.exports = {router}