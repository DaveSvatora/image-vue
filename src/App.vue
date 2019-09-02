<template>
  <v-app>
    <bar></bar>
    <upload></upload>
    <viewImages></viewImages>
  </v-app>
</template>

<script>
/* eslint-disable */

import Bar from "./components/Bar";
import Upload from "./components/Upload";
import ViewImages from "./components/ViewImages";

export default {
  name: "app",
  components: {
    Bar,
    Upload,
    ViewImages
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped>
</style>