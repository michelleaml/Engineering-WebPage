import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';

export const Voting = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = (teamId) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedSelection = { ...prevSelectedRows };
      updatedSelection[teamId] = !updatedSelection[teamId];
      return updatedSelection;
    });
  };

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

  // const fetchTeams = async () => {
  //   axios
  //     .get("http://localhost:4001/teams/all-votes-IA")
  //     .then((response) => {
  //       setTeams(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) =>
  //       console.error(`There was an error retrieving the team list: ${error}`));
  // }
  const fetchTeams = async () => {
    axios
      .get('http://localhost:4001/teams/all-votes-teams') // Replace with your actual API endpoint
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform the POST request with the selected value
      const response = await axios.post(
        "http://localhost:4001/teams/add-points",
        {
          points: selectedValue,
        }
      );

      fetchTeams();

      // Handle the response as needed
      console.log("Points updated successfully");
    } catch (error) {
      console.log("Error during POST request:", error);
    }
  };

  return (
    
   
    <Container>
   
    <div>
      <h1>Team</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table ref={tableRef} class="table table-striped table-bordered dataTable">
          <thead class="thead-dark">
            <tr>
              <th>Nombre del equipo</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>10 punts</th>
              <th>5 puntos</th>
              <th>3 puntos</th>
            </tr>
          </thead>
          <tbody>
              {teams.map(team => (
                <tr key={team.id}>
                  <td>{team.name}</td>
                  <td>{team.category}</td>
                  <td>{team.description}</td>
                  <td>
                  <input
                      type="checkbox"
                      value="10"
                      checked={selectedRows[team.id] || false}
                      onChange={() => handleCheckboxChange(team.id)}
                  />
                  </td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>
              ))}
            </tbody>
        </table>
                  // value="10"
                  // checked={selectedValue === "10"}
                  // onChange={handleRadioChange}
      )}
      
          {/* Submit button */}
          <button className="mt-3" type="submit">
             Submmit
           </button>
    </div>
    </Container>

  );
};

export default Voting;
