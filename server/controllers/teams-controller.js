// Import database
const knex = require("../../server/db");

// Retrieve all teams
exports.teamsAll = async (req, res) => {
  // Get all teams from database
  knex
    .select("*") // select all records
    .from("teams") // from 'teams' table
    .then((userData) => {
      // Send teams extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving teams: ${err}` });
    });
};

exports.votesIA_All = async (req, res) => {
  // Get all teams from database
  knex
    .select("*") // select all records
    .from("votes_IA") // from 'teams' table
    .then((userData) => {
      // Send teams extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving teams: ${err}` });
    });
};

// Update the 'points' column for 'Equipo dinamita'
exports.updatePointsForEquipoDinamita = async (req, res) => {
  knex("votes_IA")
    .where("team", "Equipo dinamita")
    .update({ points: req.points }) // Set 'points' to the new value you want
    .then(() => {
      res.json({ message: "Updated points for Equipo dinamita" });
    })
    .catch((err) => {
      res.json({ message: `Error updating points: ${err}` });
    });
};

// exports.updatePointsForEquipoDinamita = async (req, res) => {
//     knex('votes_IA')
//       .where('team', 'Equipo dinamita')
//       .update({ points: newPoints }) // Set 'points' to the new value you want
//       .then(() => {
//         res.json({ message: 'Updated points for Equipo dinamita' });
//       })
//       .catch(err => {
//         res.json({ message: `Error updating points: ${err}` });
//       });
//   };
