const mongoose =  require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL);

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    name: String,
    email: String,
    password: String,
})

const Todo = new  Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users", User)
const TodoModel = mongoose.model("todos", Todo)

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel,
}