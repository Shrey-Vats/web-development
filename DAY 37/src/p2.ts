
const user = {
    name: "John Doe",
    age: 25,
    adress: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "coding"]  
}

interface User {
    name: String,
    age: Number,
    adress: {
        city: String,
        country: String
    },
    hobbies: String[]
}

function greedToMe(user: User) {
    console.log("hello", user.name)
}

greedToMe(user)


// 2

type SumOrNumber = string | number


function sum (a: SumOrNumber, b:SumOrNumber){
    return a + b
}