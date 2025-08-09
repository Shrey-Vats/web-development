// interface User{
//     name: string,
//     age: number,
//     isMale?: boolean,
//     is18Above?: boolean,
//     isTrueMale?: boolean
// }

// const shrey: User ={
//     name: "shrey",
//     age: 21,
//     isMale: true,
//     is18Above: true,
//     isTrueMale:  true,
// }

// const shreyansh: User = {
//     name: "shreyansh",
//     age: 13,
//     isMale: true,
//     is18Above: false,
//     isTrueMale: false
// }

// const sum = (person1: User, person2: User) => {
//     return person1.age + person2.age
// }

// const sumOfAges = sum(shrey, shreyansh)

// console.log(sumOfAges)



// interface Main {
//     name: string,
//     age: number, 
//     dob: string,
//     role: string,
//     isAdmin: boolean,
//     isSuperAdmin: boolean
// }

// type Employee = Omit<Main, "isSuperAdmin"  | "isAdmin" >
// type Admin = Pick<Main, 'name' | 'age' | 'role' | 'isAdmin'>

// const shrey: Main = {
//     name: "shrey",
//     age: 21,
//     dob: "01-01-2001",
//     role: "developer",
//     isAdmin: true,
//     isSuperAdmin: true
// }

// const shreyansh: Employee = {
//     name: "shreyansh",
//     age: 13,
//     dob: "01-01-2001",
//     role: "developer",
// }

// const admin: Admin = {
//     name: "shreyansh",
//     age: 13,
//     role: "developer",
//     isAdmin: true
// }



// const person = {
//     name: "RJ Masala",
//     age: 21,
//     role: "developer",
//     isAdmin: true
// }

// person.role = "admin"
// console.log(person)

// //But if readonly
// interface User {
//     readonly name: string,
//     readonly age: number,
//     readonly role: string,
//     readonly isAdmin: boolean
// }


// const person2: User = {
//     name: "king Shrey",
//     age: 21,
//     role: "developer",
//     isAdmin: true 
// }

// person2.role = "admin"
// console.log(person2)

type User = {
    id: string,
    name: string,
    age: number
}
type Users = {
    [key: string]: User
}


const users: Users = {
    "raman@123": {
        id: "raman@123",
        name: "Raman",
        age: 21
    },
    "vashu@123": {
        id: "vashu@123",
        name: "Vashu",
        age: 21
    }
}