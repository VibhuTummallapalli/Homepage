import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vibhutummallapalli.com',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
