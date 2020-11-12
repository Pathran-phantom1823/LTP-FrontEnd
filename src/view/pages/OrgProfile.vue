<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
        style="padding-bottom: 0px; padding-left: 7px; padding-top: 68px"
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
                <h3 class="wizard-title">1.Information</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-bus-stop"></i>
                <h3 class="wizard-title">2.Setup Address</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-responsive"></i>
                <h3 class="wizard-title">3.Services and skillName</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">4.About</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->
        <!--begin: Organization Profile Body-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
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
                  tag="article"
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
                  :img-src="file"
                  img-alt="Image"
                  img-top
                  @click="clickFile"
                >
                </b-card>
                <input
                  type="file"
                  name="myImage"
                  accept="image/*"
                  @change="handleImageChange"
                  hidden
                  ref="fileBtn"
                  :disabled="editTimeTo === false"
                />
                <h3 class="mb-10 font-weight-bold text-dark">
                  Organization Information
                </h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Organization Name</label>
                      <span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="orgname"
                        placeholder="Organization Name"
                        v-model="profiles.name"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your organization name</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Effective date</label
                      ><span style="color: red">*</span>
                      <b-input-group class="mt-3" v-if="editTimeTo === false">
                        <b-form-input
                          :value="profiles.effectDate"
                          disabled
                        ></b-form-input>
                      </b-input-group>
                      <b-input-group v-if="editTimeTo === true">
                        <input
                          type="date"
                          class="form-control form-control-solid form-control-lg"
                          name="startdate"
                          placeholder="Startdate"
                          v-model="profiles.effectDate"
                        />
                        <span class="form-text text-muted"
                          >Please enter your organization's effective date</span
                        >
                      </b-input-group>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Website</label>
                      <input
                        type="eamil"
                        class="form-control form-control-solid form-control-lg"
                        name="website"
                        placeholder="Website"
                        v-model="profiles.website"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Organization's
                        website(optional)</span
                      >
                    </div>
                  </div>

                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Email</label><span style="color: red">*</span>
                      <input
                        type="email"
                        class="form-control form-control-solid form-control-lg"
                        name="email"
                        placeholder="Email"
                        v-model="profiles.email"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Organization's email</span
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Your Pricing</label
                      ><span style="color: red">*</span>
                      <input
                        type="float"
                        class="form-control form-control-solid form-control-lg"
                        name="pricing"
                        placeholder="$200.05"
                        v-model="profiles.pricing"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >How much do your client/s pay?</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Telephone</label><span style="color: red">*</span>
                      <input
                        type="tel"
                        class="form-control form-control-solid form-control-lg"
                        name="telephone"
                        placeholder="123-4567-8901"
                        v-model="profiles.phoneNumber"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter you organization's telephone number</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">Address</h3>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Postcode</label><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="postcode"
                        placeholder="Postcode"
                        v-model="profiles.postalCode"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Postcode.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Country</label><span style="color: red">*</span>
                      <v-select
                        name="country"
                        class="form-control form-control-solid form-control-lg"
                        v-model="profiles.country"
                        :items="countries"
                        @change="changedCity(profiles.country)"
                        :disabled="editTimeTo === false"
                      >
                      </v-select>
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
                        v-model="profiles.street"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Street.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>zipCode</label><span style="color: red">*</span>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="zipCode"
                        placeholder="zipCode"
                        v-model="profiles.zipCode"
                        :disabled="editTimeTo === false"
                      />
                      <span class="form-text text-muted"
                        >Please enter your zipCode.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>City</label><span style="color: red">*</span>
                      <v-select
                        label="Select City"
                        class="form-control form-control-solid form-control-lg"
                        :items="cities"
                        v-model="profiles.city"
                        :disabled="editTimeTo === false"
                      ></v-select>
                      <span class="form-text text-muted"
                        >Please enter your City.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Select your organization's translation's skillName
                </h4>
                <div class="form-group">
                  <label>Languages</label><span style="color: red">*</span>
                  <v-select
                    multiple
                    chips
                    filled
                    :items="languages"
                    name="languages"
                    dense
                    v-model="profiles.skillName"
                    :disabled="editTimeTo === false"
                  >
                  </v-select>
                </div>

                <h4 class="mb-10 font-weight-bold text-dark">
                  Select services that your organization provides
                </h4>
                <div class="form-group">
                  <label>Services</label><span style="color: red">*</span>
                  <v-select
                    multiple
                    chips
                    filled
                    :items="services"
                    name="services"
                    dense
                    v-model="profiles.category"
                    :disabled="editTimeTo === false"
                  >
                  </v-select>
                </div>
              </div>

              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  About your organization
                </h4>
                <div class="form-group">
                  <div class="form-group">
                    <label>Additional Information</label>
                    <b-form-textarea
                      id="textarea-rows"
                      placeholder="About us"
                      rows="8"
                      v-model="profiles.about"
                      :disabled="editTimeTo === false"
                    ></b-form-textarea>
                  </div>
                  <div>
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Days Available:
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <v-select
                            v-model="profiles.fromDay"
                            :items="days"
                            class="form-control form-control-solid form-control-lg"
                            label="From"
                            :disabled="editTimeTo === false"
                          ></v-select>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <v-select
                            v-model="profiles.toDay"
                            :items="days"
                            label="To"
                            class="form-control form-control-solid form-control-lg"
                            :disabled="editTimeTo === false"
                          ></v-select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Time Available:
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>From: </label><span style="color: red">*</span>
                          <b-input-group
                            class="mt-3"
                            v-if="editTimeTo === false"
                          >
                            <b-form-input
                              :value="ctxFrom"
                              disabled
                            ></b-form-input>
                          </b-input-group>
                          <b-input-group v-if="editTimeTo === true">
                            <b-form-timepicker
                              v-model="ctxFrom"
                              locale="en"
                              @context="onContextFrom"
                              class="form-control form-control-solid form-control-lg"
                              size="lg"
                            ></b-form-timepicker>
                          </b-input-group>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>To:</label><span style="color: red">*</span>
                          <b-input-group
                            class="mt-3"
                            v-if="editTimeTo === false">
                            <b-form-input
                              :value="ctxTo"
                              disabled
                            ></b-form-input>
                          </b-input-group>
                          <b-input-group v-if="editTimeTo === true">
                            <b-form-timepicker
                              v-model="ctxTo"
                              locale="en"
                              @context="onContextTo"
                              class="form-control form-control-solid form-control-lg"
                              size="lg"
                            ></b-form-timepicker>
                          </b-input-group>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->
              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    v-if="editTimeTo === true"
                    class="btn btn-light-warning font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                    @click="timeUpdateCancel"
                  >
                    Cancel Update
                  </button>
                  <button
                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    v-if="editTimeTo === true"
                    v-on:click="submit"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    v-if="editTimeTo === true"
                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                  >
                    Next Step
                  </button>
                   <button
                    v-if="editTimeTo === false"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                    @click="timeUpdate"
                  >
                    Update Profile
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

