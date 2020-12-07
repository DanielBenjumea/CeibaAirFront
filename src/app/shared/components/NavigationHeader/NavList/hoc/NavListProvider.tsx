import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { NavigationHeader } from '../..';
import { connect } from 'react-redux';

export const mapStateToProps = (state: EstadoGeneral) => {
	return state.usuario;
};

export const ProveedorNavigationHeader = connect(mapStateToProps)(NavigationHeader);
