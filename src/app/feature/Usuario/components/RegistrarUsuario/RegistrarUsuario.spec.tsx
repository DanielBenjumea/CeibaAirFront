import * as React from 'react';
import { fireEvent, render, RenderResult, wait } from '@testing-library/react';
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

        console.log(spans);
        
        expect(spans.length).toBe(2);
	});
});
