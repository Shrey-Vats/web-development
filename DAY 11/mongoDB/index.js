const express = require("express");
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require("./db");
const mongoose =require("mongoose");

const app = express();
app.use(express.json())

const JWT_SCREAT = "helloshreyvatstopscriatejwtkeydidyouabletohackitnoooitmostsafestone"
mongoose.connect(
  "mongodb+srv://amya:ft98a0AU6RRdjKpi@cluster0.nfhh8jh.mongodb.net/todo-app-database"
);

app.post("/signup", async (req, res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({
        name: name,
        email: email,
        password: password,
    })
    
    res.json({
        message: "successfuly signup",
    })
})

app.post("/signin", async (req, res)=> {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SCREAT)

        res.send({
            token: token
        })
    } else{
        res.status(403).json({
            message: "invalid username"
        })
    }

})

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedToken = jwt.verify(token, JWT_SCREAT);

  if (decodedToken) {
    req.userId = decodedToken.id;
    next();
  } else {
    res.status(401).json({
      message: "error not verify",
    });
  }
}

app.post("/todo", auth, (req, res)=> {
    const userId = req.userId

    res.send({
        userId
    })
})
app.get("/todos", auth, (req, res)=> {

})

app.listen(3000, ()=> {
    console.log("server running")
})