import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentacion from './Presentacion.jsx';
import '../css/Formulario.css';

const Formulario = () => {
  const [mostrarInicio, setMostrarInicio] = useState(false);
  const [redirigir, setRedirigir] = useState(false);

  useEffect(() => {
    if (mostrarInicio) {
      const timeoutId = setTimeout(() => {
        setRedirigir(true);
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, [mostrarInicio]);

  const handleIniciarClick = () => {
    setMostrarInicio(true);
  };

  if (redirigir) {
    return <Navigate to="/panel" />;
  }

  return (
    <div>
      <div className="App-header">
        {!mostrarInicio && (
          <div className="form-container">
            <div className='superior'>
              <img className="logito_form" src="../KARIO_LOGO.png" alt="KARIO Logo" />
              <h3 className='media'>
                <p>M</p>
                <p>E</p>
                <p>D</p>
                <p>I</p>
                <p>A</p>
              </h3>
            </div>
            <h2 className='bienvenida'>
              Bienvenido al panel digital de KARIO Media
            </h2>
            <p className='descrip'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            <form className="form">
              <div className="form-content">
                <div className='con_form_user'>
                  <h3 className='label_text'>Usuario</h3>
                  <input type="email" className="input" />
                </div>
                <div className='con_form_password'>
                  <h3 className='label_text'>Contraseña</h3>
                  <input type="password" className="input" />
                </div>
                <div>
                  <button onClick={handleIniciarClick} className="form-btn">
                    Ingresar al panel
                  </button>
                </div>
              </div>
            </form>

            <p className='problemas_form'>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
          </div>
        )}
        {mostrarInicio && <Presentacion />}
      </div>
    </div>
  );
};

export default Formulario;