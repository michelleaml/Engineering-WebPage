import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
// import "../vote.css";

const Voting = () => {
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
    try {
      const response = await axios.get("http://localhost:4001/teams/all-votes-IA");
      setTeams(response.data);
      setLoading(false);
    } catch (error) {
      console.error(`There was an error retrieving the team list: ${error}`);
    }
  };

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
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h3>Radiobutton</h3>
              <p>
                Et assumenda fugit sint. Porro soluta unde illum ipsam totam sit
                eveniet. Rerum qui ut qui quos et voluptates aut. Enim et id quae
                eos vitae ratione excepturi ducimus.
              </p>
            </Col>

            <Col>
              <Form.Label className="radio-label iconicfill-check">
                {teams[0].team}
              </Form.Label>
            </Col>

            <Col>
              <Form.Check
                type="radio"
                label="25"
                name="firstRow"
                value="25"
                checked={selectedValue === "25"}
                onChange={handleRadioChange}
              />
            </Col>

            <Col>
              <Form.Check
                type="radio"
                label="20"
                name="firstRow"
                value="20"
                checked={selectedValue === "20"}
                onChange={handleRadioChange}
              />
            </Col>

            <Col>
              <Form.Check
                type="radio"
                label="18"
                name="firstRow"
                value="18"
                checked={selectedValue === "18"}
                onChange={handleRadioChange}
              />
            </Col>

            <Col>
              <button className="mt-3" type="submit">
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Container>
  );
};

export default Voting;
