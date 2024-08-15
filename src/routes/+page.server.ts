import { pb } from "$lib/pocketbase";
import type { PageServerLoad } from './$types';
import type { RecordModel } from 'pocketbase';

interface Customer extends RecordModel {
    name: string;
    likesPizza: boolean;
}

let customers: Customer[] = [];

export const load: PageServerLoad = async () => {
    try {
        const result = await pb.collection('customers').getList();
        console.log("Success fetching collection", result);
        customers = result.items as Customer[];
    } catch (error) {
        console.error("Error fetching collection", error);
    }

    return {
        customers: customers,
    }
};