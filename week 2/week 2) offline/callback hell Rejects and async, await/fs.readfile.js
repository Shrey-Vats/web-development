const fs = require('fs')

function readFile(fileName){
    return new Promise((response) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err){
                return "Its seem like a error! Try again"
            }
            response(data)
        })})
}

readFile("a.txt")
  .then((read) => {
    console.log(read)
  })
  .catch((e) => {
    console.log(e)
  })