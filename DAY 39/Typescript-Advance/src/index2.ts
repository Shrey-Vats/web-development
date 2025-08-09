//record 

type User = {
    id: string,
    name: string,
    age: number
}
// type Users = {
//     [key: string]: User
// }

type Users = Record<string, User>

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