import * as React from 'react';
import * as Yup from 'yup';
import { FlexContainer, Form, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { Input } from 'app/shared/components/Input';
import Swal from 'sweetalert2';
import { axiosIntance } from 'app/core/config/AxiosConfig';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

interface FormValues {
	nombre: string;
	clave: string;
}

const validationSchema = Yup.object().shape<FormValues>({
	nombre: Yup.string().required('El campo nombre es requerido.'),
	clave: Yup.string().required('El campo password es requerido.')
});

export const FormRegistrarusuario = () => {
	const history = useHistory();
	const initialValues = {
		nombre: '',
		clave: ''
	};

	const handleSubmit = async (values: FormValues) => {
		try {
			const response = await axiosIntance.post('/usuarios', {
				nombre: values.nombre,
				clave: values.clave,
				fechaCreacion: new Date()
			});

			if (response.status === 201) {
				Swal.fire(
					'Usuario Creado',
					'Su usuario fue creado satisfactoriamente / será redirigido a la pantalla inicial',
					'success'
				).then(() => {
					history.push('/');
				});
			}
		} catch (error) {
			Swal.fire(
				'Error al crear usuario',
				'Nombre de usuario ya existe',
				'error'
			);
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit
	});

	return (
		<FlexContainer>
			<Form onSubmit={formik.handleSubmit}>
				<h2>Registrar usuario</h2>
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

				<Button type="submit">Registrar</Button>
			</Form>
		</FlexContainer>
	);
};
