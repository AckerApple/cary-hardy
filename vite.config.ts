import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        meetup: resolve(__dirname, 'meetup.html'),
      },
    },
  },
})
