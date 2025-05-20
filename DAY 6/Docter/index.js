const express = require("express")
const {z} = require('zod')

const app = express();

app.use(express.json())

let kidneys = [
  {
    health: false,
  },
  {
    health: true,
  },
];
app.get("/", (req, res)=>{
    
    let numberOfKidneys = kidneys.length;
    let numberOfHelthyKidneys = kidneys.filter(kidney => kidney.health).length
    let numberOfUnhelthyKidneys = numberOfKidneys - numberOfHelthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHelthyKidneys,
        numberOfUnhelthyKidneys
    })

})

app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealth;
    kidneys.push({
      health: isHealthy,
    })
    res.json({
      msg: 'Done!'
    })

})

app.put("/", (req, res) =>{
  kidneys.forEach(kidney => {
    if(!kidney.health) {
      kidney.health = true
    } 
  });

  res.json({
    msg: "You kidneys has been repaired by Dr. Shrey Vats! Now you are unhealthy to do any thing only take care not to drink any thing thats it"
  })
})

app.delete("/", (req, res)=>{
  kidneys.forEach(kidney => {
    if(!kidney.health){
      let index = kidneys.indexOf(kidney);
      kidneys.splice(index, 1);
    }

    res.json({
      msg: "bad kidneys removed successfully!!!"
    })
  });
})
app.listen(3000, ()=> {
    console.log("server is being running at port 3000")
})