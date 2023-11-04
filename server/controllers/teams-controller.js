// Import database
const knex = require('../../server/db')

// Retrieve all teams
exports.teamsAll = async (req, res) => {
  // Get all teams from database
  knex
    .select('*') // select all records
    .from('teams') // from 'teams' table
    .then(userData => {
      // Send teams extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving teams: ${err}` })
    })
}