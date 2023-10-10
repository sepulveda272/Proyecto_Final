import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
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
      <div className="nav-user">
        <img src="https://avatars.githubusercontent.com/u/47305995?v=4" alt="Usuario" />
      </div>
      <div className="nav-notifications">
        <i className="fas fa-bell"></i>
      </div>
    </nav>
  );
};

export default Nav;
