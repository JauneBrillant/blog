import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const learning = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/learning" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["book", "challenge"]).default("book"),
    status: z.enum(["future", "now", "done"]),
    startedAt: z.string().optional(),
    finishedAt: z.string().optional(),
  }),
});

export const collections = { blog, learning };
