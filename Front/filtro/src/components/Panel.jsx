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
          
            <div /* className='menu' */>
              <p>Aca va el Menu</p>
            </div>
            <p className='title_panel'> Panel de Indicadores </p>
            <p className='text_panel'> Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información  </p>

           <div>
              <table>
                <thead> 
                  <tr className='title_filas'>
                    <th colSpan={9}>
                      <div className='fila_cabeza'>
                        <p className='p1'> Indicador</p>
                        <p className='p2'>Descripcion</p>
                        <p className='p3'>Categoria</p>
                        <p className='p4'>Fecha de Inicio</p>
                        <p className='p5'>Fecha de Terminacion</p>
                        <p className='p6'>Formula</p>
                        <p className='p7'>Frecuencia</p>
                        <p className='p8'>Cumplimiento</p>
                        <p className='p9'>Area</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className='body_table'>
                  <tr className='body_filas'>
                    <td  colSpan={9}>
                      <div className='fila1'>
                        <p className='p1'>Modelado 3D</p>
                        <p className='p2'>Interes por ...</p>
                        <p className='p3'>Baja</p>
                        <p className='p4'>12/05/21</p>
                        <p className='p5'>12/12/21</p>
                        <p className='p6'>Met.Agil</p>
                        <p className='p7'>1/4</p>
                        <p className='p8'>31%</p>
                        <p className='p9'>Marketing</p>
                      </div>
                    </td>
                    <a className='border_no' href="/menu"><span class="material-symbols-outlined icon_menu">Menu</span></a>
                  </tr>   
                </tbody>
              </table>
            </div> 

        </div>
      </>
    );
};

export default Panel;
