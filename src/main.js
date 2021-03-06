import Vue from "vue";
import 'vuetify/dist/vuetify.min.css';
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
// import MockService from "@/core/mock/mock.service";
import { VERIFY_AUTH } from "@/core/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from "@/core/services/jwt.service";

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios

Vue.config.productionTip = false;


// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { mapGetters } from "vuex";

// API service init
ApiService.init();

//AnimATION
AOS.init()

router.beforeEach((to, from, next) => {
    // Ensure we checked auth before each page load.
    // const test = {
    //     ...mapGetters([
    //     "getInvalid"
    //   ]),
    // }
    Promise.all([store.dispatch(VERIFY_AUTH, {to: to, from: from})]).then(()=>{
        if(JwtService.getToken() && to.path === "/login"){
            next("/" + store.getters.getUserType)
        }else if(JwtService.getToken() && to.path === "/"){
            next("/" + store.getters.getUserType)
        }else if(store.getters.getInvalid){
            next("/error")
        }else{
            next()
        }
    })

    // reset config to initial state
    store.dispatch(RESET_LAYOUT_CONFIG);

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

new Vue({
    created: function() {
        AOS.init()
    },
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount("#app");