<template>
  <div class="container-fluid bookingPage">
    <div class="row">
      <div class="col-sm-12">
        <div class="card pt-2 pb-2">
          <div class="card-body p-4">
            <p class="pb-0 mb-0 booking_title">Booking</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card p-0">
          <div class="card-body pl-3 pr-3 pt-0 pb-0">
            <div class="row">
              <div class="col-sm-4 p-0 co_booking">
                <div class="filter">
                  <div class="row">
                    <div class="filterHeader">
                      <p>Filter</p>
                    </div>
                  </div>
                  <p class="mb-0 bookingFilter mt-4">Day</p>
                  <v-select
                    v-model="date"
                    :items="daysList"
                    outlined
                    prepend-icon="mdi-calendar"
                    height="20"
                  ></v-select>
                  <p class="mb-0 bookingFilter">From</p>
                  <b-form-timepicker
                    v-model="ctxFrom"
                    locale="en"
                    @context="onContextFrom"
                    size="lg"
                  ></b-form-timepicker>
                  <p class="mb-0 bookingFilter">To</p>
                  <b-form-timepicker
                    v-model="ctxTo"
                    locale="en"
                    @context ="onContextTo"
                     size="lg"
                  ></b-form-timepicker>
                <v-btn @click="retrieveUser">Search</v-btn>
                </div>
              </div>
              <div class="col-sm-8 co_booking translators_container">
                <div
                  class="card"
                  v-for="users in getTranslators"
                  :key="users.id"
                >
                  <div class="card-body p-4">
                    <div class="translatorInfo">
                      <div class="bookingavatar">
                      </div>
                      <div class="booking_info">
                        <div class="ml-2 translator">
                          <p class="mb-0">
                            <b class="font-weight-normal" style="cursor:pointer;">{{
                              users.username
                            }}</b>
                          </p>
                        </div>
                      </div>
                      <div class="action">
                        <v-btn
                          x-small
                          color="primary"
                          dark
                          class="bookButton"
                          @click="addRoom(users.id)"
                          >N e g o t i a t e</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <v-dialog v-model="dialog" max-width="600">
                <v-card>
                  <v-card-title class="headline"> Post New Forum </v-card-title>

                  <v-card-text>
                    <label for="textarea-small">Room Name:</label>
                    <b-input
                      v-model="roomName"
                      id="inline-form-input-name"
                      class="mb-12 mr-sm-12 mb-sm-0"
                    ></b-input
                    ><br />
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false"> Cancel </v-btn>

                    <v-btn color="info" @click="post"> Create </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      dialog: false,
      roomName: null,
      daysList: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      date: null,
      menu: false,
      from: null,
      from_menu: false,
      to: null,
      to_menu: false,
      translators: [],
      chosenTranslatorId: null,
      userID: null,
      ctxFrom: null,
      ctxTo: null
    };
  },
  computed: {
    getTranslators() {
      return this.translators;
    },
  },
  mounted() {
    const id = localStorage.getItem("value");
    this.userID = id.substr(id.lastIndexOf("*") + 1);
    this.retrieveUser();
  },
  methods: {
    retrieveUser() {
      ApiService.post("get-translators", { 
        accountId: this.userID,
        date: this.date,
        timeFrom: this.ctxFrom,
        timeTo: this.ctxTo
        
        }).then((res) => {
        this.translators = res.data;
          console.log(res.data);
      });
    },
    searchRetrieve(){

    },
    onContextFrom(ctx) {
      // console.log(ctx.formatted)
      this.from = ctx.formatted;
    },
    onContextTo(ctx) {
      // console.log(ctx.formatted);
      this.to = ctx.formatted;
    },
    addRoom(userId) {
      this.translators.map((el) => {
        if (el.id === userId) {
          this.dialog = true;
          this.chosenTranslatorId = el.id;
        }
      });
    },
    post() {
      console.log(this.from, this.to);
      let tempTopic =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).replace("0.", "");
      ApiService.post("createRoom", {
        name: this.roomName,
        topic: tempTopic,
        ownerId: this.userID,
        memberId: this.chosenTranslatorId,
        date: this.date,
        fromTime: this.from,
        toTime: this.to,
      })
        .then(() => {
          Swal.fire({
            title: "",
            text: `Room is successfully Created`,
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });
          this.dialog = false;
          this.roomName = "";
        })
        .catch((err) => {
          Swal.fire({
            title: "",
            text: `${err.message}`,
            icon: "error",
            confirmButtonClass: "btn btn-secondary",
          });
        });
    },
  },
};
</script>

<style scoped>
.booking_info {
  width: 30%;
}
.action {
  width: 40%;
  display: flex;
  justify-content: center;
}
.bookButton {
  width: 100% !important;
  margin-left: 50px;
  background: rgb(51, 188, 247) !important;
}
.bookingPage {
  padding-top: 71px;
}
.bookingFilter {
  padding-top: 5px;
  padding-bottom: 5px;
}
.filter {
  padding: 15px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0px;
  height: 600px;
}
.filterHeader {
  border-bottom: 1px solid rgb(221, 221, 221);
  width: 100%;
  padding: 15px;
}
.translatorInfo {
  display: flex;
  align-items: center;
}
.translator {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.co_booking {
  height: 600px;
}
.booking_title {
  font-size: 35px;
}
.card {
  border: 1px solid rgb(221, 221, 221);
  margin-bottom: 5px;
}
.translators_container {
  overflow-y: scroll;
}
.translators_container::-webkit-scrollbar {
  width: 7px;
}

.translators_container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(230, 230, 230) !important;
  background: rgb(240, 237, 235);
}

.translators_container::-webkit-scrollbar-thumb {
  background-color: #c7cbcc;
  border-radius: 20px;
  border: 0px;
}
</style>
