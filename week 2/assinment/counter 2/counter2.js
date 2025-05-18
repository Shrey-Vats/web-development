let time = 0;

function setTimeoutPromisedify(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}


//m1
// async function call(){
//     for(let i =0; i <999; i++){
//         await setTimeoutPromisedify(1000).then(()=>{
//             console.log(time)
//             time++
//         })
//     }
// }



//m2
async function call() {
  for (let i = 0; i < 999; i++) {
    time++
    console.log(time)
    await setTimeoutPromisedify(1000)
  }
}

call();