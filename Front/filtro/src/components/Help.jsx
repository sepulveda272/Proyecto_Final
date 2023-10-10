import React from 'react';
import Nav from './Nav';

const Help = () => {
    return (
        <div>
            <Nav/>
    <form action="https://formsubmit.co/sbstzuluaga@gmail.com" method="POST">
     <input type="text" name="Name" required/>
     <input type="email" name="Email" required/>
     <input type="text" name="Tema" required/>
     <input type="text" name="Descripcion" required/>
     <button type="submit">Send</button>
    </form>
        </div>
    );
};

export default Help;