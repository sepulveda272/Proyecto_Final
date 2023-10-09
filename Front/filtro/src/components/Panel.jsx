import React, { useState, useEffect } from 'react';
import Loading from './Loading';



const Panel = () => {
    
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    
      if (loading) {
        return <Loading />;
      }

    return (
      <>
        <div className='fondo_white'>
          <div>
            <div /* className='menu' */>
              <p>Aca va el Menu</p>
            </div>
            <div /* className='estructura' */>
              <div  /* className='title' */>
                <p /* className='title_main' */> Panel de Indicadores </p>
                <p /* className='text_main' */> Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información  </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Panel;
