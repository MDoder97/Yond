<script>
	import SearchIcon from '../assets/icons/SearchIcon.svelte';
	import CloseIcon from '../assets/icons/CloseIcon.svelte';
	import { fetchUsers, users } from '../../stores/users';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let hovered = false;
	let showSearchIcon = true;
	let searchInput;
	export let searchQuery;

	// fetch users when search is clicked for the first time
	$: if ($users.length === 0 && !showSearchIcon) fetchUsers();

	const closeSearch = () => {
		searchQuery = '';
		showSearchIcon = true;
	};

	const handleBlur = () => {
		if (!searchQuery) {
			showSearchIcon = true;
		}
	};

	const handleActive = () => {
		showSearchIcon = false;
		searchInput.focus();
		dispatch('searchClicked');
	};
</script>

<div
	data-testid="search-container"
	class="container flex items-center border border-gray-300 rounded-md h-12 w-[62rem]"
	on:mousedown={handleActive}
	on:mouseover={() => (hovered = true)}
	on:mouseout={() => (hovered = false)}
>
	{#if showSearchIcon}
		<div data-testid="search-icon" class="absolute p-3 cursor-text">
			<SearchIcon
				strokeClass="{hovered
					? 'stroke-black'
					: 'stroke-gray-400'} transition duration-150 ease-out"
			/>
		</div>
	{/if}
	<input
		on:blur={handleBlur}
		bind:this={searchInput}
		bind:value={searchQuery}
		placeholder="Search"
		class="{hovered ? 'placeholder:text-black' : 'placeholder:text-gray-400'}
			transition duration-100 ease-out
			focus:placeholder:text-transparent
			{showSearchIcon ? 'pl-11' : 'pl-3'} outline-none h-full w-full rounded-md p-0"
	/>
	{#if searchQuery}
		<div data-testid="close-icon">
			<CloseIcon on:click={closeSearch} class="mr-2 cursor-pointer" />
		</div>
	{/if}
</div>
