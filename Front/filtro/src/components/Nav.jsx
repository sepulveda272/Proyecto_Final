import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [user, setUser] = useState(null);

  const handleUserClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    document.cookie = ("token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
    document.cookie = ("idCokki=; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
    window.location.href = '/';
  };

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5026/paneles")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const id = getCookie('idCokki');
  console.log('ID de la cookie:', id);

  useEffect(() => {
    if (!id) {
      // Manejar el caso en que la cookie 'user_id' no está presente
      console.log('Cookie de ID no encontrada');
      return;
    }

    axios.get(`http://localhost:5026/usuarios/${id}`)
      .then((res) => {
        console.log('Respuesta de la API:', res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [id]);

  return (
    <div>
      <nav className="nav">
        <div className='aling_menu anadir'>
          <img src="../anadir.png" alt="Logo" />
          <a href="#">Añadir</a>
        </div>
        <div className='aling_menu refresh'>
      <img src="../actualizar.png" alt="Logo" />
      <Link to="/panel" onClick={() => window.location.reload()}>Refrescar</Link>
    </div>
        <div className='aling_menu delete'>
          <img src="../Icon material-delete-forever.svg" alt="Logo" />
          <a href="#">Eliminar</a>
        </div>

        <div className='aling_menu logo_nav'>
          <img onClick={togglePanel} src="../KARIO_LOGO.png" alt="Logo" />
          {showPanel && (
            <div className="panel">
              {apiData.map((data, index) => (
                <Link to="/panel" key={index}>
                  <button className='custom-button'>{data.Nombre}</button>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className='aling_menu reportar'>
          <img src="../Icon material-bug-report.svg" alt="Logo" />
          <Link to="/Report">Reportar</Link>
        </div>

        <div className='aling_menu ayuda'>
          <img src="../boton-web-de-ayuda.png" alt="Logo" />
          <Link to="/Help">Ayuda</Link>
        </div>

        <div className='aling_menu configuracion'>
          <img className='config' src="../configuraciones.png" alt="Logo" />
        </div>

        <div className='aling_menu notificacion'>
          <img className='noti' src="../activar-el-boton-de-notificaciones.png" alt="Logo" />
        </div>

        {user && user.empleadoInfo ? (
          user.empleadoInfo.map((userData) => {
            return (
              <div className='aling_menu foto_user' key={userData._id}>
                <img onClick={handleUserClick} src={userData.Imagen} alt="Usuario" />
              </div>
            );
          })
        ) : null}

        <div className="nav-notifications">
          <i className="fas fa-bell"></i>
        </div>
      </nav>
      <div className='botonbajo'>
        {isLoggedIn ? (
          <div className="navr ">
            <button className="custom-button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
