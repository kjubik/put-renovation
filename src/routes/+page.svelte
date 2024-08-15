<script lang="ts">
    import type { PageData } from './$types';
    import type { RecordModel } from 'pocketbase';

    export let data: PageData;
    
    interface customer extends RecordModel {
        name: string,
        likesPizza: boolean
    }

    let customers: customer[] = [];

</script>

<h1 class="text-4xl font-bold">Our Customers</h1>
{#if data.customers.length > 0}
    {#each data.customers as customer}
        <div class="flex gap-2">
            <h2>{customer.name}</h2>
            <p>{customer.likesPizza ? '🍕' : '🥪'}</p>
        </div>
    {/each}
{:else}
    <p>No customers found</p>
{/if}
