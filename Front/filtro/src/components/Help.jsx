import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import Nav from './Nav';
import '../css/Help.css';
import { Link } from 'react-router-dom';

const Help = () => {

const refForm = useRef();

const hendleSubmit = (event) =>{
  event.preventDefault();
  const serviceId = "service_jmy5wha"
  const templateId = "template_7v7666d"

  const apikey = "4yzYtB8AFFXxiJsCL"

  emailjs.sendForm(serviceId,refForm.current,templateId, apikey)
  .the( result => console.log(result.text))
  .catch( error => console.error(error) )
}

    return (
        <div>
        <Nav />
        <div className='App-header'>
          <form ref={refForm} onSubmit={hendleSubmit} action='' class="formulario">
            
            <div className='ayudad'><h1>Help</h1><br/>
              <fieldset>
                <h3>Nombre</h3>
              <input name='from_name' class="my-input" type="text" placeholder="Nombre" required />
              </fieldset>
              <fieldset>
              <h3>Email</h3>
              <input name='email' class="my-input" type="email"  placeholder="Correo electrónico" required />
              </fieldset>
              <fieldset>
              <h3>Tema</h3>
              <input name='tema' class="my-input" type="text"  placeholder="Tema" required />
              </fieldset>
              <fieldset>
              <h3>Descripcion</h3>
              <input name='des' class="my-input" type="text"  placeholder="Descripción" required />
              </fieldset>
              <button class="my-button" type="submit">Enviar</button>
              <Link to="/panel"><button class="my-button">Cancelar</button></Link>
            </div>
          </form>
        </div>


        <div>

        </div>
      </div>
      
      
    );
};

export default Help;