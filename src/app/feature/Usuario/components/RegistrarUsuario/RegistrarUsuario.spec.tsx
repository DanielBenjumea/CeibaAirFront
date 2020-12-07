import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { FormRegistrarusuario } from './RegistrarUsuario';

describe('RegistrarUsuario test', () => {
	let componentWrapper: RenderResult;

	beforeEach(() => {
		componentWrapper = render(<FormRegistrarusuario />);
	});

	it('Should match snapshot', () => {
		expect(componentWrapper.container).toMatchSnapshot();
	});

	it('Should fail on submit all fields missing', async () => {
		const elem = componentWrapper.container;
		const submitButton = elem.querySelector('button[type="submit"]');
		await wait(() => {
			submitButton && fireEvent.click(submitButton);
		});

        const spans = elem.querySelectorAll('span');
        
        expect(spans.length).toBe(2);

		expect(spans[0].textContent).toBe('El campo nombre es requerido.');
		expect(spans[1].textContent).toBe('El campo password es requerido.');
	});
});
