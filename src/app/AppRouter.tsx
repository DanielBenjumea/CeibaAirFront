import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FooterComponent } from './shared/components/Footer/Footer';
import { FormRegistrarusuario } from './feature/Usuario/components/RegistrarUsuario/RegistrarUsuario';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { ProveedorLoginUsuario } from './feature/Usuario/hoc/ProveedorLoginUsuario';
import { ProveedorNavigationHeader } from './shared/components/NavigationHeader/NavList/hoc/NavListProvider';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<ProveedorNavigationHeader />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/home" component={HomeRouter} />
				<Route path="/productos" component={ProductoRouter} />
				<Route path="/registrar" component={FormRegistrarusuario} />
				<Route path="/login" component={ProveedorLoginUsuario} />
			</Switch>
			<FooterComponent />
		</BrowserRouter>
	);
};
