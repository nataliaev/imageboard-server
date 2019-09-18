const Sequelize = require('sequelize')

const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'

//process.env.DATABASE_URL || 

const db = new Sequelize(databaseUrl)

db.sync({force: false})
  .then(() => console.log('Database connected'))
  .catch(console.error)

module.exports = db