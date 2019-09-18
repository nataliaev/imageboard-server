const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model")
const Like = require("../like/model")

const Image = db.define("image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

User.belongsToMany(Image, { through: Like });
Image.belongsToMany(User, { through: Like });

module.exports = Image;
