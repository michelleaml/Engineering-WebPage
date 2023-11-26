// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})



// Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('teams')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))


knex.select('*').from('votes_físicayquímica')
  .then(data => console.log('data', data))
  .catch(err => console.log(err))
// Export the database
module.exports = knex

