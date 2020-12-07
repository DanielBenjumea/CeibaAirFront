import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import usuario from './usuarios/usuariosReductor';
import vuelos from './vuelos/vuelosReductor';

export default combineReducers({ productos, vuelos, usuario });
