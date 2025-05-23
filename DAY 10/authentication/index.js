const express = require('express');
const {z} = require("zod")
const jwt = require("jsonwebtoken")
const cors = require('cors')

const JWT_SCREAT = 'shreyvatskingthe'
const app = express()

// const schema = z.object({
//     username: z.string(),
//     password: z.string().min(8, "password at leat 8 chercheter")
// })

let users = []
app.use(express.json());
app.use(
  cors({
    domains: "http://localhost:3000",
  })
);

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    })
    res.send({
        message: "All set's!"
    })

    // const result = schema.safeParse(req.body)

    // if(!result.success){
    //     return res.status(400).json({
    //         message: "error !"
    //     })
    // } 

    // const {username, password} = req.body

    // users.push({
    //     username: username,
    //     password: password,
    // })

    // res.json({
    //     message: "yup! Done"
    // })
})

app.post("/signin", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(
      (user) => user.username == username && user.password == password
    );

    if (!user) {
      return res.status(403).json({
        message: "error !",
      });
    }
    
    const token = jwt.sign({
        username: username
    }, JWT_SCREAT)

    res.send({
        token
    })

    // const result = schema.safeParse(req.body);

    // if(!result.success){
    //     return res.status(400).json({
    //         message: "error!"
    //     })
    // }
    // const {username, password} = req.body

    // const user = users.find(user => user.username == username && user.password == password)

    // if(!user){
    //     return res.status(403).json({
    //         message: "error !"
    //     })
    // } 

    // res.json({
    //     username: user.username,
    //     password: user.password
    // })
})

app.get("/me", (req, res) => {
    const protectedToken = req.headers.token;
    const decodedToken = jwt.verify(protectedToken, JWT_SCREAT)
    const username = decodedToken.username

    const user = users.find(user => user.username == username)

    if(user){
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.status(403).json({
            message: "error !"
        })
    }
})

app.listen(4000, ()=> {
    console.log("app on port 3000")
})