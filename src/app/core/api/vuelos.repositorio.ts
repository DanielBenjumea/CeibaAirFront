import { axiosIntance } from '../config/AxiosConfig';

export const VuelosRepositorio = {
    obtenerVuelos: () => axiosIntance.get('/vuelos')
};