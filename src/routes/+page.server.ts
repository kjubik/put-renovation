import { pb } from "$lib/pocketbase";
import type { PageServerLoad } from './$types';
import type { RecordModel } from 'pocketbase';

interface MainPage extends RecordModel {
    heading: string,
    subheading: string,
    primary_buton: string,
    secondary_button: string,
}

let content: MainPage;

export const load: PageServerLoad = async () => {
    try {
        const result = await pb.collection('main_page').getList(1, 2);
        console.log("Success fetching collection", result);
        content = result.items[0] as MainPage;
    } catch (error) {
        console.error("Error fetching collection", error);
    }

    return {
        content: content
    }
};