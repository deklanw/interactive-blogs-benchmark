<script>
	import SEO from '$lib/components/seo.svelte';

	export let data;
</script>

<SEO title={data.post.title} description={data.post.description} />

<article class="blogpost">
	<slot />
</article>

<style>
	.blogpost :global(h1) {
		@apply font-bold;
		@apply text-lg;
		@apply my-4;
	}

	.blogpost :global(h2) {
		@apply font-semibold;
		@apply text-lg;
		@apply my-2;
	}

	.blogpost :global(ul) {
		@apply list-disc;
		@apply mx-10;
		@apply my-2;
	}

	.blogpost :global(ol) {
		@apply list-decimal;
		@apply mx-10;
		@apply my-2;
	}

	.blogpost :global(blockquote) {
		@apply p-4;
		@apply italic;
		@apply border-l-4;
	}
	.blogpost :global(a) {
		@apply text-blue-800;
	}

	.blogpost :global(p) {
		@apply my-2;
	}
</style>
