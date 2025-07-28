"use strict";
// problem 1
function greed(firstName) {
    console.log("hello", firstName);
}
greed("shrey");
// problem 2
function sum(a, b) {
    return a + b;
}
console.log(sum(19, 26));
function is18Plus(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(is18Plus(39));
function hi() {
    console.log("hi");
}
function delayTimer(fn) {
    setTimeout(fn, 1000);
}
delayTimer(function () {
    console.log("hi there");
});
