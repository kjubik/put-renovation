<script>
	/** @type {import('./$types').PageData} */

	export let data;
	console.log('data', data);
</script>

<section class="text-left px-4 py-6 bg-primary-50 flex flex-col justify-between rounded-b-2xl">
	<div class="">
		<h1 class="mb-3 text-3xl font-bold tracking-tight leading-none">{data.content.hero_title}</h1>
		<p class="mb-9 text-sm font-normal text-neutral-500">{data.content.hero_subtitle}</p>
		<div class="flex flex-col gap-4 justify-between">
			<a href="mailto:your-email@example.com" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300">
				Zostań sponsorem
			</a>
			<a href="http://localhost:8055/assets/dd0ba0db-a6a7-4e71-89bb-4cb31d5a2066?download" target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
				Poznaj korzyści
			</a>
		</div>
	</div>
	<div class="mt-12 text-center">
		<h2 class="uppercase text-neutral-600 text-md font-semibold mb-4">Wspierają nas</h2>
		<div class="flex flex-row items-center gap-6">
			{#each data.platinum_sponsors as sponsor}
				<div class="rounded bg-white border shadow">
					<img src="http://localhost:8055/assets/{sponsor.logo}" alt="{sponsor.name} Logo" class="w-52">
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="text-left px-4 py-12">
	<div class="">
		<h2 class="mb-3 text-2xl font-semibold leading-tight">Projekty przywracające dawny blask perłom motoryzacji</h2>
		<p class="mb-9 text-sm font-normal text-neutral-500"></p>
	</div>
	<div id="karmann-ghia-div" class="max-w-full bg-white border border-neutral-200 rounded-lg shadow">
		<a href="#" class="">
			<img id="karmann-ghia-img" class="rounded-t-lg p-12 h-80 mx-auto" src="assets/img/PUTR_P_K_01.png" alt="" />
		</a>
		<div class="p-5">
			<a href="#">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900">Volkswagen Karmann Ghia</h5>
			</a>
			<p class="mb-6 font-normal text-neutral-700 dark:text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio officia enim autem, doloribus error.</p>
			<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300">
				Zobacz projekt
				<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
				</svg>
			</a>
		</div>
</section>
