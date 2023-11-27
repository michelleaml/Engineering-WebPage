import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';

export const Voting = () => {
  const [selectedValue, setSelectedValue] = useState({});
  const [selectedValue1, setSelectedValue1] = useState({});
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);
  

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  
  

  useEffect(() => {
    fetchTeams();
  }, []);

  
  const fetchTeams = async () => {
    axios
      .get('http://localhost:4001/teams/all-votes-teams') // Replace with your actual API endpoint
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
  }


  const fetchTeams2 = async () => {
    axios
      .get("http://localhost:4001/teams/all-votes-PDA")
      .then((response) => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the team list: ${error}`)
      );
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform the POST request with the selected value
      const response = await axios.post(
        "http://localhost:4001/teams/add-points",
        {
          points: selectedValue, team: teams[1].name
        }
      );

      fetchTeams2();

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
        <form onSubmit={handleSubmit}>
        <table ref={tableRef} class="table table-striped table-bordered ">
          
          <thead class="table-dark">
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
              
                <tr key={teams[0].id}>
                  <td>{teams[0].name}</td>
                  <td>{teams[0].category}</td>
                  <td>{teams[0].description}</td>
                  <td>
                    <input
                      type="checkbox"
                      value="10"
                      name={`checkbox-${teams[0].id}`}
                      checked={selectedValue === "10"}
                      onChange={handleRadioChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value="5"
                      name={`checkbox-${teams[0].id}`}
                      checked={selectedValue === "5"}
                      onChange={handleRadioChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value="3"
                      name={`checkbox-${teams[0].id}`}
                      checked={selectedValue === "3"}
                      onChange={handleRadioChange}
                    />
                  </td>
                </tr>
                <tr key={teams[1].id}>
                  <td>{teams[1].name}</td>
                  <td>{teams[1].category}</td>
                  <td>{teams[1].description}</td>
                  <td>
                    <input
                      type="checkbox"
                      value="10"
                      name={`checkbox-${teams[1].id}`}
                      checked={selectedValue1 === "10"}
                      onChange={handleRadioChange1}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value="5"
                      name={`checkbox-${teams[1].id}`}
                      checked={selectedValue1 === "5"}
                      onChange={handleRadioChange1}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value="3"
                      name={`checkbox-${teams[1].id}`}
                      checked={selectedValue1 === "3"}
                      onChange={handleRadioChange1}
                    />
                  </td>
                </tr>
              
            </tbody> 
        </table>
        <button className="mt-3" type="submit">
             Submmit
           </button>
        </form>
                  // value="10"
                  // checked={selectedValue === "10"}
                  // onChange={handleRadioChange}
      )}
      
         
          
    </div>
    </Container>

  );
};

export default Voting;
