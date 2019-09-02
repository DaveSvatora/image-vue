import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: colors.blueGrey.darken2, 
        secondary: colors.blueGrey.darken1, 
        accent: colors.orange.darken2, 
      },
      light: {
        primary: colors.blue.darken1, 
        secondary: colors.green.darken2, 
        accent: colors.deepOrange, 
      }      
    },
  },
})