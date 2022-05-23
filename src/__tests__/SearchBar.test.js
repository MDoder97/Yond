/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import SearchBar from '../lib/components/SearchBar.svelte';

describe('SearchBar', () => {
	describe('Rendering', () => {
		it('Renders SearchBar successfully', () => {
			render(SearchBar, { props: { searchQuery: '' } });
		});
	});
	describe('Behaviour', () => {
		render(SearchBar, { props: { searchQuery: '' } });
		const searchContainer = screen.getByTestId('search-container');
		const searchInput = screen.getByPlaceholderText('Search');

		it('Hides search icon and shows close icon on input click', async () => {
			await fireEvent.mouseDown(searchContainer);
			expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument();
		});
		it('Shows search icon on input blur', async () => {
			await fireEvent.mouseDown(searchContainer);
			await fireEvent.blur(searchInput);
			expect(screen.queryByTestId('search-icon')).toBeInTheDocument();
		});
		it('Show close icon on input', async () => {
			const value = 'Bri';
			await fireEvent.input(searchInput, { target: { value } });
			expect(screen.queryByTestId('close-icon')).toBeInTheDocument();
		});
		it('Resets search on close icon click', async () => {
			const value = 'Bri';
			await fireEvent.input(searchInput, { target: { value } });
			const closeIcon = screen.queryByTestId('close-icon');
			expect(closeIcon).toBeInTheDocument();
			await fireEvent.click(closeIcon.firstChild);

			expect(searchInput.value).toHaveLength(0);
			expect(screen.queryByTestId('search-icon')).toBeInTheDocument();
		});
	});
});
