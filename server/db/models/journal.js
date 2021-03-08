const Sequelize = require('sequelize')
//db connects to Postgres
const db = require('../db')

const Journal = db.define('journal', {
  entry_name_1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_1: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_2: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_3: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_3: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_4: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_4: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_5: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_5: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_6: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_6: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_7: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_7: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  entry_name_8: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry_note_8: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Journal
