import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/now" }),
  schema: z.object({}),
});

const roadmap = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/roadmap" }),
  schema: z.object({}),
});

export const collections = { blog, now, roadmap };
