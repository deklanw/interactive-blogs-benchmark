<script>
	export let data;
</script>

<svelte:head>
	<title>My Site</title>
</svelte:head>

<ul>
	<h1 class="text-center text-xl font-bold">Blog</h1>
	{#each data.posts as { title, description, slug }}
		<li class="m-4">
			<a data-sveltekit-prefetch href="posts/{slug}">
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
