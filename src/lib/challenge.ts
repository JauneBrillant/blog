import type { CollectionEntry } from "astro:content";

export const typeLabel: Record<string, string> = {
    book: "Book",
    challenge: "Challenge",
    coding: "Coding",
};

export function progress(entry: CollectionEntry<"challenge">) {
    const total = entry.data.steps.length;
    const done = entry.data.steps.filter((step) => step.done).length;
    return { done, total };
}
