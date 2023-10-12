import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import Nav from './Nav';
import '../css/Help.css'

const Help = () => {

const refForm = useRef();

const hendleSubmit = (event) =>{
  event.preventDefault();
  
}

    return (
        <div>
        <Nav />
        <div className='App-header'>
          <form class="formulario">
            
            <div className='ayudad'><h1>Help</h1><br/>
              <h3>Nombre</h3>
              <input class="my-input" type="text" name="Name" placeholder="Nombre" required />
              <h3>Email</h3>
              <input class="my-input" type="email" name="Email" placeholder="Correo electrónico" required />
              <h3>Tema</h3>
              <input class="my-input" type="text" name="Tema" placeholder="Tema" required />
              <h3>Descripcion</h3>
              <input class="my-input" type="text" name="Descripcion" placeholder="Descripción" required />
              <button class="my-button" type="submit">Enviar</button>
            </div>
          </form>
        </div>


        <div>

        </div>
      </div>
      
      
    );
};

export default Help;