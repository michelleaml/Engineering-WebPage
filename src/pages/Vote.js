import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';

const Voting = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
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
      .get('http://localhost:4001/teams/all') // Replace with your actual API endpoint
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4001/teams/add-points", {
        points: selectedValue,
      });

      fetchTeams();
      console.log("Points updated successfully");
    } catch (error) {
      console.log("Error during POST request:", error);
    }
  };

  return (
    // <Container>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <form onSubmit={handleSubmit}> 
    //     <Row>
    //       <h3>Radiobutton</h3>
    //       <p>
    //         Et assumenda fugit sint. Porro soluta unde illum ipsam totam sit
    //         eveniet. Rerum qui ut qui quos et voluptates aut. Enim et id quae
    //         eos vitae ratione excepturi ducimus.
    //       </p>
    //       <Col>
    //         <label
    //           tabIndex="4"
    //           htmlFor="radio-1"
    //           className="radio-label iconicfill-check"
    //         >
    //           {/* {teams.map((team) => (
    //         <span key={team.id}>{teams[0].team}</span>
    //       ))} */}
    //           <span key={teams.id}>{teams[0].team}</span>
    //         </label>
    //         <br />
    //       </Col>

    //       <Col>
    //         <input
    //           type="radio"
    //           name="firstRow"
    //           value="25"
    //           checked={selectedValue === "25"}
    //           onChange={handleRadioChange}
    //         ></input>
    //         <label tabindex="4" for="radio-4" class="radio-label2">
    //           25
    //         </label>
    //       </Col>

    //       <Col>
    //         <input
    //           type="radio"
    //           name="firstRow"
    //           value="20"
    //           checked={selectedValue === "20"}
    //           onChange={handleRadioChange}
    //         ></input>
    //         <label tabindex="7" for="radio-1" class="radio-label">
    //           20
    //         </label>
    //         <br />
    //       </Col>

    //       <Col>
    //         <input
    //           type="radio"
    //           name="firstRow"
    //           value="18"
    //           checked={selectedValue === "18"}
    //           onChange={handleRadioChange}
    //         ></input>
    //         <label tabindex="8" for="radio-1" class="radio-label">
    //           18
    //         </label>
    //       </Col>
    //       {/* Submit button */}
    //       <button className="mt-3" type="submit">
    //         Submmit
    //       </button>
    //     </Row>
    //     </form>
    //   )}
    // </Container>
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
                <td><input type="radio" name={`checkbox-${team.id}`} /></td>
                <td><input type="radio" name={`checkbox-${team.id}`} /></td>
                <td><input type="radio" name={`checkbox-${team.id}`} /></td>
              </tr>
            ))}
            </tbody>
        </table>
      )}
          {/* Submit button */}
          <button
  className=""
  type="submit"
  style={{
    position: 'relative',
    display: 'block',
    margin: '0 auto',
    padding: '1em 1em',
    width: '20%', // Set width to 100% to make the button wider
    color: '#fff',
    fontSize: '1.5em',
    lineHeight: '1',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#2da3ee',
    border: '1px solid #0769a7',
    borderRadius: '3px',
    boxShadow: 'inset 0 0 7px 0 rgba(255, 255, 255, 0.5)',
  }}
>
  Submit
</button>
    </div>
    </Container>

  );
};

export default Voting;
