import React, { useState, useEffect } from 'react';
import Inicio from './Inicio';

const Loging = () => {

  const [chek, setChek] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChek(false);
    }, 5000);
  }, []);

  if (chek) {
    return <Inicio />;
  }

  return (
    <>
      <div className='menu'>
        <p>Aca va el Menu</p>
      </div>
      <div className='estructura'>
        <div className='title'>
          <p className='title_main'> Panel de Indicadores </p>
          <p className='text_main'> Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles, dale click a uno de ellos para más información  </p>
        </div>
        {/* <div>
          <p>Aca va la tabla</p>
        </div> */}
      </div>
    </>
  );
};

export default Loging;
