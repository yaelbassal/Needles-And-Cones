const router = require('express').Router()
const {Journal} = require('../db/models')

module.exports = router

//mounted on /api/journal b/c of router.use in '/api/index.js' in server.
//creates or finds a journal for a user.
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

//mounted on /api/journal b/c of router.use in '/api/index.js' in server.
//updates journal notes in the journal table
router.put('/', async (req, res, next) => {
  try {
    let findJournal
    if (req.user) {
      if (req.body.selectedTree === 'eastern-white-pine') {
        findJournal = await Journal.update(
          {entry_note_1: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'pitch-pine') {
        findJournal = await Journal.update(
          {entry_note_2: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'red-pine') {
        findJournal = await Journal.update(
          {entry_note_3: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'japanese-black-pine') {
        findJournal = await Journal.update(
          {entry_note_4: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'austrian-pine') {
        findJournal = await Journal.update(
          {entry_note_5: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'jack-pine') {
        findJournal = await Journal.update(
          {entry_note_6: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'mugo-pine') {
        findJournal = await Journal.update(
          {entry_note_7: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      } else if (req.body.selectedTree === 'scotch-pine') {
        findJournal = await Journal.update(
          {entry_note_8: req.body.entryNotes},
          {
            where: {
              userId: req.user.id
            }
          }
        )
      }
      res.send(findJournal)
    }
  } catch (err) {
    next(err)
  }
})
