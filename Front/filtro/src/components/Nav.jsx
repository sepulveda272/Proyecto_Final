import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    document.cookie = ("token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;")
    window.location.href = '/';
  };
  return (
    <nav className="nav">
      <div className='aling_menu anadir'>
        <img src="../anadir.png" alt="Logo" />
        <a href="#">Añadir</a>    
      </div>
      <div className='aling_menu refresh'>
        <img src="../actualizar.png" alt="Logo" />
        <a href="#">Refrescar</a>
      </div>
      <div className='aling_menu delete'>
        <img src="../Icon material-delete-forever.svg" alt="Logo" />
        <a href="#">Eliminar</a>
      </div>

      <div className='aling_menu logo_nav'>
        <img src="../KARIO_LOGO.png" alt="Logo" />
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

      <div className='aling_menu foto_user' onClick={handleUserClick}>
        <img src="https://avatars.githubusercontent.com/u/47305995?v=4" alt="Usuario" />
        {isLoggedIn ? (
          <div className="logout-button">
            <button className="custom-button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        ) : null}
      </div>     <div className="nav-notifications">
        <i className="fas fa-bell"></i>
      </div>
    </nav>
  );
};

export default Nav;
