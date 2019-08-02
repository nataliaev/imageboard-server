const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('./model')

const router = new Router()

router.post('/user', (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User.create(user)
    .then(user => res.send(user))
    .catch(err => next(err))
})

module.exports = router