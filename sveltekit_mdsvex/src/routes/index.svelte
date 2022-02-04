<script context="module">
	const posts = import.meta.glob('./posts/*.svx');

	let body = [];

	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const posts = await Promise.all(body);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>My Site</title>
</svelte:head>

<ul>
	<h1 class="text-center text-xl font-bold">Blog</h1>
	{#each posts as { title, description, slug }}
		<li class="m-4">
			<a sveltekit:prefetch href="posts/{slug}">
				<h2 class="text-lg font-semibold">
					{title}
				</h2>

				<p>
					{description}
				</p>
			</a>
		</li>
	{/each}
</ul>
