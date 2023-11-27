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

router.get('/all-votes-table', teamsRoutes.All_votes_tables)

router.post('/add-points', teamsRoutes.updatePointsForPDA)

router.post('/add-points-mt', teamsRoutes.updatePointsForMN)

router.post('/add-points-sys', teamsRoutes.updatePointsForSYS)

router.post('/validatePassword', teamsRoutes.check_username_password)

router.get('/all-keys', teamsRoutes.check_keys)

router.get('/all-votes-teams', teamsRoutes.teams_names_category_description)

// Export router
module.exports = router