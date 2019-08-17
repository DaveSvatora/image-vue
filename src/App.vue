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
      <div class="container">
        <!-- <v-form ref="form" enctype="multipart/form-data"> -->
        <v-file-input
          v-model="files"
          chips
          clearable
          outlined
          show-size
          clear-icon="mdi-close"
          prepend-icon="mdi-camera"
          label="Select photos"
          multiple
          required
          v-on:change="handleUploads()"
        ></v-file-input>

        <v-btn v-on:click="upload()" block large outlined color="teal">Upload</v-btn>
        <!-- </v-form> -->
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
      files: [],
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  methods: {
    upload() {
      let formData = new FormData();
      // alert(this.files.length);
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        // alert(file.name);
        formData.append("pics[" + i + "]", file);
      }

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
      // alert("upload meow");
    },
    handleUploads() {
      this.files.forEach(element => {
        // console.log(element.name);
      });
      console.log(this.files.length);
      // alert("handlingUpload meow");
    }
  }
};
</script>

<style scoped>
form {
  margin: 2%;
  text-align: center;
}
</style>