const fs = require("fs")

function fileRead(sendToDown){

    fs.readFile("a.txt", "utf-8", (err, data)=> {
        sendToDown(data);
    })
}

function readFile(){
    return new Promise(fileRead)
}

const result = readFile()

function response(data){
    console.log(data)
}

result.then(response)