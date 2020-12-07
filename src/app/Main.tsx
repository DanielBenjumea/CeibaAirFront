import * as React from 'react';
import { DivItem, FlexContainer } from './shared/components/Layout/styles';
import { Layout } from './shared/components/Layout';
import { ProveedorListarProductos } from './feature/Vuelo/hoc/ProveedorListaVuelos';
import logoCeiba from 'assets/img/logo-ceiba.png';

const MainPage = () => (
	<Layout title="CeibaAir | Inicio" description="Página inicial">
		<FlexContainer>
			<DivItem>
				<p>Vuela con CeibaAir</p>
				<img src={logoCeiba} alt="Logo ceiba" />
			</DivItem>
		</FlexContainer>
    <ProveedorListarProductos />
	</Layout>
);

export default MainPage;
