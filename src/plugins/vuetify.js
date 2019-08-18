import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: {
      primary: colors.purple,
      secondary: colors.grey.darken1,
      accent: colors.shades.black,
      error: colors.red.accent3,
      anchor: '#8c9eff',
    },
    dark: {
      primary: colors.blue.lighten3,
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});