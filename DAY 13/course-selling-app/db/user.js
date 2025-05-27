const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_DB);

const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    LastName: String,
})

const courseSchema = new Schema({
    _id: ObjectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const User = mongoose.model("user", UserSchema)
const Admin = mongoose.model("admin", adminSchema)
const Course = mongoose.model("course", courseSchema)
const Purchase = mongoose.model("purchase", purchaseSchema);

module.exports = {
    User,
    Admin,
    Course,
    Purchase
}