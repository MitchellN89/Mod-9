const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: { type: String, trim: true, required: true },
  title: { type: String, trim: true, required: true },
  imageUrl: { type: String, trim: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
