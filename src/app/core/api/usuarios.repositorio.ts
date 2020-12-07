import { axiosIntance } from '../config/AxiosConfig';

export const UsuarioRepositorio = {
	loginUsuario: (usuario: any) => axiosIntance.post('/auth/login', usuario)
};
