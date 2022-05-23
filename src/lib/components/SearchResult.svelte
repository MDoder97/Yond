<script>
	import UserGroup from './UserGroup.svelte';
	export let searchedUsers = [];
	let userListMapper = {};
	let currentPreviewUser = null;

	$: parseUserTypes(searchedUsers);

	const parseUserTypes = (searchedUsers) => {
		userListMapper.member = [];
		userListMapper.staff = [];
		userListMapper.prospect = [];
		for (let user of searchedUsers) {
			if (user.relationship in userListMapper) {
				userListMapper[user.relationship].push(user);
			}
		}
		userListMapper = userListMapper;
	};
</script>

<div
	data-testid="search-result"
	class="{$$props.class} bg-white border border-gray-300 rounded-md w-[58rem]"
>
	<div class="flex">
		<div class="pt-2.5 grow">
			{#each Object.entries(userListMapper) as [groupType, users]}
				<UserGroup bind:currentPreviewUser {groupType} {users} />
			{/each}
		</div>
	</div>
</div>
