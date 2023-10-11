import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Nav from './Nav';
import Report from './Report';

const Panel = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('forwards');
  const [showReport, setShowReport] = useState(false);

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

  const toggleReport = () => {
    setShowReport(!showReport);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      

      {showReport ? (
        <Report />
      ) : (
        <div className='fondo_white'>
          <p className='title_panel'>Panel de Indicadores</p>
          <p className='text_panel'>Aquí puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles, dale click a uno de ellos para más información</p>
          <div>
            <table>
              <thead>
                <tr className='title_filas'>
                  <th colSpan={9}>
                    <div className='fila_cabeza'>
                      <p className='p1'>Indicador</p>
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
                  <td colSpan={9}>
                    <div className='fila1'>
                      <p className='p1'><span>Modelado 3D</span></p>
                      <p className='p2'><span>Interes por ...</span></p>
                      <p className='p3'>Baja</p>
                      <p className='p4'>12/05/21</p>
                      <p className='p5'>12/12/21</p>
                      <p className='p6'>Met.Agil</p>
                      <p className='p7'>1/4</p>
                      <p className='p8'>
                        <div className="circle-loader">
                          <svg width="60" height="60">
                            <circle
                              className="circle"
                              cx="30"
                              cy="30"
                              r="27"
                              stroke={getCircleColor()}
                              strokeWidth="7"
                              fill="none"
                              strokeDasharray="251"
                              strokeDashoffset={(251 * (100 - percentage)) / 100}
                              style={{ animationDirection: animationDirection }}
                            />
                            <text x="30" y="30" textAnchor="middle" dy="0.3em" className="percentage">
                              {percentage}%
                            </text>
                          </svg>
                        </div>
                      </p>
                      <p className='p9'>Marketing</p>
                    </div>
                  </td>
                  <td className='border_no'>
                    <Link to='/menu'>
                      <span className='material-symbols-outlined icon_menu'>Menu</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <button onClick={toggleReport}>Mostrar Informe</button>
    </Fragment>
  );
};

export default Panel;
