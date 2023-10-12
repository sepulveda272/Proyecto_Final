import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../css/Formulario.css';
import '../css/Reporte.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Report = () => {

  const [indicadoresReport, setIndicadoresReport] = useState([])

  const [selectedState, setSelectedState] = useState({
    NombreReporte: "",
    DescripcionReporte: "",
    FechaEncuentro: "",
    Reparacion: "",
    Reparado: false,
    FechaReparacion: "",
    Indicadores: ""
  }); // Estado para almacenar el valor seleccionado

  useEffect(() => {
    axios.get('http://localhost:5026/indicadores').then((response) => {
      setIndicadoresReport(response.data)
    }
    )
  }, [])



  const generalHandlerChanger = (e) => {
    const { name, value } = e.target
    setSelectedState(
      { ...selectedState, [name]: value }
    )
    console.log(selectedState);
  }

  const handleBoolChange = () => {
    setSelectedState(
      { ...selectedState, Indicadores: !selectedState.Reparado }
    )
    console.log(selectedState);
  };

  // Función para manejar el cambio en la selección de estado
  const handleStateChange = (e) => {
    setSelectedState(
      { ...selectedState, Indicadores: e.target.value }
    )
    console.log(selectedState);
  };

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post("http://localhost:5026/reportes", selectedState).catch('Error al reaalizar el reportr')

    setSelectedState(
      {
        NombreReporte: "",
        DescripcionReporte: "",
        FechaEncuentro: "",
        Reparacion: "",
        Reparado: false,
        FechaReparacion: "",
        Indicadores: ""
      }
    )

  }
  return (
    <div>
      <Nav />
      <div className='App-header'>
        <form className="form-container enelCentro" onSubmit={submitHandler}>
          <h1>Report</h1>
          <div >
            <label className='label_text'>Nombre del Reporte:</label>
            <input type="text" name='NombreReporte' onChange={generalHandlerChanger} />
          </div>
          <div>
            <label className='label_text'>Descripción del Reporte:</label>
            <textarea name='DescripcionReporte' onChange={generalHandlerChanger} />
          </div>
          <div>
            <label className='label_text'>Fecha de Encuentro:</label>
            <input type="date" name='FechaEncuentro' onChange={generalHandlerChanger} />
          </div>
          <div>
            <label className='label_text'>Numero De Reparación:</label>
            <input type="number" name='Reparacion' onChange={generalHandlerChanger} />
          </div>
          <div>
            <label className='label_text'>Reparado:</label>
            <input type="checkbox" name='Reparado' onChange={handleBoolChange} />
          </div>
          <div>
            <label className='label_text'>Fecha de Encuentro:</label>
            <input type="date" name='FechaEncuentro' onChange={generalHandlerChanger} />
          </div>
          <div>
            <label className='label_text'>Indicadores:</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Selecciona un Inifcador</option>
              {indicadoresReport.map((indic) => (
                <option value={indic._id}>{indic.Indicador}</option>
              ))}

            </select>
          </div>
          <button type="submit">Enviar</button>
          <Link to="/panel"><button>Cancelar</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Report;
