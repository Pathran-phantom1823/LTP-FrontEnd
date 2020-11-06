<template>
  <v-container fluid>
    <v-data-iterator
      :items="accounts"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
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
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
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
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
                <!-- <v-rating v-model="item.rating" readonly color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull"  medium></v-rating> -->
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
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 6,
      sortBy: "username",
      rating: 4.5,
      accounts: [],
      keys: ["username", "email"],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.accounts.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Username");
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
      ApiService.post("getAccounts", { roleType: "FREE" }).then((res) => {
        this.accounts = res.data;
        console.log(res.data);
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
