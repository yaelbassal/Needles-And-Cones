const db = require('./db')
// register models
const User = require('./models/user')
const Journal = require('./models/journal')
const Tree_Type = require('./models/tree-type')

module.exports = {
  db,
  User,
  Journal,
  Tree_Type
}
