import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const challenge = defineCollection({
  loader: glob({
    pattern: "**/*.{md, mdx}",
    base: "./src/content/challenge",
  }),
  schema: z.object({
    title: z.string(),
    type: z.array(z.enum(["book", "challenge", "coding"])).min(1),
    status: z.enum(["future", "now", "done"]),
    startedAt: z.string().optional(),
    finishedAt: z.string().optional(),
  }),
});

export const collections = { writing, challenge };
