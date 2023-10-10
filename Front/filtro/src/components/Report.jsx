import React from 'react';

const Report = () => {
  return (
    <div>
      <h1>Report</h1>
      <form>
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
  );
};

export default Report;
