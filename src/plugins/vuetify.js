// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // themes: {
      dark: {
        primary: '#263238',
        secondary: '#FB8C00',
        accent: '#64FFDA',
      }
    // }
  }
})