/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import UserGroup from '../lib/components/UserGroup.svelte';

describe('UserGroup', () => {
	describe('Rendering', () => {
		it('Renders UserGroup successfully', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			render(UserGroup, {
				props: {
					groupType: 'member',
					users: data.default.slice(0, 1),
					currentPreviewUser: null
				}
			});
		});
	});

	beforeAll(async () => {
		let data = await import('$lib/assets/mocked_data.json');
		render(UserGroup, {
			props: {
				groupType: 'member',
				users: data.default.slice(0, 1),
				currentPreviewUser: null
			}
		});
	});

	describe('Display', () => {
		it('displays first and last name', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			expect(
				screen.queryByText(data.default[0].first_name + ' ' + data.default[0].last_name)
			).toBeInTheDocument();
		});
		it('displays avatar', async () => {
			expect(screen.queryByTestId('avatar')).toBeInTheDocument();
		});
	});
});
