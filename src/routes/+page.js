/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		content: await directus.request(readItems('index')),
		platinum_sponsors: await directus.request(readItems('platinum_sponsors')),
		project_previews: await directus.request(readItems('project_previews')),
		stats: await directus.request(readItems('our_stats')),
		ig_posts: await directus.request(readItems('ig_posts', {
			sort: '-date_created',
			limit: 3
		})),
	};
}