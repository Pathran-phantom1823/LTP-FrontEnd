<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
        style="padding-bottom: 0px; padding-left: 7px; padding-top: 30px"
      >
        <!--end: Wizard Nav-->
        <!--begin: Wizard Body-->
        <div class="row justify-content-center my-5 px-8 my-lg-5 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <b-card
                  style="
                    width: 15rem;
                    height: 15rem;
                    margin: auto;
                    border-top-width: 0px;
                    border-left-width: 0px;
                    border-top-width: 0px;
                    border-right-width: 0px;
                  "
                  class="mb-2 card-img-input"
                  :img-src="image"
                  alt=""
                  @click="clickFile"
                />
                <input
                  type="file"
                  name="myImage"
                  accept="image/*"
                  @change="handleImageChange"
                  hidden
                  ref="fileBtn"
                />
                <h3 class="mb-10 font-weight-bold text-dark">
                  Personal Information
                </h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Enter Firstname</label
                      ><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="firstname"
                        placeholder="Firstname"
                        v-model="firstname"
                      />
                      <span class="form-text text-muted"
                        >Please enter your firstname</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Enter Lastname</label
                      ><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="lastname"
                        placeholder="Lastname"
                        v-model="lastname"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Lastname</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Email</label><span style="color: red">*</span>
                      <input
                        type="email"
                        class="form-control form-control-solid form-control-lg"
                        name="email"
                        placeholder="Email"
                        v-model="email"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Email</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Enter Age</label><span style="color: red">*</span>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        name="age"
                        placeholder="Age"
                        v-model="age"
                      />
                      <span class="form-text text-muted"
                        >Please enter your age</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Gender</label><span style="color: red">*</span>
                      <select
                        name="gender"
                        class="form-control form-control-solid form-control-lg"
                        :items="genderList"
                        v-model="gender"
                      >
                        <option value="">Select</option>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Phone Number</label
                      ><span style="color: red">*</span>
                      <input
                        type="tel"
                        class="form-control form-control-solid form-control-lg"
                        name="phone"
                        placeholder="+(650)251-53-21"
                        v-model="phonenumber"
                      />
                      <span class="form-text text-muted"
                        >Please Enter your Phone Number</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Enter Birthdate</label
                      ><span style="color: red">*</span>
                      <input
                        type="date"
                        class="form-control form-control-solid form-control-lg"
                        name="birthdate"
                        placeholder="Birthdate"
                        v-model="birthdate"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Birthdate</span
                      >
                    </div>
                  </div>
                </div>

                <h3 class="mb-10 font-weight-bold text-dark">Address</h3>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Postal Code</label
                      ><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="postcode"
                        placeholder="Postcode"
                        v-model="postalcode"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Postal code.</span
                      >
                    </div>
                  </div>

                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>ZipCode</label
                      ><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="postcode"
                        placeholder="Postcode"
                        v-model="zipcode"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Zipcode.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>City</label><span style="color: red">*</span>
                      <v-select
                        label="Select City"
                        outlined
                        :items="cities"
                        v-model="city"
                      ></v-select>
                      <!-- <input type="text" class="form-control form-control-solid form-control-lg" name="city" placeholder="City" :items="cities"
                                            v-model="city" /> -->
                      <span class="form-text text-muted"
                        >Please enter your City.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Street</label><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="street"
                        placeholder="Street"
                        v-model="street"
                      />
                      <span class="form-text text-muted"
                        >Please enter your State.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Country</label><span style="color: red">*</span>
                      <v-select
                        :items="country2"
                        v-model="country"
                        outlined
                        label="Select Country"
                        @change="changedCity($event)"
                      ></v-select>
                      <!-- <select name="country" class="form-control form-control-solid form-control-lg"  :items="country2"
                                             v-model="country"
                                             @change="changedCity($event)">
                                            <option value="">Select</option>
                                        </select> -->
                    </div>
                  </div>
                </div>
              </div>
              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <v-spacer></v-spacer>
                <button
                  class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                  data-wizard-type="action-next"
                  @click.prevent="submit"
                >
                  Submit
                </button>
              </div>
              <!--end: Wizard Actions -->
            </form>
            <!--end: Wizard Form-->
          </div>
        </div>
        <!--end: Wizard Body-->
      </div>
    </div>
    <!--end: Wizard-->
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/pages/wizard/wizard-1.scss";

.card-img-input {
  cursor: pointer;
}
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
import countries from "@/view/pages/countries.json";

export default {
  name: "Wizard-1",
  components: {},
  mounted() {
    this.country2.map((el) => {
      this.country3.push(el);
    });
    this.country2 = Object.keys(this.listOfCountry);
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Wizard",
      },
      {
        title: "Wizard-1",
      },
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true, // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function (/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function (/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  data: () => ({
    file2: [],
    genderList: ["Female", "Male"],
    image:
      "https://vegibit.com/wp-content/uploads/2018/02/VueJS-Image-Upload.png",
    firstname: null,
    lastname: null,
    age: null,
    birthdate: null,
    email: null,
    gender: null,
    phonenumber: null,
    postalcode: null,
    city: null,
    street: null,
    zipcode: null,
    country: null,
    listOfCountry: countries,
    country2: [],
    country3: [],
    cities: [],
  }),
  methods: {
    changedCity(data) {
      // console.log("data", this.country);
      Object.keys(this.listOfCountry).map((el) => {
        if (el === data) {
          Object.keys(this.listOfCountry).filter((el2) => {
            if (el2 === el) {
              this.cities = this.listOfCountry[el2];
              // console.log(this.listOfCountry[el2]);
            }
          });
          // this.cities.push(Object.keys(this.listOfCountry).indexOf(el))
          // console.log("city", );
        }
      });
    },
    clickFile: function () {
      this.$refs.fileBtn.click();
    },

    handleImageChange: function (e) {
      let input = e.target;
      let img = e.target.files[0];
      this.file2 = img;
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
      //   this.image = this.file2;
    },
    submit: function (e) {
      // if (this.firstname === null || this.lastname === null || this.age === null) {

      // } else {

      // }
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);
      console.log("birth", this.birthdate);
      let profileDetails = {
        accountId: userID,
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        birthdate: this.birthdate,
        email: this.email,
        gender: this.gender,
        phonenumber: this.phonenumber,
        postalcode: this.postalcode,
        zipcode: this.zipcode,
        city: this.city,
        country: this.country,
        street: this.street
      };
      e.preventDefault();
      let payload = new FormData();
      payload.append("img", this.file2);
      payload.append("data", JSON.stringify(profileDetails));
      ApiService.post("createAdminProfile", payload)
        .then(() => {
          e.preventDefault();
          Swal.fire({
            title: "",
            text: "Your information has been successfully updated!",
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });
        })
        .catch((e) => {
          console.log(e);
          Swal.fire({
            title: "",
            text: `${e.message}`,
            icon: "error",
            confirmButtonClass: "btn btn-secondary",
          });
        });
    },
  },
};
</script>
