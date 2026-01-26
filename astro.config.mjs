// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';

// https://astro.build/config
export default defineConfig({
  site: 'https://hs-os-ag-intelligente-agrarsysteme.github.io',
  integrations: [
    mdx(),
    tailwind(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeCitation,
        {
          bibliography: 'bibliography.bib',
          linkCitations: true,
        },
      ],
    ],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
