"use strict";
const user = {
    name: "John Doe",
    age: 25,
    adress: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "coding"]
};
function greedToMe(user) {
    console.log("hello", user.name);
}
greedToMe(user);
