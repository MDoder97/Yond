<script>
	import { avatarRingColorMapper } from '../../helpers/utils';
	import { onMount } from 'svelte';
	export let img;
	export let size = 'small';
	export let membershipType = null;
	export let active = false;
	export let statusColor = 'bg-yond-red';

	let statusSize = {};
	let imgSize = '';
	let imageLocation = `src/lib/assets/images/profile_pics/${size}/`;

	onMount(() => {
		statusSize.height = size === 'small' ? 'h-2.5' : 'h-4';
		statusSize.width = size === 'small' ? 'w-2.5' : 'w-4';
		statusSize.border = size === 'small' ? 'border-1.5' : 'border-2';
		imgSize = size === 'small' ? 'w-8' : 'w-14';
	});
</script>

<div data-testid="avatar" class="relative cursor-pointer {imgSize}">
	<img
		class="{imgSize} {avatarRingColorMapper.get(membershipType)} border rounded-full p-px"
		src={imageLocation + img}
		alt="Avatar"
	/>
	<div
		class="absolute right-0 bottom-0 {statusSize.width} {statusSize.height} border {statusSize.border} border-white rounded-full {statusColor}"
	/>
</div>
