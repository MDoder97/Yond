<script>
	import HamburgerMenuIcon from '../assets/icons/HamburgerMenuIcon.svelte';
	import YondIcon from '../assets/icons/YondIcon.svelte';
	import NotificationIcon from '../assets/icons/NotificationIcon.svelte';
	import SearchBar from './SearchBar.svelte';
	import Avatar from './Avatar.svelte';
	import SearchResult from './SearchResult.svelte';
	import { users } from '../../stores/users';
	import { clickOutside } from '../helpers/utils';

	let searchQuery = '';
	let searchedUsers = null;

	$: handleSearchQuery(searchQuery);

	const handleSearchQuery = () => {
		if (searchQuery.length >= 3) {
			filterUsers();
			return;
		}
		searchedUsers = null;
	};

	const filterUsers = () => {
		searchedUsers = $users.filter(
			(user) =>
				user.email_address.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
				user.id.startsWith(searchQuery)
		);
	};
</script>

<div class="flex justify-between items-center w-full h-20 bg-white py-4">
	<div class="w-36 flex justify-between items-center mx-12">
		<HamburgerMenuIcon class="cursor-pointer" />
		<YondIcon class="cursor-pointer" />
	</div>
	<div use:clickOutside on:clickOutside={() => (searchedUsers = null)}>
		<SearchBar on:searchClicked={handleSearchQuery} bind:searchQuery />
		{#if searchedUsers}
			<SearchResult bind:searchedUsers class="absolute" />
		{/if}
	</div>

	<div class="w-28 flex justify-between items-center mx-12">
		<NotificationIcon class="cursor-pointer" />
		<Avatar img={'Ashley_White.jpg'} />
	</div>
</div>
