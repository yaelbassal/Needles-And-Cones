const db = require('./db')
// register models
const {User, Journal} = require('./models')

module.exports = {
  db,
  User,
  Journal
}
