/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Nav from '../lib/components/Nav.svelte';

describe('Navigation', () => {
	describe('Rendering', () => {
		it('Renders Nav successfully', () => {
			render(Nav);
		});
	});
	render(Nav);
	const searchInput = screen.getByPlaceholderText('Search');
	describe('Search query', () => {
		it('Has at most 2 characters', async () => {
			const value = 'Br';
			await fireEvent.input(searchInput, { target: { value } });

			expect(screen.queryByTestId('search-result')).not.toBeInTheDocument();
		});
		it('Has at least 3 characters', async () => {
			const value = 'Bri';
			await fireEvent.input(searchInput, { target: { value } });

			expect(screen.queryByTestId('search-result')).toBeInTheDocument();
		});
	});
});
