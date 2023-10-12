import React from 'react';

const Editar = ({ onBack }) => {
  const handleBackClick = () => {
    onBack(); // Llama a la función para volver a la vista de la tabla
  };

  return (
    <div className="App-header">
      <form class="formulario">
      <h1 className='verInfo'>Editar Panel</h1>

      

      <button onClick={handleBackClick}>Volver a la tabla</button>
      </form>
    </div>
  );
};

export default Editar;