<style lang="scss">
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
import countries from "@/view/pages/countries.json";
import ApiService from "@/core/services/api.service";
// import JwtService from "@/core/services/jwt.service";

export default {
  name: "Wizard-1",
  mounted() {
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
    this.countries = Object.keys(this.listOfCountry);
    this.retrieveProfile();
    this.retreiveImage();
  },
  data: () => ({
    file2: [],
    ctxFrom: null,
    ctxTo: null,
    editTimeTo: false,
    editTimeFrom: false,
    file:
      "https://vegibit.com/wp-content/uploads/2018/02/VueJS-Image-Upload.png",
    profiles: {
      id: null,
      image: null,
      name: null,
      effectDate: null,
      website: null,
      email: null,
      pricing: null,
      phoneNumber: null,
      postalCode: null,
      zipCode: null,
      city: null,
      street: null,
      country: null,
      skillName: [],
      category: [],
      about: null,
      fromTime: null,
      toTime: null,
      fromDay: null,
      toDay: null,
    },
    listOfCountry: countries,
    cities: [],
    countries: [],
    tempImage: null,
    exist: null,
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
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
  }),
  methods: {
    changedCity(data) {
      Object.keys(this.listOfCountry).map((el) => {
        if (el === data) {
          Object.keys(this.listOfCountry).filter((el2) => {
            if (el2 === el) {
              this.cities = this.listOfCountry[el2];
            }
          });
        }
      });
    },

    timeUpdate() {
        this.editTimeTo = true;
    },

    timeUpdateCancel() {
        this.editTimeTo = false;
    },

    clickFile: function () {
      this.$refs.fileBtn.click();
    },
    handleImageChange: function (e) {
      let input = e.target;
      let img = e.target.files[0];
      this.profiles.image = img;
      let reader = new FileReader();
      reader.onload = (e) => {
        this.file = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    },
    submit: function () {
      // console.log("exist", this.exist);
      if (this.exist === true) {
        // console.log(this.profiles.image);
        const id = localStorage.getItem("value");
        const userID = id.substr(id.lastIndexOf("*") + 1);
        let payload = new FormData();
        let parameter = {
          accountId: userID,
          name: this.profiles.name,
          effectDate: this.profiles.effectDate,
          website: this.profiles.website,
          email: this.profiles.email,
          pricing: this.profiles.pricing,
          phoneNumber: this.profiles.phoneNumber,
          postalCode: this.profiles.postalCode,
          zipCode: this.profiles.zipCode,
          street: this.profiles.street,
          country: this.profiles.country,
          city: this.profiles.city,
          skillName: this.profiles.skillName.toString(),
          category: this.profiles.category.toString(),
          about: this.profiles.about,
          fromDay: this.profiles.fromDay,
          toDay: this.profiles.toDay,
          fromTime: this.profiles.fromTime,
          toTime: this.profiles.toTime,
        };
        payload.append("img", this.profiles.image);
        payload.append("data", JSON.stringify(parameter));
        // axios script
        ApiService.post("createAgencyProfile", payload)
          .then(() => {
            // console.log(res);
            Swal.fire({
              title: "",
              text: `Profile is created`,
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
            this.retrieveProfile();
          })
          .catch(() => {
            Swal.fire({
              title: "",
              text: "Error occured",
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
            });
          });
      } else {
        this.updateProfile();
      }
    },
    onContextFrom(ctx) {
      this.profiles.fromTime = ctx.formatted;
    },
    onContextTo(ctx) {
      this.profiles.toTime = ctx.formatted;
    },
    retrieveProfile() {
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);
      ApiService.post("retrieveProfileAgency", { accountId: userID }).then(
        (res) => {
          if (res.data[0].length > 0) {
            res.data[0].map((el) => {
              let tempres = el.skillName.replace(/,/g, " ");
              el.skillName = tempres.trim().split(" ");
              // this.profiles.skillName.push(tempres.trim().split(" "));
              if (el.category !== null) {
                let tempres2 = el.category.replace(/,/g, " ");
                el.category = tempres2.trim().split(" ");
              }
              // console.log(this.profiles.skillName);
            });
            this.exist = res.data[1];
            this.profiles = res.data[0][0];
            // console.log("agency", res.data);
            this.tempImage = res.data[0][0].image;
            this.ctxFrom = res.data[0][0].fromTime;
            this.ctxTo = res.data[0][0].toTime;
            Object.keys(this.listOfCountry).map((el) => {
              if (el === res.data[0][0].country) {
                Object.keys(this.listOfCountry).filter((el2) => {
                  if (el2 === el) {
                    this.cities = this.listOfCountry[el2];
                  }
                });
              }
            });
          }
        }
      );
    },
    retreiveImage() {
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);
      this.$axios({
        method: "post",
        url: "http://localhost:8003/api/getAgencyImage/",
        // header: {
        //   Authorization: `${JwtService.getToken()}`,
        // },
        responseType: "blob",
        data: {
          accountId: userID,
        },
      }).then((res) => {
        if (res.data.size > 0) {
          this.convertImage(res);
        }
      });
    },
    convertImage(data) {
      const url = URL.createObjectURL(data.data);
      let img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        // console.log(img);
      };
      this.file = url;
    },
    updateProfile() {
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);
      let payload = new FormData();
      let parameter = {
        accountId: userID,
        id: this.profiles.id,
        addressId: this.profiles.addressId,
        categoryId: this.profiles.categoryId,
        skillId: this.profiles.skillId,
        name: this.profiles.name,
        effectDate: this.profiles.effectDate,
        website: this.profiles.website,
        email: this.profiles.email,
        pricing: this.profiles.pricing,
        phoneNumber: this.profiles.phoneNumber,
        postalCode: this.profiles.postalCode,
        zipCode: this.profiles.zipCode,
        street: this.profiles.street,
        country: this.profiles.country,
        city: this.profiles.city,
        skillName: this.profiles.skillName.toString(),
        category: this.profiles.category.toString(),
        about: this.profiles.about,
        fromDay: this.profiles.fromDay,
        toDay: this.profiles.toDay,
        fromTime: this.profiles.fromTime,
        toTime: this.profiles.toTime,
      };
      payload.append("data", JSON.stringify(parameter));
      if (this.profiles.image !== this.tempImage) {
        payload.append("img", this.profiles.image);
        ApiService.post("updateAgencyProfilewithImage", payload)
          .then(() => {
            // console.log(res);
            Swal.fire({
              title: "",
              text: `Profile is updated`,
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
            this.retrieveProfile();
          })
          .catch(() => {
            Swal.fire({
              title: "",
              text: "Error in update",
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
            });
          });
      } else {
        ApiService.post("updateAgencyProfile", payload)
          .then(() => {
            // console.log(res);
            Swal.fire({
              title: "",
              text: `Profile is updated`,
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
            this.retrieveProfile();
          })
          .catch(() => {
            Swal.fire({
              title: "",
              text: "Error in update",
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
            });
          });
      }
    },
  },
};
</script>
