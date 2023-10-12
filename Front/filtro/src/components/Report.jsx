import React, { useState } from 'react';
import Nav from './Nav';
import '../css/Formulario.css';
import '../css/Reporte.css';
import { Link } from 'react-router-dom';



const Report =() => {
  const [selectedState, setSelectedState] = useState(''); // Estado para almacenar el valor seleccionado

  

  
  // Función para manejar el cambio en la selección de estado
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <Nav />
      <div className='App-header'>
        <form className="form-container enelCentro">
          <h1>Report</h1>
          <div >
            <label className='label_text'>Nombre del Reporte:</label>
            <input type="text" />
          </div>
          <div>
            <label className='label_text'>Descripción del Reporte:</label>
            <textarea />
          </div>
          <div>
            <label className='label_text'>Fecha de Encuentro:</label>
            <input type="date" />
          </div>
          <div>
            <label className='label_text'>Numero De Reparación:</label>
            <input type="number" />
          </div>
          <div>
            <label className='label_text'>Reparado:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label className='label_text'>Estado:</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Selecciona un estado</option>
              <option value="estado1">Estado 1</option>
              <option value="estado2">Estado 2</option>
              <option value="estado3">Estado 3</option>
              
            </select>
          </div>
          <button type="submit">Enviar</button>
          <Link to="/panel"><button>Cancelar</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Report;
