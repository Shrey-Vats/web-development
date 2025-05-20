const fs = require("fs");

function readFiles(){
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if(err){
            console.log(`there is an error of ${err}`)
        }
        console.log(data)
    });
}
readFiles()

let a = 0;

for(let)