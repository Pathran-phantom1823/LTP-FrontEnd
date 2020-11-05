<template>
  <div class="card card-custom">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="red"
      elevation="24"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
        style="padding-bottom:0px;padding-left:7px;padding-top:68px"
      >
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-label">
                <i class="wizard-icon flaticon-information"></i>
                <h3 class="wizard-title">1. Information</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-bus-stop"></i>
                <h3 class="wizard-title">2. Address</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">3. Translations</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-responsive"></i>
                <h3 class="wizard-title">4. Services</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-calendar"></i>
                <h3 class="wizard-title">5. Availability</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->
        <!--begin: Wizard Body-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-12">
          <div class="col-xl-12">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <b-card
                  style="width: 15rem;height:15rem;margin:auto;border-top-width:0px;border-left-width:0px;border-top-width:0px;border-right-width:0px;"
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
                      <v-text-field
                        label="Enter Firstname"
                        outlined
                        v-model="firstname"
                        required
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        label="Enter Lastname"
                        outlined
                        v-model="lastname"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter Age"
                        outlined
                        v-model="age"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="date"
                        label="Enter Birthdate"
                        outlined
                        v-model="birthdate"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="text"
                        label="Enter Email"
                        outlined
                        v-model="email"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-select
                        :items="genderList"
                        outlined
                        v-model="gender"
                        label="Enter Gender"
                      >
                      </v-select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="tel"
                        label="Enter Phonenumber"
                        outlined
                        v-model="phonenumber"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter Pricing"
                        outlined
                        v-model="pricing"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">
                  Home Address
                </h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter PostalCode"
                        outlined
                        v-model="postalcode"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter Zipcode"
                        outlined
                        v-model="zipcode"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="form-group">
                      <v-select
                        label="Select Country"
                        outlined
                        :items="country2"
                        v-model="country"
                        @change="changedCity($event)"
                      ></v-select>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="text"
                        label="Enter Street"
                        outlined
                        v-model="street"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-select
                        label="Select City"
                        outlined
                        :items="cities"
                        v-model="city"
                      ></v-select>
                    </div>
                  </div>
                </div>
                <h3 class="mb-10 font-weight-bold text-dark">
                  School
                </h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="text"
                        label="Enter School Name"
                        outlined
                        v-model="schoolname"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter School Year"
                        outlined
                        v-model="schoolyear"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter School Postalcode"
                        outlined
                        v-model="schoolpostalcode"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="number"
                        label="Enter School Zipcode"
                        outlined
                        v-model="schoolzipcode"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="form-group">
                      <v-select
                        label="Select School Country"
                        outlined
                        :items="country2"
                        v-model="schoolcountry"
                        @change="changedCity($event)"
                      ></v-select>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-text-field
                        type="text"
                        label="Enter School Street"
                        outlined
                        v-model="schoolstreet"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-select
                        label="Select School City"
                        outlined
                        :items="cities"
                        v-model="schoolcity"
                      ></v-select>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->
              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Select languages that you are skilled for
                </h4>
                <div class="form-group">
                  <v-select
                    multiple
                    chips
                    v-model="selectedLanguage"
                    :items="languages"
                    label="Select Languages"
                    outlined
                    height="30"
                  ></v-select>
                </div>
              </div>
              <!--end: Wizard Step 2-->
              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Select your Services
                </h4>
                <div class="form-group">
                  <label>Services</label><span style="color:red">*</span>
                  <v-select
                    multiple
                    chips
                    :items="services"
                    v-model="selectedServices"
                    name="services"
                    outlined
                    height="30"
                  >
                  </v-select>
                </div>
              </div>
              <!--end: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <!-- <Rating/> -->
                <h2>Days Available:</h2>
                <center>
                  <v-col class="d-flex " cols="12" sm="10">
                    <v-select
                      v-model="dayFrom"
                      :items="days"
                      label="From"
                      outlined
                    ></v-select>
                    <v-spacer></v-spacer>
                    <v-select
                      v-model="dayTo"
                      :items="days"
                      label="To"
                      outlined
                    ></v-select>
                  </v-col>
                </center>
                <h2>Time Available:</h2>
                <div class="row justify-content-center">
                  <div class="col-xl-5">
                    <div class="form-group">
                      <v-text-field
                        type="time"
                        outlined
                        v-model="timeFrom"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="col-xl-5">
                    <div class="form-group">
                      <v-text-field
                        type="time"
                        outlined
                        v-model="timeTo"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
                <p style="color:red">{{ errorMessage }}</p>
              </div>
              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    v-on:click="submit"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                  >
                    Next Step
                  </button>
                </div>
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

