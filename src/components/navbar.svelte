<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';
	import type { project } from '$lib/types/project';

	$: activeUrl = $page.url.pathname;

    let projects: project[] = [];

    onMount(async () => {
        try {
            const result = await pb.collection('projects').getList();
            console.log('Succes fetching collection', result);
            projects = result.items as project[];
        } catch (error) {
            console.error('Error fetching collection', error)
        }
    });

</script>

<Navbar>
	<NavBrand href="/">
		<img src="/logo.svg" class="me-3 h-6 sm:h-12" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PUT Renovation</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi class="cursor-pointer">
			Dropdown<ChevronDownOutline class="ms-2 inline h-6 w-6 dark:text-white" />
		</NavLi>
		<Dropdown class="z-20 w-44">
            {#each projects as project}
			    <DropdownItem href="/project/{project.custom_id}">{project.title}</DropdownItem>
            {/each}
		</Dropdown>
        <NavLi href="/sponsors">Sponsorzy</NavLi>
		<NavLi href="/about-us">O Nas</NavLi>
		<NavLi href="/contact">Kontakt</NavLi>
	</NavUl>
</Navbar>
