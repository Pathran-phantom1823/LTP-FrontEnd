<template>
  <div>
    <b-row>
      <b-col sm="4" v-for="quotation in quote" :key="quotation.id">
        <v-card class="mx-auto" color="rgb(0, 102, 255)" dark max-width="400">
          <v-card-title>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <h3 v-if="quotation.firstName === null || quotation.lastName === null">{{ quotation.username }}</h3>
                <h3 v-else>{{quotation.firstName}} {{quotation.lastName}}</h3>
              </v-list-item-title>
              <v-list-item-title>{{ quotation.datePosted }}</v-list-item-title>
            </v-list-item-content>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            {{ quotation.title }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="end">
                <v-btn color="white" text @click="chooseAccount = true"  v-if="quotation.assignedTo === null">
                  Assign
                </v-btn>
                <v-btn text>Assigned To: {{quotation.assignedTo}}</v-btn>
                <v-btn
                  color="white"
                  style="color: #0066ff"
                  @click="showDetails(quotation.id)"
                >
                  View Details
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="chooseAccount" max-width="358">
          <v-card>
            <v-card-title class="headline">
              To Whom do you want to assign the job?
            </v-card-title>

            <v-card-text>
              <center>
                <v-btn
                  color="primary"
                  @click="
                    choosenAccount(
                      'organization',
                      quotation.id,
                      quotation.title
                    )
                  "
                  >Organization Accounts</v-btn
                >
                <h1>or</h1>
                <v-btn
                  color="warning"
                  @click="
                    choosenAccount('member', quotation.id, quotation.title)
                  "
                  >Members Accounts</v-btn
                >
              </center>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="chooseAccount = false">
                close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </b-col>
    </b-row>

    <!-- <div class="text-center" v-if="quote.length <= 0">
            <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div> -->
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
                <h3 v-if="details.firstName === null || details.lastName === null">{{ details.username }}</h3>
                <h3 v-else>{{details.firstName}} {{details.lastName}}</h3>
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
            <center>
              <h1>{{ details.title }}</h1>
              <h5>{{ details.category }}</h5>
            </center>
            <v-container>
              <h3>Description</h3>
              <v-card class="p-5">{{ details.description }}</v-card>
              <hr style="border: 2px solid blue" />
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
              <hr style="border: 2px solid orange" />
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
              <hr style="border: 2px solid blue" />
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
              <hr style="border: 2px solid orange" />
              <b-row>
                <b-col sm="6">
                  <h3>Visibility</h3>
                  <v-card class="p-5">{{ details.visibility }}</v-card>
                </b-col>
                <b-col sm="6">
                  <h3>Level Of Confidentiality</h3>
                  <v-card class="p-5">{{
                    details.levelOfConfidentiality
                  }}</v-card>
                </b-col>
              </b-row>
            </v-container>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// import Quotations from "./Quotations.js"
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      quotation: [],
      chooseAccount: false,
      dialog: false,
      details: [],
      page: 1,
    };
  },
  computed: {
    quote() {
      return this.quotation;
    },
  },
  mounted() {
    this.retrieveQuote();
  },
  methods: {
    showDetails(id) {
      ApiService.post("getJob", {
        id: id,
      }).then((res) => {
        res.data.map((el) => {
          let tempRes = el.languageFrom.replace(/,/g, " ");
          el.languageFrom = tempRes.trim().split(" ");

          let tempRes2 = el.languageTo.replace(/,/g, " ");
          el.languageTo = tempRes2.trim().split(" ");
        });

        this.details = res.data[0];
        this.dialog = true;
      });
    },
    retrieveQuote() {
      ApiService.get("getQuote").then((res) => {
        this.quotation = res.data;
      });
    },
    choosenAccount(account, quotationId, quotationTitle) {
      // console.log(quotationId, quotationTitle);
      if (account === "organization") {
        sessionStorage.setItem("account", "organization");
        sessionStorage.setItem("quotationId", quotationId);
        sessionStorage.setItem("quotationTitle", quotationTitle);
        this.$router.push("/admin/organizations");
      } else {
        sessionStorage.setItem("account", "member");
        sessionStorage.setItem("quotationId", quotationId);
        sessionStorage.setItem("quotationTitle", quotationTitle);
        this.$router.push("/admin/members-translators");
      }
    },
  },
};
</script>

<style>
</style>
