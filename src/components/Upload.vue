<template>
  <div class="upload">
    <v-file-input
      v-model="pics"
      id="pics"
      name="pics"
      accept="image/png, image/jpeg, image/bmp"
      multiple
      chips
      prepend-icon="mdi-camera"
      color="secondary"
      label="Select Photos to Upload"
    />
    <v-btn
      block
      v-on:click="submitFiles()"
      v-model="loading"
      v-bind="options"
      color="secondary"
    >Upload your files</v-btn>

    <v-snackbar v-model="snackbar" top>
      {{ snacktext }}
      <v-btn color="accent" text top @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { setTimeout } from "timers";
/* eslint-disable */
const axios = require("axios");
export default {
  name: "upload",
  computed: {
    options() {
      const options = {
        loading: this.loading
      };
      if (this.type) {
        for (const type of this.type) options[type] = true;
      }
      return options;
    }
  },
  data() {
    return {
      pics: [],
      loading: false,
      display: "",
      snackbar: false,
      snacktext: ""
    };
  },
  methods: {
    eatasnack: function(text) {
      console.log(text);
      this.snacktext = text;
      this.snackbar = !this.snackbar;
    },
    sleep: function(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    submitFiles: function(event) {
      if (this.pics.length > 0) {
        let formData = new FormData();
        this.pics.forEach(pic => {
          formData.append("pics", pic);
        });
        this.upload(formData);
      } else {
        this.loading = true;
        this.eatasnack("Select images to upload first");
        this.sleep(500).then(() => {
          this.loading = false;
        });
      }
    },
    upload: function(formData) {
      this.loading = true;
      axios
        .post("http://192.168.1.2:8080/uploadmultiple", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
          window.location.reload();
        })
        .catch(function() {
          console.log("FAIL!!");
        });
      this.eatasnack("Success");
    }
  }
};
</script>

<style lang="scss" scoped>
.upload {
  margin-top: 1%;
  margin-left: 2%;
  margin-right: 2%;
  text-align: center;
  vertical-align: middle;
}
</style>