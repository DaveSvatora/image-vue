<template>
  <div class="viewImages">
    <div class="getImages">
      <v-btn block v-on:click="getImages()" color="accent">Get Images</v-btn>
    </div>
    <div class="retrievedImages">
      <v-tabs background-color="primary">
        <v-tab v-for="year in years" :key="year.year">{{year.year}}</v-tab>
        <v-tab-item v-for="year in years" :key="year.year">
          <v-tabs background-color="primary">
            <v-tab v-for="month in year.months" :key="month.month">{{month.month}}</v-tab>
            <v-tab-item v-for="month in year.months" :key="month.month">
              <v-tabs background-color="primary">
                <v-tab v-for="day in month.days" :key="day.day">{{day.day}}</v-tab>
                <v-tab-item v-for="day in month.days" :key="day.day">
                  <v-row align="center" class="image-row" justify="center">
                    <img
                      v-for="file in day.filenames"
                      :key="file.url"
                      :alt="file.file"
                      :src="file.url"
                      class="render-image"
                    />
                  </v-row>
                </v-tab-item>
              </v-tabs>
            </v-tab-item>
          </v-tabs>
        </v-tab-item>
      </v-tabs>
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
      // images: [],
      years: []
      // months: [],
      // days: []
    };
  },
  async created() {
    console.log("meow");
    const images = this.getImages();
  },
  methods: {
    getImages: function() {
      var self = this;
      self.years = [];
      axios
        .get("http://192.168.1.2:8080/all")
        .then(function(response) {
          var years = [];
          years.push(JSON.parse(response.data));
          years[0].forEach(year => {
            self.years.push(year);
          });
          console.log(JSON.stringify(self.years));
          return self.years;
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
        .get(JSON.stringify(url))
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