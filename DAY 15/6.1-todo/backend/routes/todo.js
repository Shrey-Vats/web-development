const {Todo} = require("../db/db.js")

export async function getAllTodo (req, res, next){
    //  write here
    try {
        const allTodo = await Todo.find({});

        if (!allTodo) {
          return res.json({
            message: "there is no todo exit",
          });
        }
        res.json({
          title: allTodo.data.title,
          todoId: allTodo.data._id

          
        });
        next()
    } catch (error) {
        res.status(500).json({
            message: "server issue, try again later",
            error: error.message
        })
    }
}

export async function createTodo (req, res, next){
    //  write here
    const {title} = req.body;

    try {
      const todo = await Todo.create({ title });

      if (!todo) {
        return res.json({
          message: "Try again",
        });
      }

      res.json({
        todoId: todo._id,
      });
      next()
    } catch (error) {
      res.json({
        message: "Server issue, try again",
        error: error.message, 
      });
    }
}

export async function updateTodo (req, res, next){
    //  write here
    try {
        const { newtitle, todoId } = req.body;

        const updated = await Todo.findOneAndUpdate(
          { _id: todoId },
          { title: newtitle },
          { new: true }
        );

        if (!updated) {
          return res.json({
            message: "there is no todo with this id",
          });
        }

        res.json({
          message: updated,
        });
        next();
    } catch (error) {
        res.json({
            message: "there a server error, try again later",
            error: error.message
        })
    }
}

export async function deleteTodo (req, res, next){
    //  write here
    try {
        const { todoId } = req.body;

        const delected = Todo.findOneAndDelete({ _id: todoId });

        if (!delected) {
          return res.json({
            message: "there is no todo with this id ",
          });
        }

        res.json({
          message: `${delected} todo successfuly delect`,
        });
        next();
    } catch (error) {
        res.json({
            message: "there a server error, try again later"
        })
    }
}

export async function deleteTodoById (req, res, next){
    //  write here
    try {
      const { todoId } = req.body;

      const delected = Todo.findOneAndDelete({ _id: todoId });

      if (!delected) {
        return res.json({
          message: "there is no todo with this id ",
        });
      }

      res.json({
        message: `${delected} todo successfuly delect`,
      });
      next();
    } catch (error) {
      res.json({
        message: "there a server error, try again later",
      });
    }
}

export async function updateTodoStatus(req, res, next){

  const {todoId} = req.body

  const updated = await Todo.findOneAndUpdate(
    {_id:todoId},
    {Done: true},
    {new: true}
  )

  if(!updated){
    return res.status(400).json({
      message: "todo cannot found"
    })
  }

  res.json({
    updated
  })
  next()
}