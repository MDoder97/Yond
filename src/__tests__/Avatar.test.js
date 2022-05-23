/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Avatar from '../lib/components/Avatar.svelte';

const avatarProps = {
	props: {
		img: 'Ashley_White.jpg',
		size: 'small',
		membershipType: 'GOLD',
		active: true,
		statusColor: 'bg-yond-teal'
	}
};

describe('Avatar', () => {
	describe('Rendering', () => {
		it('Renders Avatar successfully', () => {
			render(Avatar, avatarProps);
		});
	});
});
