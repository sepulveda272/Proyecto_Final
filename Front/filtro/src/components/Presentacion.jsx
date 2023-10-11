import React from 'react';

function Inicio() {
  
  return (
    <>
      <div className='App-header'>
        <div className="form-container-present">
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
          <img className='entradaIma' src='https://avatars.githubusercontent.com/u/47305995?v=4' alt='imagen'/>
          <h1 className='name_user'>Nombre del Usuario</h1>
          <p className='rol_user'>Usuario Rol</p>
        </div>
      </div>
    </>

  );
}

export default Inicio;
