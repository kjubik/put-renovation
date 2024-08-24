/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
    
    const [page] = await directus.request(readItems('project_page', {
        filter: {
            slug: {
                _eq: params.slug
            }
        }
    }));

    return {
        content: page,
    };
}