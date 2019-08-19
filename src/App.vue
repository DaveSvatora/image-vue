<template>
  <v-app>
    <div class="main">
      <div>
        <v-app-bar color="primary" dark>
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
      <div class="upload-container">
        <v-file-input
          v-model="pics"
          id="pics"
          name="pics"
          multiple
          chips
          v-on:change="handleFiles()"
        />
        <v-btn v-on:click="submitFiles()" color="primary">Upload your files</v-btn>
      </div>
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
  },
  methods: {
    handleFiles: function(event) {
      const fileList = this.pics; /* now you can work with the file list */
      fileList.forEach(element => {
        console.log(element.name);
      });
    },
    submitFiles: function(event) {
      let formData = new FormData();
      this.pics.forEach(pic => {
        formData.append("pics", pic);
      });
      // for (var i = 0; i < this.pics.length; i++) {
      //   formData.append("pics", this.pics[i]);
      // }
      axios
        .post("http://localhost:3000/uploadmultiple", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>

<style scoped>
.upload-container {
  margin: 2%;
  text-align: center;
  vertical-align: middle;
}
</style>