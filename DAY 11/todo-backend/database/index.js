require("dotenv").config();
const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  userId: ObjectId,
  title: String,
  done: Boolean,
});

const User = mongoose.model("users", UserSchema);
const Todo = mongoose.model("todos", TodoSchema);

module.exports = {
  User,
  Todo,
};
