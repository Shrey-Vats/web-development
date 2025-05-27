//  start writing from here
const mongoose = require("mongoose");
const { boolean } = require("zod");
const ObjectId = mongoose.ObjectId;

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Database connected");
  } catch (error) {
      console.error("Database connection failed:", error);
      process.exit(1); 
  }
};

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const TodoSchema = new mongoose.Schema({
    userId: ObjectId,
    title: String,
    done: {type: boolean, default: false},
})

const User = mongoose.model('users', UserSchema);
const Todo = mongoose.model('todos', TodoSchema);

module.exports = {
    User,
    Todo,
    connectToDatabase
}