<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		// handle trailing slashes, if applicable: e.g., Netlify
		const l = url.pathname.length;

		const stripped = url.pathname[l - 1] == '/' ? url.pathname.slice(0, l - 1) : url.pathname;

		const post = await fetch(`${stripped}.json`).then((res) => res.json());

		if (!post) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import SEO from '$lib/components/seo.svelte';

	export let post;
</script>

<SEO title={post.title} description={post.description} />

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
