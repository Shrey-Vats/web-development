const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database");
const router = Router();

// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    const userId = req.userId;
    const {title} = req.title;

    await Todo.create({
        title,
        userId
    })
    res.json({
        message: "todo created"
    })
});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const userId = req.userId
    const {oldtodo, newTodo} = req.body

    try {
        const todo = await Todo.findOneAndUpdate(
          { userId, oldtodo },
          { $set: newTodo },
          { new: true }
        );

        if (!todo) {
          res.status(401).json({
            message: "todo not found",
          });
        }
    } catch (error) {
        res.status(402).json({
            message: "server issue"
        })
    }
});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    const userId = req.userId
    const {title} = req.body;

    try {
        const todo = await Todo.findOneAndDelete({ userId, title });

        if (!todo) {
          return res.status(403).json({
            message: "todo not exit",
          });
        }
        res.json({
          message: "successfuly delect!",
        });
    } catch (error) {
        res.status(300).json({
            message: "something went wronng"
        })
    }
});

router.delete('/:id', adminMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    const userId = req.params.id;
    const {title} = req.body
    
    try {
        const todo = await Todo.findOneAndDelete({ userId, title });

        if (!todo) {
          return res.status(403).json({
            message: "todo not exit",
          });
        }
        res.json({
          message: "successfuly delect!",
        });
    } catch (error) {
        res.status(300).json({
            message: "something went wronng"
        })
    }
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
    

});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;