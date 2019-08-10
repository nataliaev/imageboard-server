const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING,
  likes: Sequelize.INTEGER
});

module.exports = Image;
