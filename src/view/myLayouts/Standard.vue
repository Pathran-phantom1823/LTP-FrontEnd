<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" class="nav_bar">
        <b-navbar-brand href="#">
            <h1>L T P</h1>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="pay">Pay</a>
                </v-btn>
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="redirect('/user/feed')">Home</a>
                </v-btn>
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="redirect('/user/job_board')">Jobs</a>
                </v-btn>
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="redirect('/user/booking')">Booking</a>
                </v-btn>
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="redirect('/user/forum')">Forums</a>
                </v-btn>
                <v-btn text>
                    <a class="nav-link text-light navItems" @click="redirect('/user/messenger')">Messenger</a>
                </v-btn>
                <!-- <v-btn text>
                    <a class="nav-link text-light navItems" @click="$router.push('/user/messenger')">Messages</a>
                </v-btn> -->
                <v-btn text>
                    <a class="nav-link navItems" id="notifications"><i class="far fa-bell text-light"></i></a>
                </v-btn>
                <!-- <b-popover target="notifications" triggers="hover" placement="bottom">
                    <div class="card">
                        <div class="card-body">
                            <h5> notifications </h5>
                        </div>
                    </div>
                </b-popover> -->

                <div>
                    <img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" alt="Profile Picture" class="profile" id="profile-popover">
                </div>
                <b-popover target="profile-popover" triggers="hover" placement="bottom">
                    <button class="btn form-control" @click="$router.push('/user/profile')">profile info</button>
                    <button class="btn form-control" @click="onLogout">logout</button>
                </b-popover>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <v-container>
        <router-view></router-view>
    </v-container>
</div>
</template>

<script>
import {
    LOGOUT
} from "@/core/services/store/auth.module";
import {
    mapGetters
} from "vuex";
import ApiService from "@/core/services/api.service";
import HtmlClass from "@/core/services/htmlclass.service";
import {
    ADD_BODY_CLASSNAME,
    REMOVE_BODY_CLASSNAME
} from "@/core/services/store/htmlclass.module.js";
export default {
    data() {
        return {
            userdetails: [{
                name: "Profile"
            }, {
                name: "Logout"
            }]
        };
    },
    beforeMount() {
        this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");
        HtmlClass.init(this.layoutConfig());
    },
    mounted() {
        // check if current user is authenticated
        if (!this.isAuthenticated) {
            this.$router.push({
                name: "login"
            });
        }

        // Simulate the delay page loading
        setTimeout(() => {
            // Remove page loader after some time
            this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
        }, 2000);
    },
    computed: {
        ...mapGetters([
            "isAuthenticated"
        ]),
    },
    methods: {
        redirect(url) {
            if (this.$route.path !== url) {
                this.$router.push(url)
            }
        },
        onLogout() {
            this.$store.dispatch(LOGOUT).then(() => {
                window.location.reload();
                this.$router.push({
                    name: "login",
                });
            });
        },
        // private double price;
        // private String currency;
        // private String method;
        // private String intent;
        // private String description;
        pay() {
            console.log('---paying----');
            ApiService.post("/pay", {
                total: 12.00,
                currency: "USD",
                method: "paypal",
                intent: "SALE", //
                description: "Payment"
            }).then(response => {
                window.location.href = response.data.data[0].url
                console.log(response.data)
            });
        }
    }
};
</script>

<style scoped>
/* .navItems {
    margin-left: 10px;
    margin-right: 10px;
} */

.profile {
    height: 40px;
    width: 40px;
    max-width: 40px;
    max-height: 50px;
    border-radius: 25px;
    cursor: pointer;
}

.nav_bar {
    min-height: 72px !important;
    background: rgb(51, 188, 247) !important;
}

.body {
    background: rgb(240, 240, 240);
    font-family: Poppins, Helvetica, "sans-serif";
}
</style>
