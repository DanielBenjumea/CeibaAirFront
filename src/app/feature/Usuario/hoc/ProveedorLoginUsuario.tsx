import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { FormLoginUsuario } from '../components/LoginUsuario';
import { connect } from 'react-redux';
import { loginUsuarioAsync } from 'app/core/redux/acciones/usuarios/UsuariosAcciones';

export const mapStateToProps = (state: EstadoGeneral) => {
	return state.usuario;
};

export const ProveedorLoginUsuario = connect(mapStateToProps, {
	onSubmit: loginUsuarioAsync
})(FormLoginUsuario);
