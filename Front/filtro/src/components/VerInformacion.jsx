import React from 'react';

const VerInformacion = ({ onBack }) => {
  const handleBackClick = () => {
    onBack(); // Llama a la función para volver a la vista de la tabla
  };

  return (
    <div>
      <h1 className='verInfo'>Información Detallada</h1>
      {/* Agregar contenido de información detallada aquí */}
      <button onClick={handleBackClick}>Volver a la tabla</button>
    </div>
  );
};

export default VerInformacion;
