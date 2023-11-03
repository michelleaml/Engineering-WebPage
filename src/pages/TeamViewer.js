import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TeamViewer = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    axios
      .get('http://localhost:4001/teams/all') // Replace with your actual API endpoint
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
  }

  return (
    <div>
      <h1>Team Information</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Category</th>
              <th>Modality</th>
              <th>Members</th>
              <th>Description</th>
              <th>Classes</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.category}</td>
                <td>{team.modality}</td>
                <td>{team.members}</td>
                <td>{team.description}</td>
                <td>{team.classes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamViewer;