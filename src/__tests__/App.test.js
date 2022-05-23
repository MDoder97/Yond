/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import App from '../routes/index.svelte';
import { render } from '@testing-library/svelte';

describe('Rendering', () => {
	it('Renders App successfully', () => {
		render(App);
	});
});
