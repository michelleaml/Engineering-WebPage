<h2 class="text-center m-auto mb-3">TABLA DE {teams2[0].category}</h2>
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
            <tr key={teams2[0].id}>
            <td>{teams2[0].name}</td>
            <td>{teams2[0].category}</td>
            <td>{teams2[0].description}</td>
            <td>
                <input
                type="checkbox"
                value="10"
                name={`checkbox-${teams2[0].id}`}
                checked={selectedValue11 === "10"}
                onChange={handleRadioChange11}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[0].id}`}
                checked={selectedValue11 === "5"}
                onChange={handleRadioChange11}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[0].id}`}
                checked={selectedValue11 === "3"}
                onChange={handleRadioChange11}
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
                checked={selectedValue12 === "10"}
                onChange={handleRadioChange12}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[1].id}`}
                checked={selectedValue12 === "5"}
                onChange={handleRadioChange12}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[1].id}`}
                checked={selectedValue12 === "3"}
                onChange={handleRadioChange12}
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
                checked={selectedValue13 === "10"}
                onChange={handleRadioChange13}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[2].id}`}
                checked={selectedValue13 === "5"}
                onChange={handleRadioChange13}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[2].id}`}
                checked={selectedValue13 === "3"}
                onChange={handleRadioChange13}
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
                checked={selectedValue14 === "10"}
                onChange={handleRadioChange14}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[3].id}`}
                checked={selectedValue14 === "5"}
                onChange={handleRadioChange14}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[3].id}`}
                checked={selectedValue14 === "3"}
                onChange={handleRadioChange14}
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
                checked={selectedValue15 === "10"}
                onChange={handleRadioChange15}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[4].id}`}
                checked={selectedValue15 === "5"}
                onChange={handleRadioChange15}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[4].id}`}
                checked={selectedValue15 === "3"}
                onChange={handleRadioChange15}
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
                checked={selectedValue16 === "10"}
                onChange={handleRadioChange16}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[5].id}`}
                checked={selectedValue16 === "5"}
                onChange={handleRadioChange16}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[5].id}`}
                checked={selectedValue16 === "3"}
                onChange={handleRadioChange16}
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
                checked={selectedValue17 === "10"}
                onChange={handleRadioChange17}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[6].id}`}
                checked={selectedValue17 === "5"}
                onChange={handleRadioChange17}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[6].id}`}
                checked={selectedValue17 === "3"}
                onChange={handleRadioChange17}
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
                checked={selectedValue18 === "10"}
                onChange={handleRadioChange18}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[7].id}`}
                checked={selectedValue18 === "5"}
                onChange={handleRadioChange18}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[7].id}`}
                checked={selectedValue18 === "3"}
                onChange={handleRadioChange18}
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
                checked={selectedValue19 === "10"}
                onChange={handleRadioChange19}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="5"
                name={`checkbox-${teams2[8].id}`}
                checked={selectedValue19 === "5"}
                onChange={handleRadioChange19}
                />
            </td>
            <td>
                <input
                type="checkbox"
                value="3"
                name={`checkbox-${teams2[8].id}`}
                checked={selectedValue19 === "3"}
                onChange={handleRadioChange19}
                />
            </td>
            </tr>
            
        
        
        </tbody> 
    </table>
</form>