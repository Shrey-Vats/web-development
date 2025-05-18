function delay(ms) {
  return new Promise((Resolve) => {
    setTimeout(Resolve, ms);
  });
}

async function coutdown() {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} second`);
    await delay(1000);
  }
}
coutdown();


// m=2
let countdown = 0
function mark(){
  console.log(countdown)
  countdown++
}

setInterval(mark, 1000)