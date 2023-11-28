
import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';


export const TeamViewer = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchTeams();
  }, []);
  
  useEffect(() => {
    // Check if $ is defined (jQuery is properly loaded)
    if ($) {
      const dataTable = $(tableRef.current).DataTable();
  
      // Cleanup function
      return () => {
        dataTable.destroy(); // Destroy DataTable instance to avoid memory leaks
      };
    } else {
      console.error('jQuery is not loaded.');
    }
  }, [teams]);

  const fetchTeams = async () => {
    axios
      .get('https://expoingapi.cetys.net/teams/all') // Replace with your actual API endpoint
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
  }

  return (
    <Container>
   
    <div>
      <h1>Team Information</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table ref={tableRef} class="table table-striped table-bordered dataTable">
          <thead class="table-dark">
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
    </Container>
  );
};

export default TeamViewer;