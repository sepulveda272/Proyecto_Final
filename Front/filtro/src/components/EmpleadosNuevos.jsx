import React, { useState } from "react";
import axios from "axios";
import "../css/Formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Formulario() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Cargo: "",
    Email: "",
    TipoDeDocumento: "",
    DNI: "",
    Direccion: "",
    Imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Parser = reader.result;
      const splitmage = base64Parser.split(",");
      setFormData({ ...formData, Imagen: splitmage[1] });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5026/empleados",
        formData
      );
      console.log("Los datos se subieron correctamente",response.data);

      setFormData({
        Nombre: "",
        Apellido: "",
        Telefono: "",
        Cargo: "",
        Email: "",
        TipoDeDocumento: "",
        DNI: "",
        Direccion: "",
        Imagen: null,
      });
    } catch (error) {
      console.error("Hubo un error al enviar el formulario", error);
    }
  };

  return (
    <div>
      <div className="App-header">
        <div className="form-container">
          <h2 className="bienvenida">
            Bienvenido al panel digital de KARIO Media
          </h2>
          <p className="descrip">
            Por favor ingresa los siguientes datos para ingresar a la plataforma
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="con_form_user">
                <h3 className="label_text">Nombre</h3>
                <input
                  type="text"
                  name="Nombre"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Apellido</h3>
                <input
                  type="text"
                  name="Apellido"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Teléfono</h3>
                <input
                  type="number"
                  name="Telefono"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Cargo</h3>
                <input
                  type="text"
                  name="Cargo"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Email</h3>
                <input
                  type="email"
                  name="Email"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Tipo de Documento</h3>
                <input
                  type="text"
                  name="TipoDeDocumento"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">DNI</h3>
                <input
                  type="number"
                  name="DNI"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_user">
                <h3 className="label_text">Dirección</h3>
                <input
                  type="text"
                  name="Direccion"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="con_form_password">
                <h3 className="label_text">Imagen</h3>
                <input
                  type="file"
                  name="Imagen"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
              <div>
                <button type="submit" className="form-btn">
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <p className="problemas_form">
            Tienes problemas para ingresar? Por favor contactarse con asistencia
            técnica lo más pronto posible
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
