const db = require('./db')
// register models
const {User, Journal, Tree_Type} = require('./models')

module.exports = {
  db,
  User,
  Journal,
  Tree_Type
}
