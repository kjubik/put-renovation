<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	$: activeUrl = $page.url.pathname;

	let projects = [];

	onMount(async () => {
		// TODO: update url in fetch request below
		const response = await fetch('http://localhost:8055/items/project_previews?fields=slug,title');
		const data = await response.json();
		projects = data.data;
	});
</script>

<div class="border-b">
	<Navbar>
		<NavBrand href="/">
			<img src="http://localhost:8055/assets/71e9d634-89f4-42a4-8062-aa39aaa4468c" class="me-3 h-12 sm:h-16" alt="PUT Renovation Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PUT Renovation</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl}>
			<NavLi href="/">Strona główna</NavLi>
			<NavLi class="cursor-pointer">
				Projekty<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
			</NavLi>
			<Dropdown class="z-20 w-44">
				{#each projects as project}
				<DropdownItem href="/projects/{project.slug}">{project.title}</DropdownItem>
				{/each}
			</Dropdown>
			<NavLi href="/settings">Sposnorzy</NavLi>
			<NavLi href="/pricing">O Nas</NavLi>
			<NavLi href="/contact">Kontakt</NavLi>
		</NavUl>
	</Navbar>
</div>
