import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vibhutummallapalli.github.io',
  base: '/Homepage',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
