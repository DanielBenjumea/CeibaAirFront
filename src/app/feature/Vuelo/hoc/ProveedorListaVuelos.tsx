import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { ListaVuelos } from '../components/ListarVuelos';
import { connect } from 'react-redux';
import { listarVuelosAsync } from 'app/core/redux/acciones/vuelos/VuelosAcciones';

export const mapStateToProps = (state: EstadoGeneral) => {
	return {
        vuelos: state.vuelos.vuelos,
        usuario: state.usuario.usuario
    };
};

export const ProveedorListarProductos = connect(mapStateToProps, {
	listarVuelos: listarVuelosAsync
})(ListaVuelos);
