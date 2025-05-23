const express = require("express");
const app = express()

app.use(express.json())

app.post("/sum", (req, res)=> {
    const {a, b} = req.body;

    res.json({
        sum: a+b
    })
})

app.listen(4000)