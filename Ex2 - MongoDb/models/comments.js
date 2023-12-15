const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, trim: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
