const Sequelize = require('sequelize')
const db = require('../db')

Like = db.define('like', {
  like: Sequelize.STRING
});

module.exports = Like