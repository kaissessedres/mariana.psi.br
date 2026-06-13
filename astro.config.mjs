import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gouveamariana.com.br',
  integrations: [sitemap()],
});
