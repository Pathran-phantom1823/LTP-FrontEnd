<template>
  <div>
    <v-container class="mt-20">
      <div class="text-center mb-10 mb-lg-20">
        <h6
          class="font-size-h1"
          style="
            color: rgb(51, 188, 247);
            font-family: verdana;
            font-size: 500%;
            font-weight: bold;
          "
        >
          FORGOT PASSWORD
        </h6>
        <p class="text-muted font-weight-semi-bold" style="font-size: 170%">
          Forgot Password? Enter your email address below to begin the reset
          process
        </p>
      </div>

      <!--begin::Form-->
      <div
        role="alert"
        v-bind:class="{ show: errors.length }"
        class="alert fade alert-danger"
      >
        <div class="alert-text" v-for="(error, i) in errors" :key="i">
          {{ error }}
        </div>
      </div>

      <b-form-group
        id="example-input-group-1"
        label
        label-for="example-input-1"
      >
        <b-form-input
          class="form-control form-control-solid h-auto py-6 px-6"
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
          aria-describedby="input-1-live-feedback"
          style="border-color: rgb(51, 188, 247)"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-1-live-feedback"
          v-if="!$v.form.password.required"
          >Password is Required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback
          id="input-1-live-feedback"
          v-if="!$v.form.password.minLength"
          >Password should atleast 6 characters</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label
        label-for="example-input-1"
      >
        <b-form-input
          class="form-control form-control-solid h-auto py-6 px-6"
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.confirmPass.$model"
          :state="validateState('confirmPass')"
          aria-describedby="input-1-live-feedback"
          style="border-color: rgb(51, 188, 247)"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-1-live-feedback"
          v-if="!$v.form.confirmPass.required"
          >Confirm Password is Required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback
          id="input-1-live-feedback"
          v-if="!$v.form.confirmPass.sameAsPassword"
          >Password is not the same</b-form-invalid-feedback
        >
      </b-form-group>
      <div class="form-group">
        <button
          ref="kt_login_signin_submit"
          style="
            background-color: rgb(51, 188, 247);
            border-radius: 7px;
            color: white;
          "
          class="btn btn-primary btn-block font-weight-bold px-9 py-4 my-3 font-size-3"
          type="submit"
          @click="onSubmit"
        >
          SUBMIT
        </button>
      </div>
      <!--begin::Action-->
      <div style="justify-content: center; display: flex">
        <router-link
          :to="{ name: 'login' }"
          class="font-weight-bold font-size-3 ml-2"
          style="color: rgb(51, 188, 247)"
          >Back to Login</router-link
        >
      </div>
      <!--end::Action-->

      <!--end::Form-->
    </v-container>
    <!--end::Signin-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}

.container {
  background-color: white;
  border-radius: 7px;
}

// .login-form{
//   position: relative;
//   left:70%;
//   margin-top:20%;
// }
</style>

<script>
import { mapState } from "vuex";

import { validationMixin } from "vuelidate";
import { sameAs, required, minLength } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
export default {
  mixins: [validationMixin],
  name: "login",
  data() {
    return {
      form: {
        password: "",
        confirmPass: "",
      },
    };
  },
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(6),
      },
      confirmPass: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  mounted() {},
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
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
      const password = this.$v.form.password.$model;

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      ApiService.post("reset-password", {
        email: this.$route.query.email,
        password: password
      }).then(() => {
        // console.log(res);
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );

        Swal.fire({
          title: "Reset Password is Complete",
          text:
            "",
          icon: "success",
          confirmButtonClass: "btn btn-secondary",
        }).then(() => {
            this.$router.push("/login")
        });
      }).catch(() => {
          Swal.fire({
          title: "Network error",
          text: "Please refresh the page or Contact the administrator",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
      });
    },
  },
  // created() {
  //   console.log(this.$route.query.email);
  // },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
};
</script>
