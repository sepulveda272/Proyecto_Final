import React, { useState, useEffect } from 'react';
import Editar from './Editar.jsx';
import VerInformacion from './VerInformacion.jsx';

import '../css/ElementoPanel.css';

const ElementoPanel = () => {
  const [animationDirection, setAnimationDirection] = useState('forwards');
  const [percentage, setPercentage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [showEditar, setShowEditar] = useState(false);
  const [showVerInformacion, setShowVerInformacion] = useState(false);

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

  const handleEditarClick = () => {
    setShowTable(false);
    setShowEditar(true);
    setShowVerInformacion(false);
  };

  const handleViewClick = () => {
    setShowTable(false);
    setShowEditar(false);
    setShowVerInformacion(true);
  };

  const handleBackClick = () => {
    setShowTable(true);
    setShowEditar(false);
    setShowVerInformacion(false);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');

    if (confirmDelete) {
      // Aquí debes implementar la lógica para eliminar el elemento
      // Esto es solo una confirmación en la alerta
    }
  };

  return (
    <div>
      {showTable && (
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

                  <div className='menu-container'>
                  {isMenuOpen ? (
                    <>
                    <div className='btns_menu'>
                      <div className='btns_menu2'>
                        <button className="menu-button btn_edit" onClick={handleEditarClick}>
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button className="menu-button btn_del" onClick={handleDeleteClick}>
                          <span className="material-symbols-outlined icon_delete">Delete</span>
                        </button>
                      </div>
                      <div className='btns_menu2 '>
                        <button className="menu-button btn_pre" onClick={handleViewClick}>
                          <span class="material-symbols-outlined">preview</span>
                        </button>
                        <button className="menu-button btn_close" onClick={() => setIsMenuOpen(false)}>
                          <span className="material-symbols-outlined icon_close">x</span>
                        </button>
                      </div>
                    </div>
                    </>
                  ) : (
                    <span className='material-symbols-outlined icon_menu' onClick={() => setIsMenuOpen(true)}>
                      Menu
                    </span>
                  )}
                  </div>
                </td>
              </tr>
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

                  <div className='menu-container'>
                  {isMenuOpen ? (
                    <>
                    <div className='btns_menu'>
                      <div className='btns_menu2'>
                        <button className="menu-button btn_edit" onClick={handleEditarClick}>
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button className="menu-button btn_del" onClick={handleDeleteClick}>
                          <span className="material-symbols-outlined icon_delete">Delete</span>
                        </button>
                      </div>
                      <div className='btns_menu2 '>
                        <button className="menu-button btn_pre" onClick={handleViewClick}>
                          <span class="material-symbols-outlined">preview</span>
                        </button>
                        <button className="menu-button btn_close" onClick={() => setIsMenuOpen(false)}>
                          <span className="material-symbols-outlined icon_close">x</span>
                        </button>
                      </div>
                    </div>
                    </>
                  ) : (
                    <span className='material-symbols-outlined icon_menu' onClick={() => setIsMenuOpen(true)}>
                      Menu
                    </span>
                  )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className='ag_ele'>Añadir Elementos</button>
      </div>
      )}
      {showEditar && <Editar onBack={handleBackClick} />}
      {showVerInformacion && <VerInformacion onBack={handleBackClick} />}
    </div>
  );
};

export default ElementoPanel;
