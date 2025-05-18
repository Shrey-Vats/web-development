const express = require("express")
const app = express();

function tickitChecker(req, res, next){
    const tickit = req.query.tickit;
    if (tickit === "true") {
      next();
    } else {
      res.status(403).send({
        msg: "error !!",
      });
    }
}

app.use(tickitChecker);

app.get("/ride1", (req, res)=>{
    res.send("it is first ride")
})
app.get("/ride2", (req, res)=>{
    res.send("it is second ride")
})
app.get("/ride3", (req, res)=>{
    res.send("it is third ride")
})

app.listen(3000)