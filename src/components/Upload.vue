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
      v-on:change="handleFiles()"
      color="secondary"
    />
    <v-btn block v-on:click="submitFiles()" color="accent" dark>Upload your files</v-btn>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  name: 'upload',
  data() {
    return {
      pics: [],
      display: ''
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
      this.upload(formData);
      // this.$data.display = this.getImages();
      console.log(this.$data.display);
    },
    upload: function(formData) {
      axios
        .post("http://192.168.1.2:8080/uploadmultiple", formData, {
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

<style lang="scss" scoped>
.upload {
  margin: 2%;
  text-align: center;
  vertical-align: middle;
}
</style>