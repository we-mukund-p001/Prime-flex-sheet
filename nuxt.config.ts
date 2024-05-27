// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
    'primeflex/themes/primeone-light.css' ],

  app:{
    head:{
      link:[
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"},
      ],
      bodyAttrs: {
        class: 'font-[inter]'
      },
    },

  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
