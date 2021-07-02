const Sequelize = require('sequelize')
const db = require('../db')

const Journal = db.define('journal', {
  entry_note_1: {
    type: Sequelize.TEXT
  },
  entry_note_2: {
    type: Sequelize.TEXT
  },
  entry_note_3: {
    type: Sequelize.TEXT
  },
  entry_note_4: {
    type: Sequelize.TEXT
  },
  entry_note_5: {
    type: Sequelize.TEXT
  },
  entry_note_6: {
    type: Sequelize.TEXT
  },
  entry_note_7: {
    type: Sequelize.TEXT
  },
  entry_note_8: {
    type: Sequelize.TEXT
  }
})

module.exports = Journal
