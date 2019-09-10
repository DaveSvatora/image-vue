<template>
  <div class="viewImages">
    <div class="getImages">
      <v-btn block v-on:click="getImages()" color="accent">Get Images</v-btn>
    </div>
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
                  <v-card v-for="file in day.filenames" :key="file.url" outlined tile>
                    <v-img :alt="file.file" :src="file.url" class="render-image" />
                    <v-card-actions>
                      <v-btn icon color="accent" @click="download(file.fullUrl, file.file)">
                        <v-icon>mdi-cloud-download-outline</v-icon>
                      </v-btn>
                      <v-btn icon :href="file.fullUrl" color="accent">
                        <v-icon>mdi-fullscreen</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-tab-item>
            </v-tabs>
          </v-tab-item>
        </v-tabs>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  name: "viewImages",
  data() {
    return {
      years: []
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
          return self.years;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getImage: function(url) {
      axios
        .get(JSON.stringify(url))
        .then(function(res) {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    download: function(url, name) {
      axios({
        method: "get",
        url: url,
        responseType: "arraybuffer"
      })
        .then(response => {
          let blob = new Blob([response.data], { type: "application/png" });
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = name;
          link.click();
        })
        .catch(() => console.log("error occured"));
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
.getImages {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: center;
  vertical-align: middle;
}
</style>