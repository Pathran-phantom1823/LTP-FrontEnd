<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-center">
          <h5>Verticle Tab Style 02</h5>
        </div>
      </div>
    </div>

    <!-- /Verticle Style 2 BOC -->
    <div class="yit-tab-verticle style-2 mt-40">
      <div class="row">
        <div class="col-xl-3 col-md-3 col-lg-3">
          <div
            class="nav flex-column nav-pills pad-r-5 tab-round"
            id="v-pills-tab-2"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-five-tab"
              data-toggle="pill"
              href="#v-pills-five"
              role="tab"
              aria-controls="v-pills-five"
              aria-selected="true"
            >
              <i class="fa fa-pencil"></i>Title
            </a>
            <a
              class="nav-link"
              id="v-pills-six-tab"
              data-toggle="pill"
              href="#v-pills-six"
              role="tab"
              aria-controls="v-pills-six"
              aria-selected="false"
              v-show="titleValid"
            >
              <i class="fa fa-file"></i> Description
            </a>
            <a
              class="nav-link"
              id="v-pills-seven-tab"
              data-toggle="pill"
              href="#v-pills-seven"
              role="tab"
              aria-controls="v-pills-seven"
              aria-selected="false"
              v-show="descriptionValid"
            >
              <i class="fa fa-file-text-o"></i>Details
            </a>
            <a
              class="nav-link"
              id="v-pills-eight-tab"
              data-toggle="pill"
              href="#v-pills-eight"
              role="tab"
              aria-controls="v-pills-eight"
              aria-selected="false"
              v-show="detailsValid"
            >
              <i class="fa fa-tasks"></i>Expertise
            </a>
            <a
              class="nav-link"
              id="v-pills-eight-tab"
              data-toggle="pill"
              href="#v-pills-nine"
              role="tab"
              aria-controls="v-pills-nine"
              aria-selected="false"
              v-show="languagesValid"
            >
              <i class="fa fa-search"></i>Visibility
            </a>
            <a
              class="nav-link"
              id="v-pills-eight-tab"
              data-toggle="pill"
              href="#v-pills-ten"
              role="tab"
              aria-controls="v-pills-ten"
              aria-selected="false"
              v-show="visibilityValid"
            >
              <i class="fa fa-money"></i>Budget
            </a>
          </div>
        </div>
        <div class="col-xl-9 col-md-9 col-lg-9">
          <div class="tab-content" id="v-pills-tabContent" v-show="!budgetValid">
            <div
              class="tab-pane fade show active"
              id="v-pills-five"
              role="tabpanel"
              aria-labelledby="v-pills-five-tab"
            >
              <Upload @title="getTitle($event)" />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-six"
              role="tabpanel"
              aria-labelledby="v-pills-six-tab"
            >
              <Description @description="getDescription($event)" />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-seven"
              role="tabpanel"
              aria-labelledby="v-pills-six-tab"
            >
              <Details @details="getDetails($event)" />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-eight"
              role="tabpanel"
              aria-labelledby="v-pills-six-tab"
            >
              <LanguageForm @languages="getLanguages($event)" />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-nine"
              role="tabpanel"
              aria-labelledby="v-pills-seven-tab"
            >
              <Visibility @visibility="getVisibility($event)" />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-ten"
              role="tabpanel"
              aria-labelledby="v-pills-eight-tab"
            >
              <Budget @budget="getBudget($event)" />
            </div>
          </div>
          <div class="card" v-show="budgetValid">
            You've almost done in quotation
            <strong>Would you like to continue?</strong>
            <button class="btn" @click="$router.push('/')">Cancel</button>
            <button class="btn btnSubmit">Continue</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Verticle Style 2 EOC -->
  </div>
</template>

<script>
import Upload from "./UploadForm";
import LanguageForm from "./LanguageForm";
import Description from "./Description";
import Details from "./Details";
import Visibility from "./Visibility";
import Budget from "./Budget";
export default {
  name: "Services",
  components: {
    Upload,
    LanguageForm,
    Description,
    Details,
    Visibility,
    Budget
  },
  data() {
    return {
      steps: [
        {
          name: "Step 1",
          status: false,
          id: 0,
          icon: "flat-icon flaticon-idea"
        },
        {
          name: "Step 2",
          status: false,
          id: 1,
          icon: "flat-icon flaticon-monitor-1"
        },
        {
          name: "Step 3",
          status: false,
          id: 2,
          icon: "flat-icon flaticon-magnifying-glass"
        },
        {
          name: "Step 4",
          status: false,
          id: 3,
          icon: "flat-icon icon flaticon-inclined-rocket"
        }
      ],
      isFinal: false,
      max_step: 4,
      current_step: 1,
      width: null,
      titleForm: [],
      descriptionForm: [],
      details: [],
      languages: [],
      visibility: [],
      budget: []
    };
  },
  mounted() {
    // console.log("form", this.titleForm.length !== 0);
  },
  computed: {
    progress() {
      return this.current_step;
    },
    titleValid() {
      return this.titleForm.length !== 0;
    },
    descriptionValid() {
      return this.descriptionForm.length !== 0;
    },
    detailsValid() {
      return this.details.length !== 0;
    },
    languagesValid() {
      return this.languages.length !== 0;
    },
    visibilityValid() {
      return this.visibility.length !== 0;
    },
    budgetValid() {
      return this.budget.length !== 0;
    },
    
  },
  methods: {
    onClickNext() {
      this.current_step++;
    },
    onClickBack() {
      this.current_step--;
    },
    getTitle(data) {
      this.titleForm = data;
    },
    getDescription(data) {
      this.descriptionForm = data;
    },
    getDetails(data) {
      this.details = data;
    },
    getLanguages(data) {
      this.languages = data;
    },
    getVisibility(data) {
      this.visibility = data;
    },
    getBudget(data) {
      this.budget = data;
    }
  }
};
</script>

<style scoped>
.next {
  background-color: #1a75ff;
  position: relative;
}
.back {
  background-color: #cccc;
  position: relative;
  border: none;
}

.next:hover,
.back:hover {
  box-shadow: 2px 2px 3px #999;
}

.btnSubmit{
  background-color: #1a75ff;
  color:white
}
</style>