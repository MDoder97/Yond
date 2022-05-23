/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import SearchResult from '../lib/components/SearchResult.svelte';

describe('SearchResult', () => {
	describe('Rendering', () => {
		it('Renders SearchResult successfully', () => {
			render(SearchResult, { props: { searchedUsers: [] } });
		});
	});
	describe('Display', () => {
		it('Found result in all groups', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			render(SearchResult, { props: { searchedUsers: data.default.slice(0, 3) } });
			expect(screen.queryAllByTestId('result-found')).toHaveLength(3);
		});
		it('Found members and staff', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			render(SearchResult, { props: { searchedUsers: data.default.slice(0, 2) } });
			expect(screen.queryAllByTestId('result-found')).toHaveLength(2);
			expect(screen.queryAllByText('No results found')).toHaveLength(1);
		});
		it('Found members', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			render(SearchResult, { props: { searchedUsers: data.default.slice(0, 1) } });
			expect(screen.queryAllByTestId('result-found')).toHaveLength(1);
			expect(screen.queryAllByText('No results found')).toHaveLength(2);
		});
	});
});
