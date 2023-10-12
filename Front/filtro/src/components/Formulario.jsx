import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentacion from './Presentacion.jsx';
import axios from 'axios';
import '../css/Formulario.css';

const Formulario = () => {
  const [mostrarInicio, setMostrarInicio] = useState(false);
  const [redirigir, setRedirigir] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // Nuevo estado para almacenar la información del usuario o empleado

  const handleIniciarClick = () => {
    if (!usuario || !password) {
      setError('Por favor, complete todos los campos obligatorios.');
      return;
    }

    axios
      .post("http://localhost:5026/login/logeate", {
        withCredentials: true,
        usuario,
        password
      })
      .then((response) => {
        setMostrarInicio(true);
        document.cookie = `token = ${response.data.token}`;
        document.cookie = `idCokki = ${response.data.user._id}`
        setUser(response.data.userData); // Almacena la información del usuario/empleado en el estado
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setError('Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.');
      });
  };

  useEffect(() => {
    if (mostrarInicio) {
      const timeoutId = setTimeout(() => {
        setRedirigir(true);
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, [mostrarInicio]);

  if (redirigir) {
    return <Navigate to="/panel" />;
  }

  return (
    <div>
      <div className="App-header">
        {!mostrarInicio && (
        <div className='form-position'>
            <div className="form-containerqq">
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
                    <input type="text" className="input" value={usuario} onChange={(e)=> setUsuario(e.target.value)} />
                  </div>
                  <div className='con_form_password'>
                    <h3 className='label_text'>Contraseña</h3>
                    <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} />
                  </div>
                  <div>
                    <button type='button' onClick={()=>handleIniciarClick()} className="form-btn">
                      Ingresar al panel
                    </button>
                  </div>
                </div>
              </form>

              <p className='problemas_form'>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
            </div>
          </div>
        )}
        {mostrarInicio && <Presentacion />}
      </div>
    </div>
  );
};

export default Formulario;
