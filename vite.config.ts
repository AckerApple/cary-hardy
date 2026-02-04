import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        admin: resolve(__dirname, 'src/admin.html'),
        meetup: resolve(__dirname, 'src/meetup.html'),
        thankYou: resolve(__dirname, 'src/key-box-patb/thank-you.html'),
        thankYouSandbox: resolve(__dirname, 'src/key-box-patb/thank-you.sandbox.html'),
        keyBoxPatb: resolve(__dirname, 'src/products/key-box-patb-le-only-pickup.html'),
        keyBoxPatbSandbox: resolve(__dirname, 'src/products/key-box-patb-le-only-pickup.sandbox.html'),
      },
    },
  },
})
