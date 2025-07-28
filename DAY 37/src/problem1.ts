// problem 1
function greed(firstName: string){
    console.log("hello", firstName)
}
greed("shrey")

// problem 2
function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(19, 26))

function is18Plus(age: number): boolean{
    if(age > 18){
        return true
    } else {
        return false
    }
}
console.log(is18Plus(39))

function hi(){
    console.log("hi")
}

function delayTimer(fn: () => void){
    setTimeout(fn, 1000)
}

delayTimer(function(){
    console.log("hi there")
})