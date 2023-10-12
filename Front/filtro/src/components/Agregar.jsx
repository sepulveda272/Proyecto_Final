import React, { useState, useEffect } from 'react';

const Agregar = ({ onBack }) => {
  const handleBackClick = () => {
    onBack();
  };

  const [formData, setFormData] = useState({
    indicador: '',
    descripcion: '',
    categoria: '',
    formula: '',
    fechaInicio: '',
    fechaTerminacion: '',
    frecuencia: '',
    cumplimiento: '',
    area: '',
    tareas: [],
    empleados: [],
    panel: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Si el campo es "tareas" o "empleados", agrega el nuevo valor al arreglo existente
    if (name === "tareas" || name === "empleados") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };  
  

  const handleAgregarClick = (e) => {
    e.preventDefault();
  
    // Realiza la solicitud POST a la API
    fetch('http://localhost:5026/indicadores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Realiza cualquier acción adicional después de agregar el indicador
        console.log('Indicador agregado:', data);
        window.location.href = '/panel'
      })
      .catch((error) => {
        console.error('Error al agregar el indicador:', error);
      });
  };

  return (
    <div className="Agregate_header">
        <h1 className='verInfo'>Nuevo Indicador</h1>
      <form className='form_ag'  onSubmit={handleAgregarClick} >
        <div className="ag_content">
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Indicador</label>
                    <input
                        type="text"
                        name="indicador"
                        className="input_ag"
                        value={formData.indicador} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Descripcion</label>
                    <input
                        type="text"
                        name="descripcion"
                        className="input_ag"
                        value={formData.descripcion} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Categoria</label>
                    <input
                        type="text"
                        name="categoria"
                        className="input_ag"
                        value={formData.categoria} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Formula</label>
                    <input
                        type="text"
                        name="formula"
                        className="input_ag"
                        value={formData.formula} 
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Fecha de Inicio</label>
                    <input
                        type="date"
                        name="fechaInicio"
                        className="input_ag"
                        value={formData.fechaInicio} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Fecha de Terminacion</label>
                    <input
                        type="date"
                        name="fechaTerminacion"
                        className="input_ag"
                        value={formData.fechaTerminacion} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Frecuencia</label>
                    <input
                        type="text"
                        name="frecuencia"
                        className="input_ag"
                        value={formData.frecuencia} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Cumplimiento</label>
                    <input
                        type="number"
                        name="cumplimiento"
                        className="input_ag"
                        value={formData.cumplimiento} 
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Area</label>
                    <input
                        type="text"
                        name="area"
                        className="input_ag"
                        value={formData.area} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Empleados</label>
                    <input
                        type="text"
                        name="empleados"
                        className="input_ag"
                        value={formData.empleados} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Tareas</label>
                    <input
                        type="text"
                        name="tareas"
                        className="input_ag"
                        value={formData.tareas} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Panel</label>
                    <input
                        type="text"
                        name="panel"
                        className="input_ag"
                        value={formData.panel} 
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>        
        <div className='btns_ag'>
            <button type="submit" className="form-btn_ag agg">Agregar</button>
            <button className="form-btn_ag caa" onClick={handleBackClick}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Agregar;
