const posts = import.meta.glob('./posts/*.svx');

let body = [];

for (const path in posts) {
	body.push(posts[path]().then(({ metadata }) => metadata));
}

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ url, params, fetch }) {
	const posts = await Promise.all(body);

	return {
		posts
	};
}
