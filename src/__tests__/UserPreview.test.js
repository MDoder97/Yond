/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import UserPreview from '../lib/components/UserPreview.svelte';

describe('UserPreview', () => {
	describe('Rendering', () => {
		it('Renders UserPreview successfully', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			render(UserPreview, { props: { user: data.default[0] } });
		});
	});
	describe('Display', () => {
		it('displays table properly', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			let user = data.default[0];
			render(UserPreview, { props: { user: user } });

			expect(screen.queryByText(user.membership)).toBeInTheDocument();
			expect(screen.queryByText(user.phone)).toBeInTheDocument();
			expect(screen.queryByText(user.email_address)).toBeInTheDocument();
		});
		it('displays icons properly', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			let user = data.default[0];
			render(UserPreview, { props: { user: user } });
			expect(screen.queryAllByTestId('preview-icon')).toHaveLength(4);
		});
		it('Displays first and last name', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			let user = data.default[0];
			render(UserPreview, { props: { user: user } });
			expect(screen.queryByText(user.first_name + ' ' + user.last_name)).toBeInTheDocument();
		});
		it('Displays id', async () => {
			let data = await import('$lib/assets/mocked_data.json');
			let user = data.default[0];
			render(UserPreview, { props: { user: user } });
			expect(screen.queryByText(user.id)).toBeInTheDocument();
		});
	});
});
