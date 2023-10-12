import React, { useState, useEffect } from 'react';
import Editar from './Editar.jsx';
import VerInformacion from './VerInformacion.jsx';
import Agregar from './Agregar.jsx';

import '../css/ElementoPanel.css';

const ElementoPanel = () => {
  const [animationDirection, setAnimationDirection] = useState('forwards');
  const [percentage, setPercentage] = useState(0);
  const [menuOpenByRow, setMenuOpenByRow] = useState({});
  const [showTable, setShowTable] = useState(true);
  const [showEditar, setShowEditar] = useState(false);
  const [showAgregar, setShowAgregar] = useState(false);
  const [showVerInformacion, setShowVerInformacion] = useState(false);
  const [indicadores, setIndicadores] = useState([]);

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

  const getCircleColor = (percentage) => {
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
    setShowAgregar(false);
  };

  const handleViewClick = () => {
    setShowTable(false);
    setShowEditar(false);
    setShowVerInformacion(true);
    setShowAgregar(false);
  };

  const handleAgregateClick = () => {
    setShowTable(false);
    setShowEditar(false);
    setShowVerInformacion(false);
    setShowAgregar(true);
  };

  const handleBackClick = () => {
    setShowTable(true);
    setShowEditar(false);
    setShowVerInformacion(false);
    setShowAgregar(false);
  };

  const handleDeleteClick = (indicadorId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');

    if (confirmDelete) {
      // Realizar la solicitud para eliminar el indicador con el ID indicadorId
      fetch(`http://localhost:5026/indicadores/${indicadorId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Eliminación exitosa
            // Actualiza la lista de indicadores para reflejar los cambios
            const updatedIndicadores = indicadores.filter((indicador) => indicador._id !== indicadorId);
            setIndicadores(updatedIndicadores);
          } else {
            // Error en la eliminación
            console.error('Error al eliminar el indicador:', response.statusText);
          }
        })
        .catch((error) => console.error('Error al eliminar el indicador:', error));
    }
  };

  useEffect(() => {
    fetch('http://localhost:5026/indicadores')
      .then((response) => response.json())
      .then((data) => {
        // Inicializa el estado del menú para cada fila
        const initialMenuState = data.reduce((acc, indicador) => {
          acc[indicador.id] = false;
          return acc;
        }, {});
        setIndicadores(data);
        setMenuOpenByRow(initialMenuState);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleMenu = (rowId) => {
    // Cuando haces clic en el menú de una fila, cambia su estado
    setMenuOpenByRow((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
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
                <div className='scroll-div'>
                  <tbody className='body_table'>
                    {indicadores.map((indicador, index) => (
                        <tr key={index} className='body_filas'>
                          <td colSpan={9}>
                            <div className='fila1'>
                              <p className='p1'><span>{indicador.Indicador}</span></p>
                              <p className='p2'><span>{indicador.Descripcion}</span></p>
                              <p className='p3'>{indicador.Categoria}</p>
                              <p className='p4'>{indicador.FechaInicio.substring(0, 10)}</p>
                              <p className='p5'>{indicador.FechaFinal.substring(0, 10)}</p>
                              <p className='p6'>{indicador.Formula}</p>
                              <p className='p7'>{indicador.Frecuencia}</p>
                              <p className='p8'>
                                <div className="circle-loader">
                                  <svg width="60" height="60">
                                    <circle
                                      className="circle"
                                      cx="30"
                                      cy="30"
                                      r="27"
                                      stroke={getCircleColor(indicador.Cumplimiento)}
                                      strokeWidth="7"
                                      fill="none"
                                      strokeDasharray="251"
                                      strokeDashoffset={(251 * (100 - indicador.Cumplimiento)) / 100}
                                      style={{ animationDirection: animationDirection }}
                                    />
                                    <text x="30" y="30" textAnchor="middle" dy="0.3em" className="percentage">
                                      {indicador.Cumplimiento}%
                                    </text>
                                  </svg>
                                </div>
                              </p>
                              <p className='p9'>{indicador.Area}</p>
                            </div>
                          </td>
                          <td className='border_no'>
                            <div className='menu-container'>
                              {menuOpenByRow[indicador._id] ? (
                                <>
                                  <div className='btns_menu'>
                                    <div className='btns_menu2'>
                                      <button className="menu-button btn_edit" onClick={handleEditarClick}>
                                        <span className="material-symbols-outlined">edit</span>
                                      </button>
                                      <button className="menu-button btn_del" onClick={() => handleDeleteClick(indicador._id)}>
                                        <span className="material-symbols-outlined icon_delete">Delete</span>
                                      </button>
                                    </div>
                                    <div className='btns_menu2 '>
                                      <button className="menu-button btn_pre" onClick={handleViewClick}>
                                        <span className="material-symbols-outlined">preview</span>
                                      </button>
                                      <button className="menu-button btn_close" onClick={() => toggleMenu(indicador._id)}>
                                        <span className="material-symbols-outlined icon_close">x</span>
                                      </button>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <span className='material-symbols-outlined icon_menu' onClick={() => toggleMenu(indicador._id)}>
                                  Menu
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </div>
          </table>
        </div>
        <button className='ag_ele' onClick={handleAgregateClick}>Añadir Elementos</button>
      </div>
      )}
      {showEditar && <Editar onBack={handleBackClick} />}
      {showVerInformacion && <VerInformacion onBack={handleBackClick} />}
      {showAgregar && <Agregar onBack={handleBackClick} />}
    </div>
  );
};

export default ElementoPanel;
