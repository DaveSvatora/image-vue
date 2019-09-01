<template>
  <div class="bar">
    <v-app-bar dense color="primary">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon v-on:click="toggleTheme()">mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      title: 'Photo App'
    }
  },
  methods: {
    toggleTheme: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  }
};
</script>

<style scoped>
</style>