import {Router} from 'express'
import {getUsers, postUsers} from '../controllers/usuarios.controllers.js';

const routes = Router();

routes.get('/', getUsers)
routes.post('/', postUsers)

export default routes