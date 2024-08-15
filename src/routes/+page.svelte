<script lang="ts">
    import { pb } from "$lib/pocketbase";
    import { onMount } from "svelte";
    import type { RecordModel } from 'pocketbase';

    interface customer extends RecordModel {
        name: string,
        likesPizza: boolean
    }

    let customers: customer[] = [];

    onMount(async () => {
        try {
            const result = await pb.collection('customers').getList();
            console.log("Succes fetching collection", result);
            customers = result.items as customer[];
        } catch (error) {
            console.error("Error fetching collection", error);
        }
    })

</script>

<h1 class="text-4xl font-bold">Our Customers</h1>
{#if customers.length > 0}
    {#each customers as customer}
        <div class="flex gap-2">
            <h2>{customer.name}</h2>
            <p>{customer.likesPizza ? '🍕' : '🥪'}</p>
        </div>
    {/each}
{:else}
    <p>No customers found</p>
{/if}
