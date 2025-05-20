const express = require("express")
const app = express()

app.use((req, res, next) => {
    const URL = req.originalUrl;
    const methor = req.method;
    const time = new Date().toISOString();

    console.log(`URL :-${URL}, method :- ${methor}, and time:-${time}`)

    next()
})

app.get("/", (req, res) => {
    res.json({
        msg: "hello"
    })
})

app.listen(3000)