import { json } from '@sveltejs/kit';
import { slugFromPath } from '$lib/util';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ params }) {
    const modules = import.meta.glob(`../**/*.{md,svx,svelte.md}`);

    let match;
    for (const [path, resolver] of Object.entries(modules)) {
        if (slugFromPath(path) === params.slug) {
            match = [path, resolver];
            break;
        }
    }

    if (!match) {
        return new Response(undefined, { status: 404 });
    }

    const post = await match[1]();
    return json(post.metadata);
}
