import { LISTAR_VUELOS, TiposAccionesVuelo } from '../../acciones/vuelos/VuelosTiposAcciones';
import { EstadoVuelo } from '../../modelo/EstadoVuelo';
import { Vuelo } from 'app/feature/Vuelo/models/Vuelo';

const initialState: EstadoVuelo = {
	vuelos: Array<Vuelo>()
};

export default function(state = initialState, action: TiposAccionesVuelo): EstadoVuelo {
	switch (action.type) {
		case LISTAR_VUELOS: {
			const vuelos = action.payload;
			return {
				...state,
				vuelos
			};
		}
		default:
			return state;
	}
}
