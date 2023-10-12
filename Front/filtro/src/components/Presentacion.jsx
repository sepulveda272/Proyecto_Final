import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Presentacion() {
  const [user, setUser] = useState([]);
  
  // Mueve la función getCookie aquí para que esté disponible antes de su uso
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const id = getCookie('user_id'); // Obtén el valor de la cookie 'user_id'
  console.log(id);

  useEffect(() => {
    if (!id) {
      // Manejar el caso en que la cookie 'user_id' no está presente
      return;
    }

    axios.get(`http://localhost:5026/usuarios/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [id]);

  return (
    <div className='form-position'>
      <div className='App-header'>
        {user ? (
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
            {user.map((userData) => (
              <div key={userData._id}>
                <img className='entradaIma' src={userData.empleadoInfo[0].Imagen} alt='imagen' />
                <h1 className='name_user'>{userData.empleadoInfo[0].Nombre} {userData.empleadoInfo[0].Apellido}</h1>
                <p className='rol_user'>{userData.empleadoInfo[0].Cargo}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
}

export default Presentacion;
