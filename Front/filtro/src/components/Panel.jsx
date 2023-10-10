import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Nav from './Nav';
import Report from './Help';


const Panel = () => {
    const [loading, setLoading] = useState(true);
    const [percentage, setPercentage] = useState(0);
    const [animationDirection, setAnimationDirection] = useState('forwards');
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (percentage < 50) {
          setPercentage(percentage + 1);
        } else {
          setAnimationDirection('backwards');
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, [percentage]);
  
    const getCircleColor = () => {
      if (percentage >= 80) {
        return 'green';
      } else if (percentage >= 50) {
        return 'orange';
      } else {
        return 'red';
      }
    };

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    
      if (loading) {
        return <Loading />;
      }

    return (
      <><Nav/>
      
        <div className='fondo_white'>
          
            
              
            
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
                        <p className='p8'>
                        <div className="circle-loader">
      <svg width="70" height="70">
        <circle
          className="circle"
          cx="35"
          cy="35"
          r="31"
          stroke={getCircleColor()}
          strokeWidth="6"
          fill="none"
          strokeDasharray="251"
          strokeDashoffset={(251 * (100 - percentage)) / 100}
          style={{ animationDirection: animationDirection }}
        />
        <text x="35" y="35" textAnchor="middle" dy="0.3em" className="percentage">
          {percentage}%
        </text>
      </svg>
    </div>
                        </p>
                        <p className='p9'>Marketing</p>
                      </div>
                    </td>
                    <a className='border_no' href="/menu"><span class="material-symbols-outlined icon_menu">Menu</span></a>
                  </tr>   
                </tbody>
              </table>
            </div> 



<Report/>

        </div>
      </>
    );
};

export default Panel;
