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
                      <p> Filter </p>
                    </div>
                  </div>
                  <p class="mb-0 bookingFilter mt-4">Day</p>
                  <v-select :items="days" label="Day" prepend-icon="mdi mdi-calendar" dense></v-select>
                  <p class="mb-0 bookingFilter">From</p>
                  <v-menu
                    ref="menu"
                    v-model="from_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="from"
                    transition="scale-transition"
                    offset-y
                    max-width="220px"
                    min-width="220px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="from"
                        label="Time"
                        prepend-icon="mdi mdi-clock-start"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="from_menu"
                      v-model="from"
                      full-width
                      @click:minute="$refs.menu.save(from)"
                    ></v-time-picker>
                  </v-menu>
                  <p class="mb-0 bookingFilter">To</p>
                  <v-menu
                    ref="menu_to"
                    v-model="to_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="to"
                    transition="scale-transition"
                    offset-y
                    max-width="220px"
                    min-width="220px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="to"
                        label="Time"
                        prepend-icon="mdi mdi-clock-end"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="to_menu"
                      v-model="to"
                      full-width
                      @click:minute="$refs.menu_to.save(to)"
                    ></v-time-picker>
                  </v-menu>
                </div>
              </div>
              <div class="col-sm-8 co_booking translators_container">
                <div class="card" v-for="i in 8" :key="i">
                  <div class="card-body p-4">
                    <div class="translatorInfo">
                      <div class="bookingavatar">
                        <v-avatar
                          size="36"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU"
                            alt="John"
                          >
                        </v-avatar>
                      </div>
                      <div class="booking_info">
                        <div class="ml-2 translator">
                          <p class="mb-0">
                            <b class="font-weight-normal">Steve Jobs P.</b>
                          </p>
                        </div>
                      </div>
                      <div class="action">
                        <v-btn x-small color="primary" dark class="bookButton">N e g o t i a t e</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      from: null,
      from_menu: false,
      to: null,
      to_menu: false
    };
  }
};
</script>

<style scoped>
.booking_info{
  width: 30%;
}
.action{
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
.filter{
  padding: 15px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0px;
  height: 600px;
}
.filterHeader{
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
.co_booking{
  height: 600px;
}
.booking_title{
  font-size: 35px;
}
.card{
  border: 1px solid rgb(221, 221, 221);
}
.translators_container{
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
