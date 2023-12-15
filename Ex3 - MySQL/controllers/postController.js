"use strict";
const { Sequelize } = require("../dbConnect");
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getOnePost = (postId, res) => {
  Models.Post.findOne({ where: { id: postId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const addLike = (postId, res) => {
  Models.Post.update(
    { likes: Sequelize.literal("likes + 1") },
    { where: { id: postId } }
  )
    .then((data) => {
      res.send({ result: 200, "Incremented By": data });
    })
    .catch((err) => {
      throw err;
    });
};

const createPost = (data, userId, res) => {
  Models.Post.create({ ...data, userId })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  createPost,
  addLike,
  getPosts,
  getOnePost,
};
