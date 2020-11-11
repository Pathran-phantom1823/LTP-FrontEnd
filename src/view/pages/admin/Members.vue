<template>
  <v-container fluid>
    <v-data-iterator
      :items="accounts"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.accountId"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.username }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>

                <v-list-item>
                  <v-list-item-content>Name:</v-list-item-content>
                  <v-list-item-content class="align-end" v-if="item.firstName === null || item.lastName === null">
                    {{ item.username }}
                  </v-list-item-content>
                  <v-list-item-content class="align-end" v-else>
                    {{ item.firstName }} {{item.lastName}}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Email:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.email }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="item.dateFrom !== null">
                  <v-list-item-content>Availability:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.dateFrom }} - {{ item.dateTo }}, {{item.timeFrom}} - {{item.timeTo}}
                  </v-list-item-content>
                </v-list-item>

              </v-list>
              <v-card-actions>
                <v-btn color="info">View Profile</v-btn>
                <v-btn color="warning" @click="assignJob(item.accountId)"
                  >Assign the job</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      itemsPerPageArray: [3, 6, 9, 12],
      search: "",
      page: 1,
      itemsPerPage: 6,
      accounts: [],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.accounts.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.retrieveAccounts();
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    retrieveAccounts() {
      ApiService.post("getAccounts", { roleType: "STANDARD" }).then((res) => {
        this.accounts = res.data;
        console.log("org", res.data);
      });
    },
    assignJob(id) {
      console.log(id);
      const uid = localStorage.getItem('value')
     const userID = uid.substr(uid.lastIndexOf('*') + 1)
      Swal.fire({
        title: `${sessionStorage.getItem("quotationTitle")}`,
        text: `Are you sure you want to assign this job`,
        icon: "info",
        confirmButtonClass: "btn btn-secondary",
      })
        .then((res) => {
          if (res.isConfirmed) {
            ApiService.post("assignQuote", {
              accountId: id,
              jobId: sessionStorage.getItem("quotationId"),
              status: "assigned",
              assignedByid: userID,

            }).then(() => {
              Swal.fire("Job assigned Successfully!", "", "success");
            });
          }
        })
        .catch(() => {
          Swal.fire({
            title: "Error Occur",
            text: `Network erro`,
            icon: "error",
            confirmButtonClass: "btn btn-secondary",
          });
        });
    },
  },
};
</script>
