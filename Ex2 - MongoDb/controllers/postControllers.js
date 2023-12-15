"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
  //finds all users
  Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOnePost = (postId, res) => {
  Models.Post.findById(postId)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// had to read up on a few things to get this to work
const addLike = (postId, res) => {
  console.log(postId);
  Models.Post.findOneAndUpdate(
    { _id: postId },
    { $inc: { likes: 1 } },
    { new: true } // means the findOneAndUpdate will return the updated entry, not the OG
  )
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getComments = (postId, res) => {
  Models.Comment.find({ postId: postId })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, error: err.message });
    });
};

const createComment = (postId, data, res) => {
  // expects the JSON to contain the userId
  new Models.Comment({ ...data, postId })
    .save()
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  getOnePost,
  createPost,
  addLike,
  getComments,
  createComment,
};
