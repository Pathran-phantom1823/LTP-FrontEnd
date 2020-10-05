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
                        <b-button block size="lg" variant="primary" @click="postJob">POST JOB NOW</b-button>
                        <b-button block size="lg" variant="success" @click="moveToPricing">BECOME A MEMBER</b-button>
                    </div>
                </b-col>
                <b-col sm="7">
                    <div>
                        <v-img src="../../../public/media/bg/banner1.png" class="logo"></v-img>
                    </div>
                </b-col>
            </b-row>
        </v-container>
    </v-container>
    <v-container fluid class="bannerSubContent">
        <b-row>
            <b-col sm="6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <center>
                    <h1 class="serviceTitle">Translation</h1>
                    <hr class="hrStyle"> 
                    <p class="serviceDesc">
                        Translate different kind of document in different kind of languages
                    </p>
                </center>
            </b-col>
            <b-col sm="6">
                <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <center>
                        <v-img src="../../../public/media/bg/service1.png" ></v-img>
                    </center>
                </div>
            </b-col>
        </b-row>
        <br />
        <b-row>
            <b-col sm="6">
                <div data-aos="fade-right" data-aos-duration="3000">
                    <v-img src="../../../public/media/bg/service2.png" ></v-img>
                </div>
            </b-col>
            <b-col sm="6" data-aos="fade-left" data-aos-duration="3000">
                <center>
                    <h1 class="serviceTitle">Booking</h1>
                    <hr class="hrStyle"> 
                    <p class="serviceDesc">Book translators and jobs that you want</p>
                </center>
            </b-col>
        </b-row>
        <br />
        <b-row>
            <b-col sm="6" data-aos="fade-up" data-aos-duration="3000">
                <center>
                    <h1 class="serviceTitle">Real-Time Communication</h1>
                    <hr class="hrStyle"> 
                    <p class="serviceDesc">
                        Communicate with other people around the world real-time
                    </p>
                </center>
            </b-col>
            <b-col sm="6" data-aos="fade-right" data-aos-duration="3000">
                <div>
                    <v-img src="../../../public/media/bg/service3.png"></v-img>
                </div>
            </b-col>
        </b-row>
        <br />
        <b-row class="servicesList">
            <b-row>
                <h1 class="servicesTitle">Available Services</h1>
            </b-row>
            <b-row>
                <b-col sm="4" v-for="service in services" :key="service.name" data-aos="flip-right" data-aos-duration="3000">
                    <v-card class="mx-auto services" max-width="344" outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text--primary">{{service.name}}</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-avatar tile size="80">
                                <v-icon style="font-size:50px;color:#F2470F">{{service.icon}}</v-icon>
                            </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                            <b-button variant="outline-primary" block @click="selectService(service.name)" icon>
                                Get A Quote (Members Only)</b-button>
                        </v-card-actions>
                    </v-card>
                </b-col>
            </b-row><br><br>
        </b-row>
        <br />
        <div id="pricing" ref="pricing">
            <Pricing @avail="getData($event)" />
        </div>
        <div>
            <v-img src="../../../public/media/bg/footer1.png"></v-img>
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
            services: [{
                    name: "Document Translation",
                    icon: "mdi-file-document-outline"
                },
                {
                    name: "Video Translation",
                    icon: "mdi-video"
                },
                {
                    name: "E-Learning Translation",
                    icon: "mdi-tablet-cellphone"
                },
                {
                    name: "Localize Translation",
                    icon: "mdi-home-map-marker"
                },
                {
                    name: "Certified Translation",
                    icon: "mdi-certificate"
                },
            ],
        };
    },
    computed:{
      backgroundImage() {
        return process.env.BASE_URL + "media/bg/service4.png";
    },
    },
    methods: {
        moveToPricing() {
            document.querySelector("#pricing").scrollIntoView({
                behavior: "smooth"
            });
        },
        getData(data) {
            console.log(data);
        },
        selectService(service) {
            localStorage.setItem('service', service)
            this.$router.push('postjob')
        },
        postJob() {
            localStorage.setItem('service', null)
            localStorage.setItem('method', 'postjob')
            this.$router.push('/postjob')
        },
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
    // color: rgb(51, 188, 247);
    color: white;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
                 0px -5px 35px rgba(255,255,255,0.3);
}

.sectionTitle {
    font-size: 40px;
}

.bannerDesc {
    font-size: 20px;
    // color: rgb(51, 188, 247);
    color: white;
}

.serviceImage {
    width: 500px;
}

.bannerMainContent {
    background: linear-gradient(to bottom, #33bcf7 20%, #ffffff 100%);
    // background-image: linear-gradient(to right top, #eebd0b, #a9d146, #61da86, #00dbc1, #0bd6e9);
    height: 100vh;
}

.bannerSubContent {
    margin-top: 5%;
}

.serviceTitle {
    margin-top: 30%;
    font-size: 50px;
    text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
}

.serviceDesc {
    font-size: 20px;
}

.servicesTitle {
    font-size: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
                 0px -5px 35px rgba(255,255,255,0.3);
    padding-top:40px;
}

.services:hover {
    box-shadow: 0px 5px 30px 0px #ccc;
    border: 2px solid rgb(26, 117, 255);
    -webkit-transform: scale(1);
    transform: scale(1);
}

.services {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    vertical-align: top;
    -webkit-transition: -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
    transition: -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
    transition: transform 0.3s ease-out, filter 0.3s;
    transition: transform 0.3s ease-out, filter 0.3s, -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
}

.servicesList{
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

}

hr.hrStyle{
      border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
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
