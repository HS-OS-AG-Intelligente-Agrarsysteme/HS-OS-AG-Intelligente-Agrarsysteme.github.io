import { defineCollection, z } from 'astro:content';

// Publications collection (papers, journal articles, conference papers)
const publications = defineCollection({
  type: 'content',
  schema: z.object({
    contentType: z.literal('publication'),
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    date: z.coerce.date(),
    abstract: z.string().optional(),
    doi: z.string().optional(),
    pdfUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
  }),
});

// Theses collection (bachelor, master, phd)
const theses = defineCollection({
  type: 'content',
  schema: z.object({
    contentType: z.literal('thesis'),
    title: z.string(),
    description: z.string(),
    type: z.enum(['bachelor', 'master', 'phd']),
    author: z.string(),
    supervisor: z.string().optional(),
    proposal: z.boolean().default(false),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    abstract: z.string().optional(),
    pdfUrl: z.string().url().optional(),
  }),
});

// Topics collection (research topics)
const topics = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    contentType: z.literal('topic'),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    thumbnail: image().optional(),
    externalUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
  }),
});

export const collections = {
  publications,
  theses,
  topics,
};
