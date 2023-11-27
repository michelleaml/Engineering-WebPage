import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import Voting_kp2 from "../components/vote_kp_1"

export const Voting_kp = () => {
  const [selectedValue0, setSelectedValue0] = useState({});
  const [selectedValue1, setSelectedValue1] = useState({});
  const [selectedValue2, setSelectedValue2] = useState({});
  const [selectedValue3, setSelectedValue3] = useState({});
  const [selectedValue4, setSelectedValue4] = useState({});
  const [selectedValue5, setSelectedValue5] = useState({});
  const [selectedValue6, setSelectedValue6] = useState({});
  const [selectedValue7, setSelectedValue7] = useState({});
  const [selectedValue8, setSelectedValue8] = useState({});
  const [selectedValue9, setSelectedValue9] = useState({});
  const [selectedValue10, setSelectedValue10] = useState({});
  
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const tableRef = useRef(null);
  
 

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
  const handleRadioChange9 = (event) => {
    setSelectedValue9(event.target.value);
  };
  const handleRadioChange10 = (event) => {
    setSelectedValue10(event.target.value);
  };


  useEffect(() => {
    fetchTeams();

  }, []);

  

//   const fetchTeams = async () => {
//     axios
//       .get('http://localhost:4001/teams/all-votes-teams',{
//         category: "MÉTODOS NUMÉRICOS"
        
//     }
//       .then(response => {
//         setTeams(response.data);
//         setLoading(false);
//       })
//       .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
//   }


    const fetchTeams = async () => {
    axios
      .get('http://localhost:4001/teams/all-votes-teams', {
        params: {
          category: "MÉTODOS NUMÉRICOS"
        }
      })
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`));
    }
    
 
  

  const fetchTeams2 = async () => {
    axios
      .get("http://localhost:4001/teams/all-votes-table",{
        params: {
            table: "votes_métodosnuméricos"
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


    for (let i = 0; i <= 10; i++) {
      postData.push({
        points: eval(`selectedValue${i}`),
        team: teams[i]?.name, // Adjust index as per your requirements, and use optional chaining
      });
    }
    

    try {
      // Perform the POST request with the selected value
      const response = await axios.post(
        "http://localhost:4001/teams/add-points-mt",
        {
          postData,
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
        <h2 class="text-center m-auto mb-3">TABLA DE MÉTODOS NUMÉRICOS</h2>
        {loading ? (
            <p>Loading...</p>
        ):(
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
                            checked={selectedValue0 === "10"}
                            onChange={handleRadioChange0}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[0].id}`}
                            checked={selectedValue0 === "5"}
                            onChange={handleRadioChange0}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[0].id}`}
                            checked={selectedValue0 === "3"}
                            onChange={handleRadioChange0}
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
                        <tr key={teams[2].id}>
                        <td>{teams[2].name}</td>
                        <td>{teams[2].category}</td>
                        <td>{teams[2].description}</td>
                        <td>
                            <input
                            type="checkbox"
                            value="10"
                            name={`checkbox-${teams[2].id}`}
                            checked={selectedValue2 === "10"}
                            onChange={handleRadioChange2}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[2].id}`}
                            checked={selectedValue2 === "5"}
                            onChange={handleRadioChange2}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[2].id}`}
                            checked={selectedValue2 === "3"}
                            onChange={handleRadioChange2}
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
                            checked={selectedValue3 === "10"}
                            onChange={handleRadioChange3}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[3].id}`}
                            checked={selectedValue3 === "5"}
                            onChange={handleRadioChange3}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[3].id}`}
                            checked={selectedValue3 === "3"}
                            onChange={handleRadioChange3}
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
                            checked={selectedValue4 === "10"}
                            onChange={handleRadioChange4}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[4].id}`}
                            checked={selectedValue4 === "5"}
                            onChange={handleRadioChange4}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[4].id}`}
                            checked={selectedValue4 === "3"}
                            onChange={handleRadioChange4}
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
                            checked={selectedValue5 === "10"}
                            onChange={handleRadioChange5}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[5].id}`}
                            checked={selectedValue5 === "5"}
                            onChange={handleRadioChange5}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[5].id}`}
                            checked={selectedValue5 === "3"}
                            onChange={handleRadioChange5}
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
                            checked={selectedValue6 === "10"}
                            onChange={handleRadioChange6}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[6].id}`}
                            checked={selectedValue6 === "5"}
                            onChange={handleRadioChange6}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[6].id}`}
                            checked={selectedValue6 === "3"}
                            onChange={handleRadioChange6}
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
                            checked={selectedValue7 === "10"}
                            onChange={handleRadioChange7}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[7].id}`}
                            checked={selectedValue7 === "5"}
                            onChange={handleRadioChange7}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[7].id}`}
                            checked={selectedValue7 === "3"}
                            onChange={handleRadioChange7}
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
                            checked={selectedValue8 === "10"}
                            onChange={handleRadioChange8}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[8].id}`}
                            checked={selectedValue8 === "5"}
                            onChange={handleRadioChange8}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[8].id}`}
                            checked={selectedValue8 === "3"}
                            onChange={handleRadioChange8}
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
                            checked={selectedValue9 === "10"}
                            onChange={handleRadioChange9}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[9].id}`}
                            checked={selectedValue9 === "5"}
                            onChange={handleRadioChange9}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[9].id}`}
                            checked={selectedValue9 === "3"}
                            onChange={handleRadioChange9}
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
                            checked={selectedValue10 === "10"}
                            onChange={handleRadioChange10}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="5"
                            name={`checkbox-${teams[10].id}`}
                            checked={selectedValue10 === "5"}
                            onChange={handleRadioChange10}
                            />
                        </td>
                        <td>
                            <input
                            type="checkbox"
                            value="3"
                            name={`checkbox-${teams[10].id}`}
                            checked={selectedValue10 === "3"}
                            onChange={handleRadioChange10}
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
        <Voting_kp2>
        
        </Voting_kp2>
    </Container>

 

  );
};
export default Voting_kp;



