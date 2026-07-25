import { getCollection } from "astro:content";

/**
 * Returns all blog posts, excluding drafts when building for production.
 * Drafts remain visible while running `astro dev` so they can be previewed
 * locally, but are never included in the built/deployed site.
 */
export async function getPublishedPosts() {
    return getCollection("blog", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
}
