const knex = require('../../server/db');

// Update the 'points' column for 'Equipo dinamita'
exports.updatePointsForEquipoDinamita = async (req, res) => {
  knex('votes_IA')
    .where('team', 'Equipo dinamita')
    .update({ points: newPoints }) // Set 'points' to the new value you want
    .then(() => {
      res.json({ message: 'Updated points for Equipo dinamita' });
    })
    .catch(err => {
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
