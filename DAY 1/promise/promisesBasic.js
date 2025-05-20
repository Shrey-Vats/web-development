//callback approch 
function main(){
    console.log('hey')
}

// setTimeout(main, 3000)

//but, promisedfy approch

function setTimeoutPromisified(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
    console.log("aftwr 3 second")
}

// setTimeoutPromisified(3000).then(callback)


//promise approch

function wait10s(callback1) {
    setTimeout(callback1, 1000)
}

function setTimeoutPromisifieds(ms){
    return new Promise((resolve) => (setTimeout(resolve, ms)))
}

function log(){
    console.log(`hello all done! Shrey`)
}

setTimeoutPromisifieds(1000).then(log)