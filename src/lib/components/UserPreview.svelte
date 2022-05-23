<script>
	import Avatar from './Avatar.svelte';
	import ChatIcon from '../assets/icons/ChatIcon.svelte';
	import PhoneIcon from '../assets/icons/PhoneIcon.svelte';
	import DumbbellIcon from '../assets/icons/DumbbellIcon.svelte';
	import LocationIcon from '../assets/icons/LocationIcon.svelte';

	export let user;
	let iconActions = [
		[ChatIcon, () => {}],
		[PhoneIcon, () => {}],
		[DumbbellIcon, () => {}],
		[LocationIcon, () => {}]
	];
</script>

<div
	on:mouseenter|stopPropagation
	class="absolute cursor-default z-10 right-0 top-0 bg-white h-[20rem] w-[27rem] rounded-md border flex flex-col items-center justify-around py-2 px-6"
>
	<div class="flex flex-col w-full items-center">
		<Avatar
			img={user.avatar}
			membershipType={user.membership}
			size="medium"
			active={user.active}
			statusColor={user.active ? 'bg-yond-teal' : 'bg-yond-red'}
		/>
		<div class="flex flex-col">
			<span class="pt-2">{user.first_name} {user.last_name}</span>
			<span class="text-yond-gray-500">{user.id}</span>
		</div>
	</div>
	<div class="border-t border-gray-300 w-full" />
	<table class="table-fixed w-full">
		<tr>
			<th class="text-left w-28">Membership</th>
			<td class="font-medium">{user.membership ?? 'PENDING'}</td>
		</tr>
		<tr>
			<th class="text-left w-28">Phone</th>
			<td>{user.phone}</td>
		</tr>
		<tr>
			<th class="text-left w-28">Email</th>
			<td class="text-yond-teal">{user.email_address}</td>
		</tr>
	</table>
	<div class="flex justify-around w-52">
		{#each iconActions as [icon, action]}
			<div
				data-testid="preview-icon"
				on:click={action}
				class="bg-yond-gray-50 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
			>
				<svelte:component this={icon} />
			</div>
		{/each}
	</div>
</div>
