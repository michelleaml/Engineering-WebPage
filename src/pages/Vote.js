import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";

export const Voting = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    axios
      .get("http://localhost:4001/teams/all-votes-IA")
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}> 
        <Row>
          <h3>Radiobutton</h3>
          <p>
            Et assumenda fugit sint. Porro soluta unde illum ipsam totam sit
            eveniet. Rerum qui ut qui quos et voluptates aut. Enim et id quae
            eos vitae ratione excepturi ducimus.
          </p>
          <Col>
            <label
              tabIndex="4"
              htmlFor="radio-1"
              className="radio-label iconicfill-check"
            >
              {/* {teams.map((team) => (
            <span key={team.id}>{teams[0].team}</span>
          ))} */}
              <span key={teams.id}>{teams[0].team}</span>
            </label>
            <br />
          </Col>

          <Col>
            <input
              type="radio"
              name="firstRow"
              value="25"
              checked={selectedValue === "25"}
              onChange={handleRadioChange}
            ></input>
            <label tabindex="4" for="radio-4" class="radio-label2">
              25
            </label>
          </Col>

          <Col>
            <input
              type="radio"
              name="firstRow"
              value="20"
              checked={selectedValue === "20"}
              onChange={handleRadioChange}
            ></input>
            <label tabindex="7" for="radio-1" class="radio-label">
              20
            </label>
            <br />
          </Col>

          <Col>
            <input
              type="radio"
              name="firstRow"
              value="18"
              checked={selectedValue === "18"}
              onChange={handleRadioChange}
            ></input>
            <label tabindex="8" for="radio-1" class="radio-label">
              18
            </label>
          </Col>
          {/* Submit button */}
          <button className="mt-3" type="submit">
            Submmit
          </button>
        </Row>
        </form>
      )}
    </Container>
  );
};

export default Voting;
