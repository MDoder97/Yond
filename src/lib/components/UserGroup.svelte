<script>
	import Avatar from './Avatar.svelte';
	import { userGroupPluralMapper } from '../helpers/utils';
	import RightIcon from '../assets/icons/RightIcon.svelte';

	export let groupType;
	export let users = [];
	export let currentPreviewUser;
</script>

<div class="text-sm text-yond-gray-500 px-3">
	{userGroupPluralMapper.get(groupType)} ({users.length})
</div>
{#if users.length > 0}
	{#each users as user}
		<div
			on:mouseenter={() => (currentPreviewUser = user)}
			class="flex items-center px-3 py-2.5 rounded-md hover:bg-yond-gray-100 cursor-pointer transition duration-150 ease-out"
		>
			<Avatar
				img={user.avatar}
				membershipType={user.membership}
				size="small"
				active={user.active}
				statusColor={user.active ? 'bg-yond-teal' : 'bg-yond-red'}
			/>
			<span class="px-3">{user.first_name} {user.last_name}</span>
			<span class="text-yond-gray-500">{user.id}</span>
			{#if currentPreviewUser === user}
				<RightIcon class="ml-auto" />
			{/if}
		</div>
	{/each}
{:else}
	<div class="{$$props.class} text-sm bg-white rounded-md text-gray-500 p-3 flex items-center h-12">
		No results found
	</div>
{/if}
