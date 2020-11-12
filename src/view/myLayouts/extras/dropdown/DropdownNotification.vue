<template>
  <div>
    <div
      class="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h4 class="d-flex flex-center rounded-top">
        <span class="text-white">Notifications</span>
        <span
          class="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2"
        >
          {{ quotations.length }}
        </span>
      </h4>

      <ul
        class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8"
        role="tablist"
      >
        <!-- <li class="nav-item">
                <a v-on:click="setActiveTab" data-tab="0" class="nav-link active" data-toggle="tab" href="#" role="tab">
                    Message
                </a>
            </li> -->
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="1"
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Assigned Jobs
          </a>
        </li>
      </ul>
    </div>

    <b-tabs class="hide-tabs" v-model="tabIndex">
      <b-tab active class="p-8">
        <perfect-scrollbar
          class="scroll pr-7 mr-n7"
          style="max-height: 40vh; position: relative"
        >
          <template v-for="item in quotations">
            <!--begin::Item-->
            <div class="d-flex align-items-center mb-6" v-bind:key="item.id">
              <!--begin::Symbol-->
              <div class="symbol symbol-40 mr-5 symbol-light-primary">
                <span class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-primary">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/General/Notifications1.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <!--end::Symbol-->
              <!--begin::Text-->
              <div class="d-flex flex-column font-weight-bold">
                <span class="text-muted"> postedBy: {{ item.username }} </span>
                <a
                  @click="showdetails(item.jobId)"
                  class="text-dark text-hover-primary mb-1 font-size-lg"
                >
                  {{ item.title }}
                </a>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </perfect-scrollbar>
      </b-tab>

      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="info">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <h3
                    v-if="
                      details.firstName === null || details.lastName === null
                    "
                  >
                    {{ details.username }}
                  </h3>
                  <h3 v-else>{{ details.firstName }} {{ details.lastName }}</h3>
                </v-list-item-title>
                <v-list-item-title>{{ details.datePosted }}</v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list subheader class="mt-5">
              <v-container>
                <b-row>
                  <b-col>
                    <h1>{{ details.title }}</h1>
                    <h5>{{ details.category }}</h5>
                  </b-col>
                  <b-col>
                    <b>Download File</b>
                    <v-chip
                      class="ma-2 downloadFileBtn"
                      color="info accent-4"
                      outlined
                      @click="downloadFile(details.file)"
                    >
                      <v-icon left> mdi-file-download </v-icon>
                      {{ details.file }}
                    </v-chip>
                  </b-col>
                </b-row>
              </v-container>
              <v-container>
                <h3>Description</h3>
                <v-card class="p-5">{{ details.description }}</v-card>
                <b-row>
                  <b-col sm="6">
                    <h3>Language From:</h3>
                    <b-row>
                      <b-col
                        v-for="(each, index) in details.languageFrom"
                        :key="index"
                      >
                        <v-card class="p-5">{{ each }}</v-card>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col sm="6">
                    <h3>Language To:</h3>
                    <b-row>
                      <b-col
                        v-for="(each, index) in details.languageTo"
                        :key="index"
                      >
                        <v-card class="p-5">{{ each }}</v-card>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="6">
                    <h3>Date From</h3>
                    <v-card class="p-5">{{ details.fromDate }}</v-card>
                  </b-col>
                  <b-col sm="6">
                    <h3>Date To</h3>
                    <v-card class="p-5">{{ details.toDate }}</v-card>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="6">
                    <h3>Price Type</h3>
                    <v-card class="p-5">{{ details.priceType }}</v-card>
                  </b-col>
                  <b-col sm="6" v-if="details.fixedPrice !== null">
                    <h3>Fixed Price</h3>
                    <v-card class="p-5">$ {{ details.fixedPrice }}</v-card>
                  </b-col>
                  <b-col sm="6" v-else>
                    <b-row>
                      <b-col sm="6">
                        <h3>From Price</h3>
                        <v-card class="p-5">$ {{ details.fromPrice }}</v-card>
                      </b-col>
                      <b-col sm="6">
                        <h3>To Price</h3>
                        <v-card class="p-5">$ {{ details.toPrice }}</v-card>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="6">
                    <h3>Visibility</h3>
                    <v-card class="p-5">{{ details.visibility }}</v-card>
                  </b-col>
                  <b-col sm="6">
                    <h3>Level of Confidentiality</h3>
                    <v-card class="p-5">{{
                      details.levelOfConfidentiality
                    }}</v-card>
                  </b-col>
                </b-row>
                <DragDrop :primaryId="details.id" />
              </v-container>
            </v-list>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- <b-tab>
            <perfect-scrollbar class="navi navi-hover scroll my-4" style="max-height: 40vh; position: relative;">
                <template v-for="(item, i) in list2">
                    <a href="#" class="navi-item" v-bind:key="i">
                        <div class="navi-link">
                            <div class="navi-icon mr-2">
                                <i v-bind:class="item.icon"></i>
                            </div>
                            <div class="navi-text">
                                <div class="font-weight-bold">
                                    {{ item.title }}
                                </div>
                                <div class="text-muted">
                                    {{ item.desc }}
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
            </perfect-scrollbar>
        </b-tab> -->
    </b-tabs>
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import JwtService from "@/core/services/jwt.service";
import DragDrop from "@/view/pages/DragDrop.vue";
import ApiService from "@/core/services/api.service";
export default {
  name: "KTDropdownNotification",
  props: ["quotations"],
  components: {
    DragDrop,
  },
  data() {
    return {
      tabIndex: 0,
      dialog: false,
      list1: [],
      list2: [],
      details: [],
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  methods: {
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");
    },
    showdetails(data) {
      ApiService.post("getJobDetails", {
        id: data,
      }).then((res) => {
        res.data.map((el) => {
          let tempRes = el.languageFrom.replace(/,/g, " ");
          el.languageFrom = tempRes.trim().split(" ");

          let tempRes2 = el.languageTo.replace(/,/g, " ");
          el.languageTo = tempRes2.trim().split(" ");
        });
        this.details = res.data[0];
        // console.log(this.details);
        this.dialog = true;
      });
    },
    downloadFile(file) {
      this.$axios({
        method: "get",
        url: "http://localhost:8003/ltp/getFiles/" + file,
        header: { Authorization: `${JwtService.getToken()}` },
        responseType: "blob",
      }).then((res) => {
        // console.log(res.data)
        // let response = this.base64ToArrayBuffer(res)
        this.forceToDownload(res, file);
      });
    },

    forceToDownload(data, title) {
      let blob = new Blob([data.data]);
      let url = window.URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    },
  },
};
</script>
