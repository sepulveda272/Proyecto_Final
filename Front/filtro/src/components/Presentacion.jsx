import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Presentacion() {
  const [user, setUser] = useState(null); // Inicializa user como null

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const id = getCookie('idCokki');
  console.log('ID de la cookie:', id); // Agrega un log para verificar el valor de la cookie

  useEffect(() => {
    if (!id) {
      // Manejar el caso en que la cookie 'user_id' no está presente
      console.log('Cookie de ID no encontrada');
      return;
    }

    axios.get(`http://localhost:5026/usuarios/${id}`)
      .then((res) => {
        console.log('Respuesta de la API:', res.data); // Agrega un log para verificar la respuesta de la API
        setUser(res.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [id]);

  console.log('Valor de user:', user); // Agrega un log para verificar el valor de user

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
            {user.empleadoInfo.map((userData) => (
              <div key={userData._id}>
                <img className='entradaIma' src={userData.Imagen} alt='imagen' />
                <h1 className='name_user'>{userData.Nombre} {userData.Apellido}</h1>
                <p className='rol_user'>{userData.Cargo}</p>
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
