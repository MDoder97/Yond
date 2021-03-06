export let avatarRingColorMapper = new Map([
	['GOLD', 'border-yellow-400'],
	['SILVER', 'border-gray'],
	['PLATIN', 'border-purple-600'],
	[null, 'border-red-200']
]);

export let userGroupPluralMapper = new Map([
	['member', 'members'],
	['staff', 'staff'],
	['prospect', 'prospects']
]);

export const clickOutside = (node) => {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
