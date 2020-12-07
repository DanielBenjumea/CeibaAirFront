import { axiosIntance } from '../config/AxiosConfig';

// TODO

export const ProductoRepositorio = {
	consultarPorPagina: (page: number) => axiosIntance.get('/vuelos')
};
