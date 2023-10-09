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
      }, 8000);

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
            <img className="logito" src="../KARIO_LOGO.png" alt="KARIO Logo" />
            <h3>Media</h3>
            </div>
            <h2>
              Bienvenido al panel digital de
              <br />
              KARIO Media
            </h2>
            <p className='decrip'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            <form className="form">
  <div className="form-content">
    <h3>Usuario</h3>
    <input type="email" className="input" />
    <h3>Contraseña</h3>
    <input type="password" className="input" />
    <p className="page-link">
      <span className="page-link-label"></span>
    </p>
    <button onClick={handleIniciarClick} className="form-btn">
      Ingresar al panel
    </button>
  </div>
</form>

            <p>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
          </div>
        )}
        {mostrarInicio && <Presentacion />}
      </div>
    </div>
  );
};

export default Formulario;
