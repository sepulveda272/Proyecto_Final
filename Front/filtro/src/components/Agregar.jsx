import React from 'react';

const Agregar = ({ onBack }) => {
  const handleBackClick = () => {
    onBack(); // Llama a la función para volver a la vista de la tabla
  };

  return (
    <div className="Agregate_header">
        <h1 className='verInfo'>Nuevo Indicador</h1>
      <form className='form_ag'>
        <div className="ag_content">
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Indicador</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Descripcion</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Categoria</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Formula</label>
                    <input type="text" className="input_ag" />
                </div>
            </div>
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Fecha de Inicio</label>
                    <input type="date" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Fecha de Terminacion</label>
                    <input type="date" className="input_ag" />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Frecuencia</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Cumplimiento</label>
                    <input type="text" className="input_ag"/>
                </div>
            </div>
            <div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Area</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Empleados</label>
                    <input type="text" className="input_ag"/>
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Tareas</label>
                    <input type="text" className="input_ag" />
                </div>
                <div className='con_form_user'>
                    <label className='label_text_ag'>Panel</label>
                    <input type="text" className="input_ag" />
                </div>
            </div>
        </div>        
        <div className='btns_ag'>
            <button className="form-btn_ag agg">Agregar</button>
            <button className="form-btn_ag caa" onClick={handleBackClick}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Agregar;
