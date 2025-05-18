const express = require("express")
const app = express();

function baicCode(){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
}

app.get("/multiply", (req, res)=> {
    baicCode();
    res.send(a*b)
});

app.get("/add", (req, res) => {
    baicCode();

    res.send(a+b)
})

app.get("/substrate", (req, res) => {
    baicCode();

    res.send(a-b)
})
app.get("/divid", (req, res) => {
    baicCode();
    res.send(a/b)
})

app.listen(3000)