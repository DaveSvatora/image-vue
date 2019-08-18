<template>
  <v-app>
    <div class="main">
      <div>
        <v-app-bar color="pink" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Photo App</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu left bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </div>

      <v-form ref="form" action="http://localhost:3000/uploadmultiple" enctype="multipart/form-data" method="POST">
         <input type="file" id="pics" name="pics" multiple />
        <v-btn type="submit" color="primary">Upload your files</v-btn> 
      </v-form>
    </div>
  </v-app>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  data() {
    return {
      pics: [],
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>

<style scoped>
form {
  margin: 2%;
  text-align: center;
}
</style>