import { LOGIN_USUARIO, TiposAccionesUsuario } from '../../acciones/usuarios/UsuariosTiposAcciones';
import { EstadoUsuario } from '../../modelo/EstadoUsuario';

const initialState: EstadoUsuario = {
	usuario: {
		nombre: '',
		isAdmin: false
	}
};

export default function(state = initialState, action: TiposAccionesUsuario): EstadoUsuario {
	switch (action.type) {
		case LOGIN_USUARIO: {
			const usuario = action.payload;
			return {
				...state,
				usuario
			};
		}
		default:
			return state;
	}
}
