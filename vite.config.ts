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
        adminUsers: resolve(__dirname, 'src/admin/user.html'),
        adminMeetingTools: resolve(__dirname, 'src/admin/meeting-tools.html'),
        adminQrMaker: resolve(__dirname, 'src/admin/qr-maker.html'),
        adminCurrentGames: resolve(__dirname, 'src/admin/current-games.html'),
        adminPastOwnedGames: resolve(__dirname, 'src/admin/past-owned-games.html'),
        adminGames: resolve(__dirname, 'src/admin/games.html'),
        adminManufacturers: resolve(__dirname, 'src/admin/manufacturers.html'),
        adminGameRatings: resolve(__dirname, 'src/admin/game-ratings.html'),
        lineup: resolve(__dirname, 'src/lineup.html'),
        ratings: resolve(__dirname, 'src/ratings.html'),
        meetup: resolve(__dirname, 'src/meetup.html'),
        thankYou: resolve(__dirname, 'src/key-box-patb/thank-you.html'),
        thankYouSandbox: resolve(__dirname, 'src/key-box-patb/thank-you.sandbox.html'),
        keyBoxPatb: resolve(__dirname, 'src/products/key-box-patb-le-only-pickup.html'),
        keyBoxPatbSandbox: resolve(__dirname, 'src/products/key-box-patb-le-only-pickup.sandbox.html'),
      },
    },
  },
})
