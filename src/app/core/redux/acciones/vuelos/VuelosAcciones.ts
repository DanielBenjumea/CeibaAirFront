import { LISTAR_VUELOS, TiposAccionesVuelo } from './VuelosTiposAcciones';
import { Vuelo } from 'app/feature/Vuelo/models/Vuelo';
import { VuelosRepositorio } from 'app/core/api/vuelos.repositorio';

export function listarVuelos(vuelos: Array<Vuelo>): TiposAccionesVuelo {
	return {
		type: LISTAR_VUELOS,
		payload: vuelos
	};
}

export function listarVuelosAsync() {
	return function(dispatch: any) {
		VuelosRepositorio.obtenerVuelos().then((respuesta: any) => {
            dispatch(listarVuelos(respuesta.data));
		});
	};
}
