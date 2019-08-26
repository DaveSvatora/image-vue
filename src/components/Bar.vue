<template>
  <div class="bar">
    <v-app-bar dense color="primary">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <div class="flex-grow-1"></div>
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
  }
};
</script>

<style>
</style>