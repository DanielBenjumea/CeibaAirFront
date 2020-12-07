import * as React from 'react';
import { HeaderNav } from './styles';
import LogoCeiba from 'assets/img/logo-ceiba.png';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

interface NavigationHeaderProps {
	usuario: Usuario;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ usuario }) => {
	const routes = [ { label: 'Home', url: '/' } ];

	if (usuario.nombre === '') {
		routes.push({ label: 'Registrarse', url: '/registrar' }, { label: 'Login', url: '/login' });
	}
	return (
		<HeaderNav>
			<NavBrand imgSrc={LogoCeiba} text="Ceiba Software" />
			{usuario.nombre !== '' && <p>Bienvenido: {usuario.nombre}</p>}
			<NavList items={routes} />
		</HeaderNav>
	);
};
