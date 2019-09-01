<template>
  <div class="viewImages">
    <div class="getImages">
      <v-btn block v-on:click="getImages()" color="accent">Get Images</v-btn>
    </div>
    <div class="retrievedImages">
      <v-row align="center" class="image-row" justify="center">
        <img
          v-for="image in images"
          :key="image.url"
          :alt="image.file"
          :src="image.url"
          class="render-image"
        />
      </v-row>
    </div>
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
  async created() {
    console.log("meow");
    const images = this.getImages();
  },
  methods: {
    getImages: function() {
      var self = this;
      self.images = [];
      axios
        .get("http://192.168.1.2:8080/all")
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
      console.log(url);
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

<style scoped>
.render-image {
  max-width: 200px;
  max-height: 200px;
  margin: 1%;
}
.image-row {
  margin-bottom: 10px;
}
.getImages,
.retrievedImages {
  margin: 2%;
  text-align: center;
  vertical-align: middle;
}
</style>