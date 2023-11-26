// Import database
const knex = require("../db.js");

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
  const { points } = req.body;

  if (points === undefined) {
    return res.status(400).json({ message: 'Invalid request. Points not provided.' });
  }

  knex('votes_IA')
    .where('team', 'Equipo dinamita')
    .update({ points })
    .then(() => {
      res.json({ message: 'Updated points for Equipo dinamita' });
    })
    .catch(err => {
      res.status(500).json({ message: `Error updating points: ${err}` });
    });
};

exports.check_username_password = async (req, res) => {
  
  const { username, password } = req.body;

  knex('super_users')
    .select('*')
    .where('surname', username)
    .andWhere('psswd', password)
    .then(rows => {
      if (rows.length > 0) {
        res.send({ validation: true });
      } else {
        res.send({ validation: false });
      }
    })
    .catch(err => {
      throw err; // Handle the error appropriately in your application
    
  });
}

exports.check_keys = async (req, res) => {
  // Get all teams from database
  knex
    .select("*") // select all records
    .from("super_users") // from 'teams' table
    .then((userData) => {
      // Send teams extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving teams: ${err}` });
    });
}

// exports.check_username_password = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const result = await knex('super_users')
//       .where({ 'surname': username, 'psswd': password });
    
//     res.json(result);
//   } catch (error) {
//     console.error('Error checking username and password:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };







// exports.check_username_password = async (req, res) => {

//   const { username, password } = req.body;
  
//   //console.log(username);

//   const query = 'SELECT * FROM super_users WHERE surname = ? and psswd = ?';

 
//   await knex.raw(query, [username, password]);
  
    
// };



// exports.check_username_password = async (req, res) => {
//   const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
  
//   const { username, password } = req.body;

//   if (username === undefined || password === undefined){
//     return res.status(400).json({ message: 'Invalid request. Username or password not provided.' });
    
//   }

//   try {
//     // Retrieve the user with the given username from the 'super_users' table
//     const user = await knex('super_users')
//       .where({ username })
//       .first();

//     if (user) {
//       // Compare the provided password with the hashed password from the database
//       const isPasswordValid = await bcrypt.compare(password, user.password);

//       if (isPasswordValid) {
//         // Password is valid, send a success message
//         res.json({ message: 'Login successful' });
//       } else {
//         // Password is invalid, send an error response
//         res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } else {
//       // No user found with the given username, send an error response
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (err) {
//     // Handle any unexpected errors
//     res.status(500).json({ message: `Error checking credentials: ${err.message}` });
//   }
// };


// exports.check_username_password = async (req, res) => {
//   const { username, password } = req.body;

//   knex('super_users')
//     .where({ username, password })
//     .first()
    
//     .then(() => {
//       res.json({ message: 'Login Successful' });
//     })
//     .catch(err => {
//       res.status(500).json({ message: `Error updating points: ${err}` });
//     });
// };


// exports.updatePointsForEquipoDinamita = async (req, res) => {
//   knex("votes_IA")
//     .where("team", "equipo gamma")
//     .update({ points }) // Set 'points' to the new value you want
//     .then(() => {
//       res.json({ message: "Updated points for Equipo gamma" });
//     })
//     .catch((err) => {
//       res.json({ message: `Error updating points: ${err}` });
//     });
// };

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
