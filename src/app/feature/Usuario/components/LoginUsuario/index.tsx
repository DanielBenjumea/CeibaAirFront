import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { FlexContainer, Form, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { Input } from 'app/shared/components/Input';
import { Usuario } from '../../models/Usuario';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

interface FormValues {
	nombre: string;
	clave: string;
}

interface FormLoginUsuarioProp {
	onSubmit: (payload: Usuario) => any;
	usuario: Usuario;
}

const validationSchema = Yup.object().shape<FormValues>({
	nombre: Yup.string().required('El campo nombre es requerido.'),
	clave: Yup.string().required('El campo password es requerido.')
});

export const FormLoginUsuario: React.FC<FormLoginUsuarioProp> = ({ usuario, onSubmit }) => {
	const history = useHistory();

	const initialValues = {
		nombre: '',
		clave: ''
	};

	const handleSubmit = (values: FormValues) => {
		onSubmit({
			nombre: values.nombre,
			clave: values.clave
		});

		history.push('/');
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit
	});

	return (
		<FlexContainer>
			<Form onSubmit={formik.handleSubmit}>
				<h2>Iniciar Sesión</h2>
				<Input
					name="nombre"
					placeholder="Nombre de usuario"
					value={formik.values.nombre}
					onChange={formik.handleChange}
				/>
				{formik.touched.nombre && formik.errors.nombre && <SpanError>{formik.errors.nombre}</SpanError>}
				<Input
					name="clave"
					placeholder="Password"
					type="password"
					value={formik.values.clave}
					onChange={formik.handleChange}
				/>
				{formik.touched.clave && formik.errors.clave && <SpanError>{formik.errors.clave}</SpanError>}

				<Button type="submit">Iniciar Sesión</Button>
			</Form>
		</FlexContainer>
	);
};

FormLoginUsuario.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
