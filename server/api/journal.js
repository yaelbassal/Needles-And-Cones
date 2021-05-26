const router = require('express').Router()

const {Journal} = require('../db/models')

module.exports = router

//mounted on /api/journal b/c of router.use in '/api/index.js' in server.
router.get('/', async (req, res, next) => {
  try {
    let journalEntries
    if (req.user) {
      //findOrCreate: Find a row that matches the query, or build and save the row if none is found The successful result of the promise will be (instance, created)
      journalEntries = await Journal.findOrCreate({
        where: {
          userId: req.user.id
        }
      })
    }
    res.send(journalEntries)
  } catch (err) {
    next(err)
  }
})

//updates entries in database - WILL BE EASIER WHEN FRONT END IS CREATED.
// router.put('/', async (req, res, next) => {
//   try {
//     let findJournal;
//     if(req.user){
//       findJournal = await Journal.update({
//         where: {
//           userId: req.user.id
//         }
//       })
//     }

//   } catch(err){
//     next(err)
//   }
// })
