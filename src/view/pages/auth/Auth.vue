<template>
<v-container fluid class="content">
    <b-row class="p-5" style="background-color:white;">
        <b-col sm="6">
            <v-img src="../../../../public/media/bg/banner1.png" class="serviceImage"></v-img>
            <router-link class="font-weight-bold font-size-3" style="color:#0093E9;font-family:verdana;font-size:200%;font-weight:bold;" :to="{ name: 'banner' }">Language Translation Portal</router-link>

        </b-col>
        <b-col sm="6">
            <div id="kt_login">
                <router-view></router-view>
            </div>
        </b-col>
    </b-row>
</v-container>
</template>

<!-- Load login custom page styles -->

<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import {
    mapState
} from "vuex";

export default {
    name: "auth",
    methods: {},
    computed: {
        ...mapState({
            errors: (state) => state.auth.errors,
        }),
        backgroundImage() {
            return process.env.BASE_URL + "media/bg/bg-5.jpg";
        },
    },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);

}
.row{
  padding: 1em;
  width:90% !important;
  position: absolute; 
  top: 50%; 
  left: 51%; 
  margin-right:-50%;
  transform: translate(-50%, -50%) ;
  border-radius:7px;
}

@media only screen and (max-width: 600px) {
  .content {
  height: 150vh;
}
}
</style>
