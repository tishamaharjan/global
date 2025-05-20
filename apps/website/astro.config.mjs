// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; 
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
   adapter: vercel({}),
  vite: {
      plugins: [tailwindcss()]
	},

  integrations: [react()]
});