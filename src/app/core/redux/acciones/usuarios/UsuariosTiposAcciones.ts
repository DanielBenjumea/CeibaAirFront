import { Usuario } from 'app/feature/Usuario/models/Usuario';

export const LOGIN_USUARIO = 'LOGIN_USUARIO';

interface AccionLoginUsuario {
    type: typeof LOGIN_USUARIO;
    payload: Usuario;
}

export type TiposAccionesUsuario = 
    | AccionLoginUsuario;