import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: '技术宅的学习日志',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  fonts: {
    provider: 'bunny',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
