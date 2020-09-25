<template>
  <div>
    <!-- <v-card class="overflow-hidden"> -->
    <Landingnav />
    <v-container fluid class="bannerMainContent">
      <v-container class="bannerContent">
        <b-row>
          <b-col sm="5">
            <h1 class="pt-10 bannerTitle">Language Translation Portal</h1>
            <p class="bannerDesc">
              An online web application portal for tanslation different
              documents worlwide.
            </p>
            <div>
              <b-button
                block
                size="lg"
                variant="primary"
                @click="$router.push('postjob')"
                >POST JOB NOW</b-button
              >
              <b-button block size="lg" variant="success" @click="moveToPricing"
                >BECOME A MEMBER</b-button
              >
            </div>
          </b-col>
          <b-col sm="7">
            <div>
              <v-img
                src="../../../public/media/bg/banner1.png"
                class="logo"
              ></v-img>
            </div>
          </b-col>
        </b-row>
      </v-container>
    </v-container>
    <v-container class="bannerSubContent">
      <b-row>
        <b-col sm="6">
          <center>
            <h1 class="serviceTitle">Translation</h1>
            <p class="serviceDesc">
              Translate different kind of document in different kin of languages
            </p>
          </center>
        </b-col>
        <b-col sm="6">
          <div class="jumbotron">
            <v-img
              src="../../../public/media/bg/service1.png"
              class="serviceImage"
            ></v-img>
          </div>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col sm="6">
          <div class="jumbotron">
            <v-img
              src="../../../public/media/bg/service2.png"
              class="serviceImage"
            ></v-img>
          </div>
        </b-col>
        <b-col sm="6">
          <center>
            <h1 class="serviceTitle">Booking</h1>
            <p class="serviceDesc">Book translators and jobs that you want</p>
          </center>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col sm="6">
          <center>
            <h1 class="serviceTitle">Real-Time Communication</h1>
            <p class="serviceDesc">
              Communicate with other people around the world real-time
            </p>
          </center>
        </b-col>
        <b-col sm="6">
          <div class="jumbotron">
            <v-img src="../../../public/media/bg/Service3.png"></v-img>
          </div>
        </b-col>
      </b-row>
      <hr />
      <b-row class="jumbotron">
        <b-row>
          <h1 class="servicesTitle">Available Services</h1>
        </b-row>
        <b-row>
          <b-col sm="4" v-for="service in services" :key="service.name">
            <v-card class="mx-auto services" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1 text--primary"
                    >{{service.name}}</v-list-item-title
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  
                ><v-icon style="font-size:50px">{{service.icon}}</v-icon></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <b-button variant="outline-primary" block @click="selectService(service.name)">Get A Quote</b-button>
              </v-card-actions>
            </v-card>
          </b-col>
        </b-row>
      </b-row>
      <hr />
      <div id="pricing" ref="pricing">
        <Pricing @avail="getData($event)" />
      </div>
    </v-container>
    <KTScrollTop></KTScrollTop>
    <Footer />
  </div>
</template>

<script>
import Landingnav from "./Landingnav";
import KTScrollTop from "@/view/layout/extras/ScrollTop";
import Pricing from "./Pricing.vue";
import Footer from "@/view/layout/footer/Footer";
export default {
  components: {
    KTScrollTop,
    Pricing,
    Footer,
    Landingnav,
  },
  data() {
    return {
      dialog: false,
      searchCategory: ["Job", "Translator"],
      languages: [
        "Chines",
        "Japanes",
        "English",
        "Filipino",
        "Turkish",
        "French",
        "Spanish",
      ],
      services: [
        { name: "Document Translation", icon: "mdi-file-document-outline"},
        { name: "Video Translation", icon: "mdi-video"},
        { name: "E-Learning Translation", icon: "mdi-tablet-cellphone"},
        { name: "Localize Translation", icon: "mdi-home-map-marker"},
        { name: "Certified Translation", icon: "mdi-certificate"},
      ],
    };
  },
  methods: {
    moveToPricing() {
      document.querySelector("#pricing").scrollIntoView({ behavior: "smooth" });
    },
    getData(data) {
      console.log(data);
    },
    selectService(service){
      localStorage.setItem('service', service)
      this.$router.push('postjob')
    }
  },
};
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: -20%;
  left: 10%;
  width: 600px;
}
.bannerContent {
  margin-top: 10%;
}
.bannerTitle {
  font-size: 50px;
  color: rgb(51, 188, 247);
}
.sectionTitle {
  font-size: 40px;
}
.bannerDesc {
  font-size: 20px;
  color: rgb(51, 188, 247);
}
.serviceImage {
  width: 500px;
}
.bannerMainContent {
  // background-image: linear-gradient(to right top, #eebd0b, #a9d146, #61da86, #00dbc1, #0bd6e9);
  height: 100vh;
}
.bannerSubContent {
  margin-top: 5%;
}
.serviceTitle {
  margin-top: 30%;
  font-size: 50px;
}
.serviceDesc {
  font-size: 20px;
}
.servicesTitle {
  font-size: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.services:hover{
  box-shadow: 0px 5px 30px 0px #ccc;
}
@media only screen and (max-width: 600px) {
  .logo {
    width: 300px;
  }
  .bannerContent {
    margin-top: 5%;
  }
  .bannerTitle {
    font-size: 40px;
  }
  .bannerMainContent {
    height: 120vh;
  }
  .serviceTitle {
    font-size: 30px;
  }
}
</style>