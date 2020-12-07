import { LOGIN_USUARIO, TiposAccionesUsuario } from './UsuariosTiposAcciones';
import Swal from 'sweetalert2';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { UsuarioRepositorio } from 'app/core/api/usuarios.repositorio';
import jwt_decode from 'jwt-decode';

export function loginUsuario(usuario: Usuario): TiposAccionesUsuario {
	return {
		type: LOGIN_USUARIO,
		payload: usuario
	};
}

export function loginUsuarioAsync(usuario: Usuario) {
	return function(dispatch: any) {
		UsuarioRepositorio.loginUsuario({
			username: usuario.nombre,
			password: usuario.clave
		})
			.then((respuesta: any) => {
				localStorage.setItem('token', respuesta.data.token);
				dispatch(loginUsuario(jwt_decode(respuesta.data.token)));
				Swal.fire('Inicio de sesión exitoso', 'Su sesión ha iniciado', 'success');
			})
			.catch((error) => {
				Swal.fire('Error al iniciar sesión', 'nombre de usuario o contraseña incorrectos', 'error');
			});
	};
}
