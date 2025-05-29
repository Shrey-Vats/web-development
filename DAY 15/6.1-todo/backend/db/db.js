const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const todoSchema = new Schema({
  title: { type: String, required: true },
  Done: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo
}