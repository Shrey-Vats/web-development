const express = require("express")
const app = express()
let count = 0;

app.use((req, res, next)=> {
    count++;
    next()
})

app.get("/", (req, res) => {
    res.json({
        msg:"hlo"
    })
    console.log(`call ${count} times`);
})

app.get("/shey", (req, res) => {
    res.json({
        msg:"hlo shrey"
    })
    console.log(`call ${count} times`);
})



app.listen(3000, ()=> {
    console.log(`app listen on port 3000`)
})