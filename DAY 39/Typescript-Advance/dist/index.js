"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shrey = {
    name: "shrey",
    age: 21,
    isMale: true,
    is18Above: true,
    isTrueMale: true,
};
const shreyansh = {
    name: "shreyansh",
    age: 13,
    isMale: true,
    is18Above: false,
    isTrueMale: false
};
const sum = (person1, person2) => {
    return person1.age + person2.age;
};
const sumOfAges = sum(shrey, shreyansh);
console.log(sumOfAges);
//# sourceMappingURL=index.js.map