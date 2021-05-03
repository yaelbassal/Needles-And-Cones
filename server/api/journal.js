const router = require('express').Router()

const {Journal} = require('../db/models')

module.exports = router

//mounted on /api/journal b/c of router.use in '/api/index.js' in server.

router.get('/', async (req, res, next) => {
  try {
    // const journalEntries = await Journal.findAll({
    //   where: {
    //     userId:
    //   }
    // })
    //trying to access req.user.id here but req.user does not exist in my app.
    console.log(req.user)
    res.json('hello')
  } catch (err) {
    next(err)
  }
})
