import { error } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').LayoutLoad}
 */
export async function load({ url, fetch }) {
	// handle trailing slashes, if applicable: e.g., Netlify
	const l = url.pathname.length;

	const stripped = url.pathname[l - 1] == '/' ? url.pathname.slice(0, l - 1) : url.pathname;

	const post = await fetch(`${stripped}.json`).then((res) => res.json());

	if (!post) {
		throw error(404, 'Post could not be found');
	}

	return {
		post
	};
}
