import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Inicio() {
  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario o empleado

  useEffect(() => {
    // Realiza una solicitud para obtener la información del usuario o empleado
    axios.get('http://localhost:5026/usuarios')
      .then((res) => {
        console.log(res.data);
        setUser(res.data); // Almacena la información del usuario/empleado en el estado
      });
  }, []);

  return (
    <div className='form-position'>
      <div className='App-header'>
        <div className="form-container-presentqq">
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
          <h1 className='denuevo'>Bienvenido de nuevo</h1>
          {user && ( // Verifica si user es diferente de null o undefined
            <>
              <img className='entradaIma' src={user.Imagen} alt='imagen' />
              <h1 className='name_user'>{user.Nombre} {user.Apellido}</h1>
              {user.Cargo && <p className='rol_user'>{user.Cargo.Nombre}</p>} {/* Verifica si user.Cargo está definido */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
