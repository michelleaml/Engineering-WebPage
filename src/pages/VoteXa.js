import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';
import VotingXa1 from "../components/VoteXa1"

export const Voting_xa = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const tableRef = useRef(null);


    const [selectedValues, setSelectedValues] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
    });

    const handleRadioChange = (columnIndex, value) => {
        // Get the current selected values for the column
        const currentSelectedValues = [...selectedValues];

        // Check if the value is already selected for the current column
        const valueIndex = currentSelectedValues.indexOf(value);

        // If not selected, add the value to the column
        // If selected, remove the value from the column
        if (valueIndex === -1) {
            if (value !== 0) {
                currentSelectedValues[columnIndex] = value;
            }
            else {
                currentSelectedValues[columnIndex] = 0;
            }
        } else {
            currentSelectedValues[columnIndex] = 0;
        }
        // Filter out null values and keep only the first three selections for each column
        const filteredSelectedValues = currentSelectedValues
            .filter((val, index) => val !== null && index <= 2);

        // Update the state with the new selected values
        setSelectedValues(currentSelectedValues);

    };

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        axios
            .get('http://expoingapi.cetys.net/teams/all-votes-teams', {
                params: {
                    category: "FÍSICA Y QUÍMICA"
                }
            })
            .then(response => {
                setTeams(response.data);
                setSelectedValues(Array.from({ length: response.data.length }, () => 0));
                setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
    }




    const fetchTeams2 = async () => {
        axios
            .get("http://expoingapi.cetys.net/teams/all-votes-table", {
                params: {
                    table: "votes_físicayquímica"
                }
            })
            .then((response) => {
                setTeams(response.data);
                setLoading(false);
            })
            .catch((error) =>
                console.error(`There was an error retrieving the team list: ${error}`));
    };




    const handleSubmit = async (event) => {

        const postData = [];

        event.preventDefault();

        if (formSubmitted) {
            return;
        }

        for (let i = 0; i <= 16; i++) {
            const points = selectedValues[i] !== null ? selectedValues[i] : 0;
            const teamName = teams[i]?.name;

            postData.push({
                points,
                team: teamName,
            });
        }


        try {
            // Perform the POST request with the selected value
            const response = await axios.post(
                "http://expoingapi.cetys.net/teams/add-points-fyq",
                {
                    postData,
                }
            );
            console.log(postData);
            fetchTeams2();

            Swal.fire({
                icon: 'success',
                title: 'Puntos Actualizados',
                text: 'Puntos Actualizados Exitosamente!',
            });
            setFormSubmitted(true);
            // Handle the response as needed
            console.log("Points updated successfully");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error durante el proceso. Por favor, intete de nuevo.',
            });
            console.log("Error during POST request:", error);
        }
        fetchTeams();

    };


    return (


        <Container>
            <div>
                <h2 class="text-center m-auto mb-3">TABLA DE FÍSICA Y QUÍMICA</h2>
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
                                    <th>1er Lugar</th>
                                    <th>2do Lugar</th>
                                    <th>3er Lugar</th>
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
                                            checked={selectedValues[0] === "10"}
                                            onChange={() => handleRadioChange(0, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[0].id}`}
                                            checked={selectedValues[0] === "5"}
                                            onChange={() => handleRadioChange(0, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[0].id}`}
                                            checked={selectedValues[0] === "3"}
                                            onChange={() => handleRadioChange(0, "3")}
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
                                            checked={selectedValues[1] === "10"}
                                            onChange={() => handleRadioChange(1, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[1].id}`}
                                            checked={selectedValues[1] === "5"}
                                            onChange={() => handleRadioChange(1, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[1].id}`}
                                            checked={selectedValues[1] === "3"}
                                            onChange={() => handleRadioChange(1, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[2].id}>
                                    <td>{teams[2].name}</td>
                                    <td>{teams[2].category}</td>
                                    <td>{teams[2].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[2].id}`}
                                            checked={selectedValues[2] === "10"}
                                            onChange={() => handleRadioChange(2, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[2].id}`}
                                            checked={selectedValues[2] === "5"}
                                            onChange={() => handleRadioChange(2, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[2].id}`}
                                            checked={selectedValues[2] === "3"}
                                            onChange={() => handleRadioChange(2, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[3].id}>
                                    <td>{teams[3].name}</td>
                                    <td>{teams[3].category}</td>
                                    <td>{teams[3].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[3].id}`}
                                            checked={selectedValues[3] === "10"}
                                            onChange={() => handleRadioChange(3, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[3].id}`}
                                            checked={selectedValues[3] === "5"}
                                            onChange={() => handleRadioChange(3, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[3].id}`}
                                            checked={selectedValues[3] === "3"}
                                            onChange={() => handleRadioChange(3, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[4].id}>
                                    <td>{teams[4].name}</td>
                                    <td>{teams[4].category}</td>
                                    <td>{teams[4].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[4].id}`}
                                            checked={selectedValues[4] === "10"}
                                            onChange={() => handleRadioChange(4, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[4].id}`}
                                            checked={selectedValues[4] === "5"}
                                            onChange={() => handleRadioChange(4, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[4].id}`}
                                            checked={selectedValues[4] === "3"}
                                            onChange={() => handleRadioChange(4, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[5].id}>
                                    <td>{teams[5].name}</td>
                                    <td>{teams[5].category}</td>
                                    <td>{teams[5].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[5].id}`}
                                            checked={selectedValues[5] === "10"}
                                            onChange={() => handleRadioChange(5, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[5].id}`}
                                            checked={selectedValues[5] === "5"}
                                            onChange={() => handleRadioChange(5, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[5].id}`}
                                            checked={selectedValues[5] === "3"}
                                            onChange={() => handleRadioChange(5, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[6].id}>
                                    <td>{teams[6].name}</td>
                                    <td>{teams[6].category}</td>
                                    <td>{teams[6].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[6].id}`}
                                            checked={selectedValues[6] === "10"}
                                            onChange={() => handleRadioChange(6, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[6].id}`}
                                            checked={selectedValues[6] === "5"}
                                            onChange={() => handleRadioChange(6, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[6].id}`}
                                            checked={selectedValues[6] === "3"}
                                            onChange={() => handleRadioChange(6, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[7].id}>
                                    <td>{teams[7].name}</td>
                                    <td>{teams[7].category}</td>
                                    <td>{teams[7].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "10"}
                                            onChange={() => handleRadioChange(7, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "5"}
                                            onChange={() => handleRadioChange(7, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "3"}
                                            onChange={() => handleRadioChange(7, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[8].id}>
                                    <td>{teams[8].name}</td>
                                    <td>{teams[8].category}</td>
                                    <td>{teams[8].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "10"}
                                            onChange={() => handleRadioChange(8, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "5"}
                                            onChange={() => handleRadioChange(8, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "3"}
                                            onChange={() => handleRadioChange(8, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[7].id}>
                                    <td>{teams[7].name}</td>
                                    <td>{teams[7].category}</td>
                                    <td>{teams[7].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "10"}
                                            onChange={() => handleRadioChange(7, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "5"}
                                            onChange={() => handleRadioChange(7, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[7].id}`}
                                            checked={selectedValues[7] === "3"}
                                            onChange={() => handleRadioChange(7, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[8].id}>
                                    <td>{teams[8].name}</td>
                                    <td>{teams[8].category}</td>
                                    <td>{teams[8].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "10"}
                                            onChange={() => handleRadioChange(8, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "5"}
                                            onChange={() => handleRadioChange(8, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[8].id}`}
                                            checked={selectedValues[8] === "3"}
                                            onChange={() => handleRadioChange(8, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[9].id}>
                                    <td>{teams[9].name}</td>
                                    <td>{teams[9].category}</td>
                                    <td>{teams[9].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[9].id}`}
                                            checked={selectedValues[9] === "10"}
                                            onChange={() => handleRadioChange(9, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[9].id}`}
                                            checked={selectedValues[9] === "5"}
                                            onChange={() => handleRadioChange(9, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[9].id}`}
                                            checked={selectedValues[9] === "3"}
                                            onChange={() => handleRadioChange(9, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[10].id}>
                                    <td>{teams[10].name}</td>
                                    <td>{teams[10].category}</td>
                                    <td>{teams[10].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "10"}
                                            onChange={() => handleRadioChange(10, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "5"}
                                            onChange={() => handleRadioChange(10, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "3"}
                                            onChange={() => handleRadioChange(10, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[10].id}>
                                    <td>{teams[10].name}</td>
                                    <td>{teams[10].category}</td>
                                    <td>{teams[10].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "10"}
                                            onChange={() => handleRadioChange(10, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "5"}
                                            onChange={() => handleRadioChange(10, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[10].id}`}
                                            checked={selectedValues[10] === "3"}
                                            onChange={() => handleRadioChange(10, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[11].id}>
                                    <td>{teams[11].name}</td>
                                    <td>{teams[11].category}</td>
                                    <td>{teams[11].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[11].id}`}
                                            checked={selectedValues[11] === "10"}
                                            onChange={() => handleRadioChange(11, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[11].id}`}
                                            checked={selectedValues[11] === "5"}
                                            onChange={() => handleRadioChange(11, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[11].id}`}
                                            checked={selectedValues[11] === "3"}
                                            onChange={() => handleRadioChange(11, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[12].id}>
                                    <td>{teams[12].name}</td>
                                    <td>{teams[12].category}</td>
                                    <td>{teams[12].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[12].id}`}
                                            checked={selectedValues[12] === "10"}
                                            onChange={() => handleRadioChange(12, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[12].id}`}
                                            checked={selectedValues[12] === "5"}
                                            onChange={() => handleRadioChange(12, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[12].id}`}
                                            checked={selectedValues[12] === "3"}
                                            onChange={() => handleRadioChange(12, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[13].id}>
                                    <td>{teams[13].name}</td>
                                    <td>{teams[13].category}</td>
                                    <td>{teams[13].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[13].id}`}
                                            checked={selectedValues[13] === "10"}
                                            onChange={() => handleRadioChange(13, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[13].id}`}
                                            checked={selectedValues[13] === "5"}
                                            onChange={() => handleRadioChange(13, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[13].id}`}
                                            checked={selectedValues[13] === "3"}
                                            onChange={() => handleRadioChange(13, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[14].id}>
                                    <td>{teams[14].name}</td>
                                    <td>{teams[14].category}</td>
                                    <td>{teams[14].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[14].id}`}
                                            checked={selectedValues[14] === "10"}
                                            onChange={() => handleRadioChange(14, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[14].id}`}
                                            checked={selectedValues[14] === "5"}
                                            onChange={() => handleRadioChange(14, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[14].id}`}
                                            checked={selectedValues[14] === "3"}
                                            onChange={() => handleRadioChange(14, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[15].id}>
                                    <td>{teams[15].name}</td>
                                    <td>{teams[15].category}</td>
                                    <td>{teams[15].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[15].id}`}
                                            checked={selectedValues[15] === "10"}
                                            onChange={() => handleRadioChange(15, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[15].id}`}
                                            checked={selectedValues[15] === "5"}
                                            onChange={() => handleRadioChange(15, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[15].id}`}
                                            checked={selectedValues[15] === "3"}
                                            onChange={() => handleRadioChange(15, "3")}
                                        />
                                    </td>
                                </tr>
                                <tr key={teams[16].id}>
                                    <td>{teams[16].name}</td>
                                    <td>{teams[16].category}</td>
                                    <td>{teams[16].description}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="10"
                                            name={`checkbox-${teams[16].id}`}
                                            checked={selectedValues[16] === "10"}
                                            onChange={() => handleRadioChange(16, "10")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="5"
                                            name={`checkbox-${teams[16].id}`}
                                            checked={selectedValues[16] === "5"}
                                            onChange={() => handleRadioChange(16, "5")}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            value="3"
                                            name={`checkbox-${teams[16].id}`}
                                            checked={selectedValues[16] === "3"}
                                            onChange={() => handleRadioChange(16, "3")}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {!formSubmitted && (
                            <button
                                className="mt-3 mb-3"
                                type="submit"
                                style={{
                                    fontSize: '20px',
                                    padding: '10px 20px',
                                    width: '200px',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}
                            >
                                Submit
                            </button>
                        )}
                    </form>

                )}
            </div>
            <VotingXa1></VotingXa1>
        </Container>
        



    );
};
export default Voting_xa;



