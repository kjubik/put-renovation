/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		content: await directus.request(readItems('index')),
		platinum_sponsors: await directus.request(readItems('platinum_sponsors')),
		project_previews: await directus.request(readItems('index/project_previews')),
	};
}