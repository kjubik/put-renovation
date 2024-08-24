<script>
	/** @type {import('./$types').PageData} */

	export let data;
	console.log('data', data);
</script>

<section
	id="hero"
	class="flex flex-col justify-between rounded-b-2xl border-b bg-primary-50 px-4 py-6 text-left"
>
	<div class="">
		<h1 class="mb-3 text-3xl font-bold leading-none tracking-tight">{data.content.hero_title}</h1>
		<p class="mb-9 text-sm font-normal text-neutral-500">{data.content.hero_subtitle}</p>
		<div class="flex flex-col justify-between gap-4">
			<a
				href="mailto:your-email@example.com"
				class="inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
			>
				Zostań sponsorem
			</a>
			<a
				href="http://localhost:8055/assets/dd0ba0db-a6a7-4e71-89bb-4cb31d5a2066?download"
				target="_blank"
				class="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-center text-base font-medium text-neutral-900 hover:bg-neutral-200 focus:ring-4 focus:ring-neutral-100"
			>
				Poznaj korzyści
			</a>
		</div>
	</div>
	<div id="main-sponsors" class="mt-12 text-center">
		<h2 class="text-md mb-4 font-semibold uppercase text-neutral-600">Wspierają nas</h2>
		<div class="flex flex-row items-center gap-6">
			{#each data.platinum_sponsors as sponsor}
				<div class="rounded border bg-white shadow">
					<img
						src="http://localhost:8055/assets/{sponsor.logo}"
						alt="{sponsor.name} Logo"
						class="w-52"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="projects" class="px-4 py-12">
	<div class="mb-6 items-start justify-between border-b pb-4 md:flex">
		<div class="max-w-lg">
			<h2 class="text-2xl font-bold text-neutral-800">
				{data.content.projects_title}
			</h2>
			<p class="mt-2 text-neutral-600">
				{data.content.projects_subtitle}
			</p>
		</div>
	</div>
	<div class="flex flex-col gap-8">
		{#each data.project_previews as project}
			<div class="max-w-sm rounded-md border border-neutral-200 bg-white shadow">
				<img class="p-4" src="http://localhost:8055/assets/{project.image}" alt={project.title} />
				<div class="p-5">
					<h3 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900">{project.title}</h3>
					<p class="mb-5 font-normal text-neutral-700">{project.description}</p>
					<a
						href="/projects/{project.slug}"
						class="inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
					>
						Zobacz więcej
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="cta" class="relative bg-primary-700 py-28">
	<div class="relative z-10 mx-auto max-w-screen-xl px-4 text-center md:px-8">
		<div class="max-w-xl md:mx-auto">
			<p class="text-3xl font-semibold text-white sm:text-4xl">
				{data.content.cta_title}
			</p>
			<p class="mt-3 text-blue-100">
				{data.content.cta_subtitle}
			</p>
		</div>
		<div class="mt-8">
			<div class="flex flex-col justify-between gap-4">
				<a
					href="#"
					class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-center text-base font-medium text-neutral-900 hover:bg-neutral-200 focus:ring-4 focus:ring-neutral-100"
				>
					Wesprzyj nas
				</a>
				<a
					href="#"
					class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-inherit px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-blue-100"
				>
					Dołącz do nas
				</a>
			</div>
		</div>
	</div>
	<!-- <div class="absolute top-0 w-full h-full" style="background: linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%);"></div> -->
</section>

<section id="stats" class="py-14">
	<div
		class="mx-auto max-w-screen-xl items-start justify-between gap-x-12 px-4 text-gray-600 md:px-8 lg:flex"
	>
		<div class="sm:hidden lg:block lg:max-w-xl">
			<img
				src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				class="rounded-lg"
				alt=""
			/>
		</div>
		<div class="mt-6 gap-12 sm:mt-0 md:flex lg:block">
			<div class="max-w-2xl">
				<h3 class="text-3xl font-semibold text-gray-800 sm:text-4xl">
					{data.content.stats_title}
				</h3>
				<p class="mt-3 max-w-xl">
					{data.content.stats_subtitle}
				</p>
			</div>
			<div class="mt-6 flex-none md:mt-0 lg:mt-6">
				<ul class="inline-grid grid-cols-2 gap-x-14 gap-y-8">
					{#each data.stats as stat, idx}
						<li key={idx}>
							<h4 class="text-4xl font-semibold text-primary-600">{stat.number}</h4>
							<p class="mt-3 font-medium">{stat.text}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="social-feed" class="pb-12 px-4">
	<div class="flex flex-col gap-8">
		<!-- {#each data.ig_posts as post}
			{@html post.embed}
		{/each} -->
	</div>
</section>
