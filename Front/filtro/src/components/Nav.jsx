import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleUserClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowButton(true); // Mostrar el botón al hacer clic
  };

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item nav-logol">
          <img src="../anadir.png" alt="Logo" />
          <a href="#">Añadir</a>
        </li>
        <li className="nav-item nav-logol">
          <img src="../actualizar.png" alt="Logo" />
          <a href="#">Refrescar</a>
        </li>
        <li className="nav-item nav-logol">
          <img src="../Icon material-delete-forever.svg" alt="Logo" />
          <a href="#">Eliminar</a>
        </li>
        <li className="nav-logo nav-logol">
          <img src="../KARIO_LOGO.png" alt="Logo" />
        </li>
        <li className="nav-item nav-logol">
          <img src="../Icon material-bug-report.svg" alt="Logo" />
          <Link to='/Report'>Reportar</Link>
        </li>
        <li className="nav-item nav-logol">
          <img src="../boton-web-de-ayuda.png" alt="Logo" />
          <a href="#">Ayuda</a>
        </li>
        <li className="nav-item nav-logolt">
          <img className='space' src="../configuraciones.png" alt="Logot" />
          <img className='space' src="../activar-el-boton-de-notificaciones.png" alt="Logot" />
        </li>
      </ul>
      <div className="nav-user" onClick={handleUserClick}>
        <img src="https://avatars.githubusercontent.com/u/47305995?v=4" alt="Usuario" />
        {showButton && isLoggedIn ? (
          <div className="user-buttont">
            <Link to="/">Logout</Link>
          </div>
        ) : null}
      </div>
      <div className="nav-notifications">
        <i className="fas fa-bell"></i>
      </div>
    </nav>
  );
};

export default Nav;
