<template>
  <div>
    <Landingnav v-if="!hideNav"/>
     <v-snackbar v-model="snackbar" :timeout="timeout" color="red"
      elevation="24">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-container fluid class="pt-30 postform">
      <div class="card card-custom">
        <div class="card-body p-0">
          <!--begin: Wizard-->
          <div
            class="wizard wizard-2"
            id="kt_wizard_v2"
            data-wizard-state="step-first"
            data-wizard-clickable="true"
          >
            <!--begin: Wizard Nav -->
            <div class="wizard-nav py-8 px-8 py-lg-20 px-lg-10">
              <v-card class="wizard-steps">
                <div
                  class="wizard-step"
                  data-wizard-type="step"
                  data-wizard-state="current"
                >
                  <div class="wizard-wrapper">
                    <div class="wizard-icon">
                      <span class="svg-icon svg-icon-2x">
                        <inline-svg src="media/svg/icons/General/User.svg" />
                      </span>
                    </div>
                    <div class="wizard-label">
                      <h3 class="wizard-title">Title and Category</h3>
                      <div class="wizard-desc">
                        Setup Your Job Title and Category
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-step" data-wizard-type="step">
                  <div class="wizard-wrapper">
                    <div class="wizard-icon">
                      <span class="svg-icon svg-icon-2x">
                        <inline-svg src="media/svg/icons/Map/Compass.svg" />
                      </span>
                    </div>
                    <div class="wizard-label">
                      <h3 class="wizard-title">Description</h3>
                      <div class="wizard-desc">
                        Setup your project description
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-step" data-wizard-type="step">
                  <div class="wizard-wrapper">
                    <div class="wizard-icon">
                      <span class="svg-icon svg-icon-2x">
                        <inline-svg src="media/svg/icons/General/Visible.svg" />
                      </span>
                    </div>
                    <div class="wizard-label">
                      <h3 class="wizard-title">Visibility</h3>
                      <div class="wizard-desc">
                        Choose People that will see your job
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wizard-step" data-wizard-type="step">
                  <div class="wizard-wrapper">
                    <div class="wizard-icon">
                      <span class="svg-icon svg-icon-2x">
                        <inline-svg
                          src="media/svg/icons/Shopping/Credit-card.svg"
                        />
                      </span>
                    </div>
                    <div class="wizard-label">
                      <h3 class="wizard-title">Budget</h3>
                      <div class="wizard-desc">
                        Setup your budget for the job
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <!--end: Wizard Nav -->

            <!--begin: Wizard Body -->
            <div class="wizard-body py-8 px-8 jumbotron">
              <!--begin: Wizard Form-->
              <div class="row">
                <div class="offset-xxl-2 col-xxl-8">
                  <form class="form" id="kt_form">
                    <!--begin: Wizard Step 1-->
                    <div
                      class="pb-5"
                      data-wizard-type="step-content"
                      data-wizard-state="current"
                    >
                      <h4 class="mb-10 font-weight-bold text-dark">
                        Project Title
                      </h4>
                      <UploadForm @title="getTitle" />
                    </div>
                    <!--end: Wizard Step 1-->

                    <!--begin: Wizard Step 2-->
                    <div class="pb-5" data-wizard-type="step-content">
                      <h4 class="mb-10 font-weight-bold text-dark">
                        Setup Your Description
                      </h4>
                      <Description @description="getDescription" />
                    </div>
                    <!--end: Wizard Step 2-->

                    <!--begin: Wizard Step 5-->
                    <div class="pb-5" data-wizard-type="step-content">
                      <h4 class="mb-10 font-weight-bold text-dark">
                        Setup the Visibility
                      </h4>
                      <Visibility @visibility="getVisibility" />
                    </div>
                    <!--end: Wizard Step 5-->

                    <!--begin: Wizard Step 6-->
                    <div class="pb-5" data-wizard-type="step-content">
                      <h4 class="mb-10 font-weight-bold text-dark">
                        Setup your Budget
                      </h4>
                      <Budget @budget="getBudget" />
                    </div>
                    <!--end: Wizard Step 6-->

                    <!--begin: Wizard Actions -->
                    <div
                      class="d-flex justify-content-between border-top pt-10"
                    >
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
                          @click="validate"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                    <!--end: Wizard Actions -->
                  </form>
                </div>
                <!--end: Wizard-->
              </div>
            </div>
            <!--end: Wizard Body -->
          </div>
          <!--end: Wizard-->
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-2.scss";
.postform {
  box-shadow: 3px 3px 5px 6px #ccc;
}
</style>

<script>
import Description from "./Description";
import UploadForm from "./UploadForm";
import Visibility from "./Visibility";
import Budget from "./Budget";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import Landingnav from "@/view/pages/Landingnav";

export default {
  name: "Wizard-2",
  components: {
    Description,
    UploadForm,
    Visibility,
    Budget,
    Landingnav,
  },
  data() {
    return {
      projectTitle: null,
      service: null,
      description: null,
      languageFrom: [],
      languageTo: [],
      file: null,
      canSeeJob: null,
      confidentiality: null,
      paymentType: null,
      priceFrom: null,
      priceTo: null,
      fixedPrice: null,
      dateFrom: null,
      dateTo: null,
      email: null,
      wizard: null,
      snackbar: false,
      text: null,
      timeout: 3000,
    };
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/bg/bg-5.jpg";
    },
    hideNav(){
      return (this.$route.path === "/quotation")
    }
  },
  mounted() {
    // Initialize form wizard
    this.wizard = new KTWizard("kt_wizard_v2", {
      startStep: 1, // initial active step number
      clickableSteps: false, // allow step clicking
    });

    // Validation before going to next page
    this.wizard.on("beforeNext", function (wizardObj) {
      console.log(this.projectTitle);
      // validate the form and use below function to stop the wizard's step
      wizardObj.stop();
    });

    // Change event
    this.wizard.on("change", function (/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  methods: {
    getTitle(data) {
      this.projectTitle = data.title;
      this.service = data.category;
    },
    getDescription(data) {
      this.description = data.description;
      this.file = data.file;
      this.languageFrom = data.languageFrom;
      this.languageTo = data.languageTo;
    },
    getVisibility(data) {
      this.canSeeJob = data.canSee;
      this.confidentiality = data.confidential;
    },
    getBudget(data) {
      if (data.paymentType === "Pay per hour") {
        this.email = data.email
        this.paymentType = data.paymentType;
        this.priceFrom = data.priceFrom;
        this.priceTo = data.priceTo;
        this.dateFrom = data.dateFrom;
        this.dateTo = data.dateTo;
      } else {
        this.email = data.email
        this.paymentType = data.paymentType;
        this.fixedPrice = data.fixedPrice;
        this.dateFrom = data.dateFrom;
        this.dateTo = data.dateTo;
      }
    },
    validate() {
      if (this.projectTitle === null) {
        this.text = "Fields with (*) / Click button DONE are required"
        this.snackbar =true
        this.wizard.stop();
      }
    },
    submit: function (e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },
  },
};
</script>
