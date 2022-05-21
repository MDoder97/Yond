<script>
	import UserGroup from './UserGroup.svelte';
	import UserPreview from './UserPreview.svelte';
	export let searchedUsers = [];
	let userListMapper = {};
	let currentPreviewUser = null;

	$: parseUsers(searchedUsers);

	const parseUsers = (searchedUsers) => {
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

<div class="{$$props.class} bg-white border border-gray-300 rounded-md w-[62rem]">
	<div class="flex">
		<div class="pt-2.5 grow">
			{#each Object.entries(userListMapper) as [groupType, users]}
				<UserGroup bind:currentPreviewUser {groupType} {users} />
			{/each}
		</div>
		{#if currentPreviewUser}
			<UserPreview user={currentPreviewUser} listLength={searchedUsers.length} />
		{/if}
	</div>
</div>
