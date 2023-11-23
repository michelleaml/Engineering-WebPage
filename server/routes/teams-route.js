// Import express
const express = require('express')

// Import teams-controller
const teamsRoutes = require('../controllers/teams-controller')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all teams
// In server.js, teams route is specified as '/teams'
// this means that '/all' translates to '/teams/all'
router.get('/all', teamsRoutes.teamsAll)

router.get('/all-votes-IA', teamsRoutes.votesIA_All)

router.post('/add-points', teamsRoutes.updatePointsForEquipoDinamita)

router.post('/login', teamsRoutes.check_username_password)

// Export router
module.exports = router