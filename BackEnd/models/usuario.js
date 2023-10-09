import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
    usuario: {
        type: String,
        require: [true, 'el usuario es obligatorio']
    },
    password: {
        type: String,
        require: [true, 'la contraseña es obligatoria']
    }
})

const Usuarios = model('Usuario', UsuarioSchema);
export default Usuarios