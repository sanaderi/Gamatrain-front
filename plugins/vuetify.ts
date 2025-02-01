import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#FFB300",
            secondary: "#03DAC6",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          }
        },
        dark: {
          colors: {
            surface: "#FFFFFF",
            primary: "#FFB300",
            secondary: "#03DAC6",
            error: "#B00020",
            success: "#4CAF50",
            warning: "#FB8C00",
          }
        },
      },
    },
   })
  app.vueApp.use(vuetify)
})
