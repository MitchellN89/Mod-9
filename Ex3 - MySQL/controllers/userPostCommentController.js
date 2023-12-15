"use strict";
const { Sequelize } = require("../dbConnect");
const Models = require("../models");

const getComments = (postId, res) => {
  Models.UserPostComment.findAll({ where: { postId: postId } })
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      throw err;
    });
};

const createComment = (data, postId, res) => {
  Models.UserPostComment.create({ ...data, postId })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  createComment,
  getComments,
};
