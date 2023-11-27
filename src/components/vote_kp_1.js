import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";

export const Voting_kp2 = () => {
    const [loading, setLoading] = useState(true);
    const [teams2, setTeams2] = useState([]);
    
    const tableRef = useRef(null);

    const [selectedValue0, setSelectedValue0] = useState({});
    const [selectedValue1, setSelectedValue1] = useState({});
    const [selectedValue2, setSelectedValue2] = useState({});
    const [selectedValue3, setSelectedValue3] = useState({});
    const [selectedValue4, setSelectedValue4] = useState({});
    const [selectedValue5, setSelectedValue5] = useState({});
    const [selectedValue6, setSelectedValue6] = useState({});
    const [selectedValue7, setSelectedValue7] = useState({});
    const [selectedValue8, setSelectedValue8] = useState({});


    const handleRadioChange0 = (event) => {
    setSelectedValue0(event.target.value);
    };
    const handleRadioChange1 = (event) => {
    setSelectedValue1(event.target.value);
    };
    const handleRadioChange2 = (event) => {
    setSelectedValue2(event.target.value);
    };
    const handleRadioChange3 = (event) => {
    setSelectedValue3(event.target.value);
    };
    const handleRadioChange4 = (event) => {
    setSelectedValue4(event.target.value);
    };
    const handleRadioChange5 = (event) => {
    setSelectedValue5(event.target.value);
    };
    const handleRadioChange6 = (event) => {
    setSelectedValue6(event.target.value);
    };
    const handleRadioChange7 = (event) => {
    setSelectedValue7(event.target.value);
    };
    const handleRadioChange8 = (event) => {
    setSelectedValue8(event.target.value);
    };

    useEffect(() => {
    fetchTeams3();
    }, []);
    


    const fetchTeams3 = async () => {
        axios
          .get('http://localhost:4001/teams/all-votes-teams', {
            params: {
              category: "SEÑALES Y SISTEMAS"
            }
          })
          .then(response => {
            setTeams2(response.data);
            setLoading(false);
          })
          .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
    };

    const fetchTeams4 = async () => {
        axios
          .get("http://localhost:4001/teams/all-votes-table",{
            params: {
                table: "votes_señalesysistemas"
            }
          })
          .then((response) => {
            setTeams2(response.data);
            setLoading(false);
          })
          .catch((error) =>
            console.error(`There was an error retrieving the team list: ${error}`));
      };

  const handleSubmit2 = async (event) => {
    const postData = [];

    event.preventDefault();


    for (let i = 0; i <= 8; i++) {
      postData.push({
        points: eval(`selectedValue${i}`),
        team: teams2[i]?.name, // Adjust index as per your requirements, and use optional chaining
      });
    }
    

    try {
      // Perform the POST request with the selected value
      const response = await axios.post(
        "http://localhost:4001/teams/add-points-sys",
        {
          postData,
        }
      );

      fetchTeams4();

      // Handle the response as needed
      console.log("Points updated successfully");
    } catch (error) {
      console.log("Error during POST request:", error);
    }
  };



    return (
        <Container>
        <div>
        <hr></hr>
        <h2 class="text-center m-auto mb-4 mt-2">TABLA DE SEÑALES Y SISTEMAS</h2>
        {loading ? (
            <p>Loading...</p>
        ):(
            <form onSubmit={handleSubmit2}>

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
                    
                        <tr key={teams2[0].id}>
                        <td>{teams2[0].name}</td>
                        <td>{teams2[0].category}</td>
                        <td>{teams2[0].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[0].id}`}
                            checked={selectedValue0 === "10"}
                            onChange={handleRadioChange0}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[0].id}`}
                            checked={selectedValue0 === "5"}
                            onChange={handleRadioChange0}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[0].id}`}
                            checked={selectedValue0 === "3"}
                            onChange={handleRadioChange0}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[1].id}>
                        <td>{teams2[1].name}</td>
                        <td>{teams2[1].category}</td>
                        <td>{teams2[1].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[1].id}`}
                            checked={selectedValue1 === "10"}
                            onChange={handleRadioChange1}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[1].id}`}
                            checked={selectedValue1 === "5"}
                            onChange={handleRadioChange1}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[1].id}`}
                            checked={selectedValue1 === "3"}
                            onChange={handleRadioChange1}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[2].id}>
                        <td>{teams2[2].name}</td>
                        <td>{teams2[2].category}</td>
                        <td>{teams2[2].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[2].id}`}
                            checked={selectedValue2 === "10"}
                            onChange={handleRadioChange2}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[2].id}`}
                            checked={selectedValue2 === "5"}
                            onChange={handleRadioChange2}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[2].id}`}
                            checked={selectedValue2 === "3"}
                            onChange={handleRadioChange2}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[3].id}>
                        <td>{teams2[3].name}</td>
                        <td>{teams2[3].category}</td>
                        <td>{teams2[3].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[3].id}`}
                            checked={selectedValue3 === "10"}
                            onChange={handleRadioChange3}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[3].id}`}
                            checked={selectedValue3 === "5"}
                            onChange={handleRadioChange3}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[3].id}`}
                            checked={selectedValue3 === "3"}
                            onChange={handleRadioChange3}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[4].id}>
                        <td>{teams2[4].name}</td>
                        <td>{teams2[4].category}</td>
                        <td>{teams2[4].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[4].id}`}
                            checked={selectedValue4 === "10"}
                            onChange={handleRadioChange4}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[4].id}`}
                            checked={selectedValue4 === "5"}
                            onChange={handleRadioChange4}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[4].id}`}
                            checked={selectedValue4 === "3"}
                            onChange={handleRadioChange4}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[5].id}>
                        <td>{teams2[5].name}</td>
                        <td>{teams2[5].category}</td>
                        <td>{teams2[5].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[5].id}`}
                            checked={selectedValue5 === "10"}
                            onChange={handleRadioChange5}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[5].id}`}
                            checked={selectedValue5 === "5"}
                            onChange={handleRadioChange5}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[5].id}`}
                            checked={selectedValue5 === "3"}
                            onChange={handleRadioChange5}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[6].id}>
                        <td>{teams2[6].name}</td>
                        <td>{teams2[6].category}</td>
                        <td>{teams2[6].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[6].id}`}
                            checked={selectedValue6 === "10"}
                            onChange={handleRadioChange6}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[6].id}`}
                            checked={selectedValue6 === "5"}
                            onChange={handleRadioChange6}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[6].id}`}
                            checked={selectedValue6 === "3"}
                            onChange={handleRadioChange6}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[7].id}>
                        <td>{teams2[7].name}</td>
                        <td>{teams2[7].category}</td>
                        <td>{teams2[7].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[7].id}`}
                            checked={selectedValue7 === "10"}
                            onChange={handleRadioChange7}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[7].id}`}
                            checked={selectedValue7 === "5"}
                            onChange={handleRadioChange7}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[7].id}`}
                            checked={selectedValue7 === "3"}
                            onChange={handleRadioChange7}
                            />
                        </td>
                        </tr>
                        <tr key={teams2[8].id}>
                        <td>{teams2[8].name}</td>
                        <td>{teams2[8].category}</td>
                        <td>{teams2[8].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams2[8].id}`}
                            checked={selectedValue8 === "10"}
                            onChange={handleRadioChange8}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams2[8].id}`}
                            checked={selectedValue8 === "5"}
                            onChange={handleRadioChange8}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams2[8].id}`}
                            checked={selectedValue8 === "3"}
                            onChange={handleRadioChange8}
                            />
                        </td>
                        </tr>
                    
                    </tbody> 
                </table>

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
                    }}>
                    Submmit
                </button>
        </form>
    )}
    </div>
    </Container>
    );
};
export default Voting_kp2;