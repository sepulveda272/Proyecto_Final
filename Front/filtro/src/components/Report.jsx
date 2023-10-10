import React from 'react';
import Nav from './Nav';

const Report = () => {
  return (
    <div>
      <Nav/>
      
      <div className='App-header'>
      <form className="form-container"><h1>Report</h1>
        <div>
          <label>Nombre del Reporte:</label>
          <input type="text" />
        </div>
        <div>
          <label>Descripción del Reporte:</label>
          <textarea />
        </div>
        <div>
          <label>Fecha de Encuentro:</label>
          <input type="date" />
        </div>
        <div>
          <label>Reparación:</label>
          <input type="number" />
        </div>
        <div>
          <label>Reparado:</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Fecha de Reparación:</label>
          <input type="date" />
        </div>
        <div>
          <label>Estado:</label>
          <input type="checkbox" />
        </div>
        <button type="submit">Guardar</button>
      </form>
      </div>
    </div>
  );
};

export default Report;
