"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const UserPostComment = require("./userPostComment");

User.hasMany(Post, { as: "posts", foreignKey: "userId" });
Post.belongsTo(User, { as: "users", foreignKey: "userId" });

User.hasMany(UserPostComment, { as: "userPostComments", foreignKey: "userId" });
Post.hasMany(UserPostComment, { as: "userPostComments", foreignKey: "postId" });

UserPostComment.belongsTo(User, { as: "users", foreignKey: "userId" });
UserPostComment.belongsTo(Post, { as: "posts", foreignKey: "postId" });

async function init() {
  await User.sync(); //sync the model
  await Post.sync();
  await UserPostComment.sync();
}

init();

module.exports = {
  User,
  Post,
  UserPostComment,
};
