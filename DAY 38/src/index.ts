interface User {
    name: string,
    email: string,
    age: number,
    address?: {
        city?: string,
        country?: string,
        pincode?: number
    },
    hobbies?: string[]
}

const user1: User = {
    name: "Ravi",
    email: "ravi@123",
    age: 30,
    address: {
        city: "Mumbai",
        country: "India",
        pincode: 400001
    }
}
const user2: User = {
    name: 'Shrey Vats',
    email: 'shrey@123',
    age: 30,
    address: {
        pincode: 251300
    }
}