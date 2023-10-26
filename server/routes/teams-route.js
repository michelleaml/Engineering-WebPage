// Import express
const express = require('express')

// Import teams-controller
const teamsRoutes = require('../../teams-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all teams
// In server.js, teams route is specified as '/teams'
// this means that '/all' translates to '/teams/all'
router.get('/all', teamsRoutes.teamsAll)


// Export router
module.exports = router