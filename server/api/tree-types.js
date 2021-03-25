//Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router = require('express').Router()
//import Tree Types db in models/index.js
const {Tree_Type} = require('../db/models')
module.exports = router

//mounted on /api/trees b/c of router.use in '/api/index.js' in server.
router.get('/', async (req, res, next) => {
  try {
    const treeTypes = await Tree_Type.findAll()
    res.json(treeTypes)
  } catch (err) {
    next(err)
  }
})
