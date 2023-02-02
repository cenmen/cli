import { resolve } from 'pathe';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: '应用标题',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: '应用描述' },
      ],
    },
  },
  srcDir: 'src/',
  alias: {
    '@': resolve(__dirname, './src/'),
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-lodash'],
  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile:
      process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'] : ['@juggle/resize-observer'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  lodash: {
    prefix: '_',
    prefixSkip: false,
    upperAfterPrefix: false,
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : [],
    },
  },
});
