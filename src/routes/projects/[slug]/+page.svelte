<script>
	/** @type {import('./$types').PageData} */

	export let data;
	console.log('data', data);
</script>

<div class="p-4">
	<img src="http://localhost:8055/assets/{data.content.main_image}" alt="">
</div>
<h1 class="text-center text-2xl font-bold mb-6">{data.content.title}</h1>
<div class="flex flex-col items-center gap-4">
	{#each data.stats as stat}
		<div class="flex flex-col items-center">
			<p class="uppercase tracking-wide text-sm">{stat.title}</p>
			<p class="text-md font-semibold tracking-tight">{stat.content}</p>
		</div>
	{/each}
</div>
<div>
	<p></p>
	<div>
		<img src="http://localhost:8055/assets/" alt="">
	</div>
</div>
{@html data.content.test}