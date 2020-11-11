<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      overlay
      transition="dialog-bottom-transition"
    >
      <div>
        <v-card>
          <v-toolbar>
            <v-btn icon dark @click="hideModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Edit Post Job</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-stepper v-model="e1" style="height:100vh">
            <v-stepper-header>
              <v-stepper-step editable complete step="1">
                Title of Project
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step editable complete step="2">
                Description of Project
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step editable complete step="3">
                Visibility of the Project
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step editable complete step="4">
                Budget for the Project
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <UploadForm @title="getTitle" :titles="jobData" />
                <!-- <v-btn text @click="hideModal" class="closeBtn"> Cancel </v-btn> -->
              </v-stepper-content>

              <v-stepper-content step="2">
                <Description
                  @description="getDescription"
                  :descriptions="jobData"
                />
                <!-- <v-btn text @click="hideModal" class="closeBtn"> Cancel </v-btn> -->
              </v-stepper-content>

              <v-stepper-content step="3">
                <Visibility
                  @visibility="getVisibility"
                  :visibilities="jobData"
                />

                <!-- <v-btn text @click="hideModal" class="closeBtn"> Cancel </v-btn> -->
              </v-stepper-content>

              <v-stepper-content step="4">
                <Budget @budget="getBudget" :budgets="jobData" />

                <v-btn color="primary" @click.prevent="submit(jobData.id)">
                  Update
                </v-btn>

                <!-- <v-btn text @click="hideModal" class="closeBtn"> Cancel </v-btn> -->
              </v-stepper-content>
            </v-stepper-items>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="orange"
                  elevation="2"
                  fab
                  large
                  raised
                  bottom
                  absolute
                  right
                  style="top: 10%"
                  @click="hideModal"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="white">mdi-close</v-icon>
                </v-btn>
              </template>
              <span>Close Dialog</span>
            </v-tooltip>
          </v-stepper>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import Description from "./Description";
import UploadForm from "./UploadForm";
import Visibility from "./Visibility";
import Budget from "./Budget";
import Swal from "sweetalert2";
// import Landingnav from "@/view/pages/Landingnav";
import ApiService from "@/core/services/api.service";

export default {
  data() {
    return {
      e1: 1,
      projectTitle: null,
      service: null,
      description: null,
      subject: null,
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
      wizard: null,
      snackbar: false,
      text: null,
      timeout: 3000,
      userID: null,
    };
  },
  props: {
    dialog: Boolean,
    jobData: Object,
  },
  components: {
    Description,
    UploadForm,
    Visibility,
    Budget,
  },
  mounted() {
    console.log("jobdatea", this.jobData);
  },
  methods: {
    hideModal() {
      let vm = this;
      this.$emit("hideModal", vm.dialog);
    },
    getTitle(data) {
      console.log(data.title, data.category, data.subject);
      this.projectTitle = data.title;
      this.service = data.category;
      this.subject = data.subject;
    },
    getDescription(data) {
      console.log(data.file, data.languageFrom, data.languageTo);
      this.description = data.description;
      if (data.file[0] !== undefined) {
        this.file = data.file[0];
      } else if (data.file !== "") {
        this.file = data.file;
      }
      this.languageFrom = data.languageFrom;
      this.languageTo = data.languageTo;
      // console.log('file', this.file)
      // console.log(this.languageTo.toString());
    },
    getVisibility(data) {
      console.log(data.visibility, data.levelOfConfidentiality);
      this.canSeeJob = data.visibility;
      this.confidentiality = data.levelOfConfidentiality;
    },
    getBudget(data) {
      console.log("temp", data);
      if (data.priceType === "Pay per hour") {
        this.paymentType = data.priceType;
        this.priceFrom = data.fromPrice;
        this.priceTo = data.toPrice;
        this.dateFrom = data.fromDate;
        this.dateTo = data.toDate;
      } else {
        this.paymentType = data.priceType;
        this.fixedPrice = data.fixedPrice;
        this.dateFrom = data.fromPrice;
        this.dateTo = data.toPrice;
      }
    },
    submit(id) {
      const tempid = localStorage.getItem("value");
      const userID = tempid.substr(tempid.lastIndexOf("*") + 1);
      let formData = new FormData();
      let job = {
        id: id,
        title: this.projectTitle,
        description: this.description,
        category: this.service,
        languageFrom: this.languageFrom.toString(),
        languageTo: this.languageTo.toString(),
        fromDate: this.dateFrom,
        toDate: this.dateTo,
        fromPrice: this.priceFrom,
        toPrice: this.priceTo,
        priceType: this.paymentType,
        visibility: this.canSeeJob,
        levelOfConfidentiality: this.confidentiality,
        fixedPrice: this.fixedPrice,
        type: localStorage.getItem("method"),
        postById: userID,
        subject: this.subject,
      };
      formData.append("job", JSON.stringify(job));
      formData.append("file", this.file);
      ApiService.post("update", formData)
        .then(() => {
          // console.log("response", res)
        })
        .then(() => {
          Swal.fire({
            title: "",
            text: "The Job is successfully posted",
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });
          this.dialog = false;
        })
        .catch((e) => {
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

<style lang="scss" scoped>
.closeBtn {
  margin-left: 80%;
}
</style>