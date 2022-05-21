import { writable } from 'svelte/store';

export const users = writable([]);

export const fetchUsers = async () => {
	let data = await import('$lib/assets/mocked_data.json');
	users.set(data.default);
};
