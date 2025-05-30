const { strict } = require("assert")
const mongoose =  require("mongoose")
const { userInfo } = require("os")

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