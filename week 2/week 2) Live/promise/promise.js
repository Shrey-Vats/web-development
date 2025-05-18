function task(abc){
    setTimeout(abc, 1000)
}

const promise = new Promise(task)

function success(){
    console.log("wait 2s for success")
    setTimeout(Message, 2000)
}
function fail(){
    console.log("wait 2s for fail")
    setTimeout(Message, 2000)
}
function Message(){
    console.log('done!!')
}
promise.then(success);
promise.catch(fail);
