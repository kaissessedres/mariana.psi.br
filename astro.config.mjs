import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL pública atual. Trocar quando o domínio próprio (ex.: marianagouvea.psc.br)
  // for configurado na Vercel — isso ajusta og:image, canonical e sitemap.
  site: 'https://marianapsibr.vercel.app',
  integrations: [sitemap()],
});
