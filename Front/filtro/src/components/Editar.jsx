import React from 'react';

const Editar = ({ onBack }) => {
  const handleBackClick = () => {
    onBack(); // Llama a la función para volver a la vista de la tabla
  };

  return (
    <div>
      <h1 className='verInfo'>Editar Panel</h1>
      <button onClick={handleBackClick}>Volver a la tabla</button>
      {/* Resto del contenido de Editar */}
    </div>
  );
};

export default Editar;
