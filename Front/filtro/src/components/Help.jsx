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
              <fieldset>
                <h3>Nombre</h3>
              <input name='from_name' class="my-input" type="text" name="Name" placeholder="Nombre" required />
              </fieldset>
              <fieldset>
              <h3>Email</h3>
              <input name='email' class="my-input" type="email" name="Email" placeholder="Correo electrónico" required />
              </fieldset>
              <fieldset>
              <h3>Tema</h3>
              <input name='tema' class="my-input" type="text" name="Tema" placeholder="Tema" required />
              </fieldset>
              <fieldset>
              <h3>Descripcion</h3>
              <input name='des' class="my-input" type="text" name="Descripcion" placeholder="Descripción" required />
              </fieldset>
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