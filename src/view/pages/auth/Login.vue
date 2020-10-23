<template>
<div>
    <!--begin::Content header-->
    <div class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
        <span class="font-weight-bold font-size-3 text-dark-60">Don't have an account yet?</span>
        <router-link class="font-weight-bold font-size-3 ml-2" style="color:#0093E9" :to="{ name: 'register' }">Sign Up!</router-link>
    </div>
    <!--end::Content header-->

    <!--begin::Signin-->
    <v-container class="mt-20">
        <div class="text-center mb-10 mb-lg-20">
            <h3 class="font-size-h1">Sign In</h3>
            <p class="text-muted font-weight-semi-bold">Enter your username and password</p>
        </div>

        <!--begin::Form-->
        <b-form class="form" @submit.stop.prevent="onSubmit">

            <div role="alert" v-if="errors === null" class="alert fade alert-danger">
                <div class="alert-text">{{ errors }}</div>
            </div>

            <b-form-group id="example-input-group-1" label label-for="example-input-1">
                <b-form-input class="form-control form-control-solid h-auto py-5 px-6" id="example-input-1" name="example-input-1" v-model="$v.form.username.$model" :state="validateState('username')" aria-describedby="input-1-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="input-1-live-feedback">username is required and a valid username address.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="example-input-group-2" label label-for="example-input-2">
                <b-input-group>
                    <b-form-input class="form-control form-control-solid h-auto py-5 px-6" :type="showPass === false ? 'text' : 'password'" id="example-input-2" name="example-input-2" v-model="$v.form.password.$model" :state="validateState('password')" aria-describedby="input-2-live-feedback"></b-form-input>
                    <b-input-group-append>
                        <b-button @click="showPass = !showPass"><i :class="showPass === false ? 'fa fa-eye' : 'fa fa-eye-slash'"></i></b-button>
                    </b-input-group-append>
                </b-input-group>

                <b-form-invalid-feedback id="input-2-live-feedback">Password is required.</b-form-invalid-feedback>
            </b-form-group>

            <!--begin::Action-->
            <div class="form-group d-flex flex-wrap justify-content-between align-items-center">
                <a @click="$router.push('/forgotpass')" class="text-dark-60 text-hover-primary my-3 mr-2" id="kt_login_forgot">Forgot Password ?</a>
                <button ref="kt_login_signin_submit" class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3">Sign In</button>
            </div>
            <!--end::Action-->
        </b-form>
        <!--end::Form-->
    </v-container>
    <!--end::Signin-->
</div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
    padding-right: 3.5rem !important;
}

// .login-form{
//   position: relative;
//   left:70%;
//   margin-top:20%;
// }
</style>

<script>
// import {
//     mapState
// } from "vuex";
import {
    LOGIN,
    LOGOUT
} from "@/core/services/store/auth.module";

import {
    validationMixin
} from "vuelidate";
import {
    minLength,
    required
} from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    name: "login",
    data() {
        return {
            errors: null,
            // Remove this dummy login info
            form: {
                username: "admin@demo.com",
                password: "demo",
            },
            showPass: true
        };
    },
    validations: {
        form: {
            username: {
                required,
                // username,
            },
            password: {
                required,
                minLength: minLength(3),
            },
        },
    },
    methods: {
        validateState(name) {
            const {
                $dirty,
                $error
            } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                username: null,
                password: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            const username = this.$v.form.username.$model;
            const password = this.$v.form.password.$model;

            // clear existing errors
            this.$store.dispatch(LOGOUT);

            // set spinner to submit button
            const submitButton = this.$refs["kt_login_signin_submit"];
            submitButton.classList.add("spinner", "spinner-light", "spinner-right");

            // dummy delay
            setTimeout(() => {
                // send login request
                this.$store
                    .dispatch(LOGIN, {
                        username,
                        password
                    })
                    // go to which page after successfully login
                    .then(() => this.$router.push({
                        name: "dashboard"
                    })).catch(() => {
                        this.errors = "Network Problem Please Reload the page"
                    });

                submitButton.classList.remove(
                    "spinner",
                    "spinner-light",
                    "spinner-right"
                );
            }, 2000);
        },
    },
    // computed: {
    //     ...mapState({
    //         errors: (state) => state.auth.errors,
    //     }),
    // },
};
</script>
