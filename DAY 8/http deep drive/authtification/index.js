const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')
const JWT_SECRET = "Shrey vats"

app.use(express.json())

const users = [];

function generateToken() {
  let options = [
    "a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    // use a simple function here
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
      username: username,
      password: password,
    });

    res.send({
        message: "success"
    })
})

app.post("/signin", (req, res)=> {
    const username = req.body.username
    const password = req.body.password

    const User = users.find(user => user.username == username && user.password == password)

    if(User){
        const token = jwt.sign({
          username: User.username
        }, JWT_SECRET)

        res.send({
            token
        })
        console.log(users)
    } else{
        res.status(403).json({
            message: "Invalid User or Password"
        })
    }
})

app.get("/me", (req, res)=>{
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username;

    const user = users.find(user => user.username == username)
    if(user){
      res.send({
        username: user.username
      })
    } else{
      res.status(403).send({
        message: "invalid"
        })
    }
})


app.listen(3000)