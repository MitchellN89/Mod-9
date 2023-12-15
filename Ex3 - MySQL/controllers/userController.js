"use strict";
const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getOneUser = (userId, res) => {
  Models.User.findOne({ where: { id: userId } })
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      throw err;
    });
};

const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsers,
  createUsers,
  getOneUser,
};
