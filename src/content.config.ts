import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    location: z.string().optional(),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    upcoming: z.boolean().default(false),
  }),
});

export const collections = { blog, talks };
