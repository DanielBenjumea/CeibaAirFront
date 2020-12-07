import { EstadoProducto } from './EstadoProducto';
import { EstadoUsuario } from './EstadoUsuario';
import { EstadoVuelo } from './EstadoVuelo';

export interface EstadoGeneral {
  productos: EstadoProducto;
  vuelos: EstadoVuelo;
  usuario: EstadoUsuario;
}
