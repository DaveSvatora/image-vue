<template>
  <div class="viewImages" dark>
    <v-btn v-on:click="getImages()">Get Images</v-btn>

    <v-row align="center" justify="center" v-for="image in images" :key="image.file" :alt="image.file">
      <img :src="image.url" max-height="100" max-width="100"/>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  name: "viewImages",
  data() {
    return {
      images: []
    };
  },
  methods: {
    getImages: function() {
      var self = this;
      self.images = [];
      axios
        .get("http://192.168.1.2:3000/all")
        .then(function(response) {
          var images = [];
          images.push(JSON.parse(response.data));
          // console.log(images[0]);
          // self.images = images[0];
          // self.images = JSON.parse(response.data[0])
          images[0].forEach(element => {
            // self.images.push(self.getImage(element.url));
            self.images.push(element);
            console.log(JSON.stringify(element));
          });
          return self.images;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    },
    getImage: function(url) {
      console.log(url)
      axios
        .get(url)
        .then(function(res) {
          return res.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>