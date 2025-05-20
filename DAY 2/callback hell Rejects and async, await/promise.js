function setTimeoutPromisified(duration){
    return new Promise((response) => {setTimeout(response, duration)})
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Call after1 second");
    await setTimeoutPromisified(3000);
    console.log("Call after 1+3second");
    await setTimeoutPromisified(10000);
    console.log("Call after 1+3+10second")
}

