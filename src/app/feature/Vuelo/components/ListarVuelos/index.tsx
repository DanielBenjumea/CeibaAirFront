import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button, DivContainer, GridContainer, GridItem } from './styles';
import { ImAirplane, ImArrowDown } from 'react-icons/im';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { Vuelo } from '../../models/Vuelo';
import { axiosIntance } from 'app/core/config/AxiosConfig';
import moment from 'moment';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export interface ListaVuelosProps {
	vuelos: Array<Vuelo>;
	usuario: Usuario;
	listarVuelos: () => void;
}

export const ListaVuelos: React.FC<ListaVuelosProps> = ({ vuelos, usuario, listarVuelos }) => {
	useEffect(
		() => {
			listarVuelos();
		},
		[ listarVuelos ]
	);

	const handleClick = async (idVuelo: number) => {
		try {
			if(usuario.nombre === '') {
				Swal.fire('Inicio de sesión requerido', 'Se necesita iniciar sesión para poder registrarse en un vuelo', 'warning');
				return;
			}

			const res =  await axiosIntance.post('/vuelos/enlistar', {
				vuelo: idVuelo
			});

			if (res.status === 201) {
				Swal.fire('Registro éxitoso', 'Se ha registrado en el vuelo de manera éxitosa', 'success');

			}
		} catch (error) {
			Swal.fire('Error al registrarse', 'No se pudo registrar en el vuelo usted ya se encuentra registrado en este vuelo o su saldo insuficiente', 'error');
		}
	};

	return (
		<DivContainer>
			<h1>Vuelos Disponibles</h1>
			<GridContainer>
				{vuelos.map((vuelo: Vuelo) => {
					return (
						<GridItem key={vuelo.id}>
							<ImAirplane size={64} />
							<h2>{vuelo.desde}</h2>
							<ImArrowDown size={32} />
							<h2>{vuelo.hacia}</h2>
							<h2>$ {vuelo.precio}</h2>
							<h3>{moment(vuelo.fecha).format('DD/MM/YYYY')}</h3>
							<Button onClick={() => handleClick(vuelo.id)}>Registrar</Button>
						</GridItem>
					);
				})}
			</GridContainer>
		</DivContainer>
	);
};

ListaVuelos.propTypes = {
	vuelos: PropTypes.array.isRequired
};
