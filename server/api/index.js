const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/learn', require('./tree-types'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
