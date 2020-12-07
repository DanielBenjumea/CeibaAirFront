import { Vuelo } from 'app/feature/Vuelo/models/Vuelo';

export const LISTAR_VUELOS = 'LISTAR_VUELOS';

interface AccionListarVuelos {
    type: typeof LISTAR_VUELOS;
    payload: Vuelo[];
}

export type TiposAccionesVuelo = 
    | AccionListarVuelos;