// import Rating from "@/view/pages/Rating.vue";

export default {
  name: "Wizard-1",
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
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  data: () => ({
    timeout: 3000,
    errorMessage: null,
    text: "Fields are required",
    snackbar: false,
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    genderList: ["Female", "Male"],
    image:
      "https://vegibit.com/wp-content/uploads/2018/02/VueJS-Image-Upload.png",
    file2: [],
    languages: [
      "Abkhaz",
      "Afar",
      "Afaraf",
      "Afrikaans",
      "Akan",
      "Albanian",
      "Amharic",
      "Arabic",
      "Aragonese",
      "Armenian",
      "Assamese",
      "Avaric",
      "Avestan",
      "Aymara",
      "Azerbaijani",
      "Bambara",
      "Bashkir",
      "Basque",
      "Belarusian",
      "Bengali",
      "Bihari",
      "Bislama",
      "Bosnian",
      "Breton",
      "Bulgarian",
      "Burmese",
      "Catalan; Valencian",
      "Chamorro",
      "Chechen",
      "Chichewa; Chewa; Nyanja",
      "Chinese",
      "Chuvash",
      "Cornish",
      "Corsican",
      "Cree",
      "Croatian",
      "Czech",
      "Danish",
      "Divehi; Dhivehi; Maldivian;",
      "Dutch",
      "English",
      "Esperanto",
      "Estonian",
      "Ewe",
      "Faroese",
      "Fijian",
      "Finnish",
      "French",
      "Fula; Fulah; Pulaar; Pular",
      "Galician",
      "Georgian",
      "German",
      "Greek, Modern",
      "Guaraní",
      "Gujarati",
      "Haitian; Haitian Creole",
      "Hausa",
      "Hebrew",
      "Hebrew",
      "Herero",
      "Hindi",
      "Hiri Motu",
      "Hungarian",
      "Interlingua",
      "Indonesian",
      "Interlingue",
      "Irish",
      "Igbo",
      "Inupiaq",
      "Ido",
      "Icelandic",
      "Italian",
      "Inuktitut",
      "Japanese",
      "Javanese",
      "Kalaallisut, Greenlandic",
      "Kannada",
      "Kanuri",
      "Kashmiri",
      "Kazakh",
      "Khmer",
      "Kikuyu, Gikuyu",
      "Kinyarwanda",
      "Kirghiz, Kyrgyz",
      "Komi",
      "Kongo",
      "Korean",
      "Kurdish",
      "Kwanyama, Kuanyama",
      "Latin",
      "Luxembourgish, Letzeburgesch",
      "Luganda",
      "Limburgish, Limburgan, Limburger",
      "Lingala",
      "Lao",
      "Lithuanian",
      "Luba-Katanga",
      "Latvian",
      "Manx",
      "Macedonian",
      "Malagasy",
      "Malay",
      "Malayalam",
      "Maltese",
      "Māori",
      "Marathi (Marāṭhī)",
      "Marshallese",
      "Mongolian",
      "Nauru",
      "Navajo, Navaho",
      "Norwegian Bokmål",
      "North Ndebele",
      "Nepali",
      "Ndonga",
      "Norwegian Nynorsk",
      "Norwegian",
      "Nuosu",
      "South Ndebele",
      "Occitan",
      "Ojibwe, Ojibwa",
      "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
      "Oromo",
      "Oriya",
      "Ossetian, Ossetic",
      "Panjabi, Punjabi",
      "Pāli",
      "Persian",
      "Polish",
      "Pashto, Pushto",
      "Portuguese",
      "Quechua",
      "Romansh",
      "Kirundi",
      "Romanian, Moldavian, Moldovan",
      "Russian",
      "Sanskrit (Saṁskṛta)",
      "Sardinian",
      "Sindhi",
      "Northern Sami",
      "Samoan",
      "Sango",
      "Serbian",
      "Scottish Gaelic; Gaelic",
      "Shona",
      "Sinhala, Sinhalese",
      "Slovak",
      "Slovene",
      "Somali",
      "Southern Sotho",
      "Spanish; Castilian",
      "Sundanese",
      "Swahili",
      "Swati",
      "Swedish",
      "Tamil",
      "Telugu",
      "Tajik",
      "Thai",
      "Tigrinya",
      "Tibetan Standard, Tibetan, Central",
      "Tagalog",
      "Tswana",
      "Tonga (Tonga Islands)",
      "Tsonga",
      "Tatar",
      "Twi",
      "Tahitian",
      "Uighur, Uyghur",
      "Ukrainian",
      "Urdu",
      "Uzbek",
      "Venda",
      "Vietnamese",
      "Volapük",
      "Walloon",
      "Welsh",
      "Wolof",
      "Western Frisian",
      "Xhosa",
      "Yiddish",
      "Yoruba",
      "Zhuang, Chuang",
    ],
    services: [
      "Aerospace & Aviation",
      "Agriculture",
      "Architecture",
      "Arts & Crafts",
      "Automotive",
      "Banking",
      "Biotechnology",
      "Certificates & Licenses",
      "Chemicals",
      "Computers & Peripherals",
      "Construction & Civil Engineering",
      "Consumer Goods",
      "Cosmetics",
      "Culinary Art",
      "Ecommerce & Internet",
      "Education & Research",
      "Electronics",
      "Energy / Oil & Gas",
      "Engineering",
      "Environment",
      "Fashion",
      "Film",
      "Financial Services",
      "Food & Beverage",
      "Games/Video Games/eSports",
      "General Business & Commerce",
      "Government",
      "Healthcare",
      "History & Archaeology",
      "Hospitality",
      "Human Resource",
      "Insurance",
      "Legal",
      "Literature",
      "Logistics/Supply Chain",
      "Manufacturing",
      "Marketing, Advertising & Public Relations",
      "Mathematics & Physics",
      "Media & Entertainment",
      "Medical & Pharmaceutical",
      "Mining",
      "Professional Services",
      "Public Sector/Non-profit",
      "Religion",
      "Retail",
      "Sciences",
      "Social Sciences",
      "Software",
      "Sports",
      "Technology",
      "Telecommunications",
      "Transportation",
      "Travel & Tourism",
      "Utilities",
      "Other",
    ],
    firstname: null,
    lastname: null,
    age: null,
    birthdate: null,
    email: null,
    gender: null,
    phonenumber: null,
    pricing: null,
    dayFrom: null,
    dayTo: null,
    timeFrom: null,
    timeTo: null,

    postalcode: null,
    city: null,
    street: null,
    zipcode: null,
    country: null,

    schoolname: null,
    schoolyear: null,

    schoolstreet: null,
    schoolcity: null,
    schoolpostalcode: null,
    schoolzipcode: null,
    schoolcountry: null,

    selectedLanguage: [],
    selectedServices: [],
    servicesFrom: null,
    servicesTo: [],
    dateUnavailable: [],
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
  clickFile: function() {
    this.$refs.fileBtn.click();
  },
  handleImageChange: function(e) {
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
  submit: function(e) {
    // if (this.firstname === null || this.lastname === null || this.age === null) {

    // } else {

    // }
    const id = localStorage.getItem("value");
    const userID = id.substr(id.lastIndexOf("*") + 1);
    let profileDetails = {
      accountId: userID,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      birthdate: this.birthdate,
      email: this.email,
      gender: this.gender,
      phonenumber: this.phonenumber,
      pricing: this.pricing,
      dateFrom: this.dayFrom,
      dateTo: this.dayTo,
      timeFrom: this.timeFrom,
      timeTo: this.timeTo,
      postalcode: this.postalcode,
      zipcode: this.zipcode,
      city: this.city,
      country: this.country,
      skillname: JSON.stringify(this.selectedLanguage),
      category: JSON.stringify(this.selectedServices),
    };
    e.preventDefault();
    let payload = new FormData();
    payload.append("img", this.file2);
    payload.append("data", JSON.stringify(profileDetails));
    ApiService.post("createprofile", payload)
      .then((res) => {
        ApiService.post("create_education_address", {
          schoolname: this.schoolname,
          schoolyear: this.schoolyear,
          street: this.schoolstreet,
          postalcode: this.schoolpostalcode,
          city: this.schoolcity,
          zipcode: this.schoolzipcode,
          country: this.schoolcountry,
        }).then((res) => {
          console.log("Education Details:  ", res);
        });
        console.log("response", res);
        console.log(profileDetails);
      })
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
  }
};
</script>
