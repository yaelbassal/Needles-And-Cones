const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      /*
      Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session.

      When the login operation completes, user will be assigned to req.user.

      req.login() can be invoked to automatically log in the newly registered user
      */

      req.login(user, err => (err ? next(err) : res.json(user)))
      console.log('this is req.user', req.user)
      console.log('this is req.body', req.body)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.fullName,
      email: req.body.email,
      password: req.body.password
    })
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
