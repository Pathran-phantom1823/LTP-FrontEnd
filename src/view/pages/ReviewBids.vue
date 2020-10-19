<template>
  <div class="jobBoard">
    <div class="card mb-20 bid_cards_container">
      <div class="card-header board_header_container pb-0 bid_cards_container">
        <!-- <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
          <a :ref="'nav' + index" class="jobnav" @click="navigateTo">{{jobheader}}</a>
        </div> -->
        <div class="card col-sm-12 p-0 cards bid_cards">
          <div class="card-body p-3">
            <b class="font-weight-normal bids_title"> Review Bids </b>
          </div>
        </div>
      </div>
      <div class="card-body pt-4 pb-4">
        <div
          class="row mb-1 cards FeedCard"
          v-for="(data, index) in returnData"
          :key="index"
        >
          <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
            <div class="card-body p-0 d-flex justify-content-between data_header">
              <b class="mb-0">{{data.title}}</b>
            </div>
          </div>
          <div class="col-sm-4 card p-0 jobCard">
            <div class="card-body p-3">
              <div class="d-flex justify-content-start mt-2 mb-3">
                <v-avatar>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU"
                    alt="John"
                  >
                </v-avatar>
                <div class="ml-2">
                  <p class="card-text mb-0 pt-1">
                    <b>Steve Jobs</b>
                  </p>
                  <p class="locationbid">
                    Location:
                    <v-icon class="locationIcon">mdi-map-marker</v-icon>Philippines
                  </p>
                </div>
              </div>
              <p class="card-text mb-1">
                <b class="font-weight-normal">Date Posted:</b> 9/24/2020
              </p>
              <p class="card-text mb-1">
                <b class="font-weight-normal">Date Needed:</b> 9/24/2020
              </p>
              <div class="col-sm-12 skillsPadding">
                <div class="row">
                  <b class="mr-2 font-weight-normal">Category :</b>
                  <b class="skills font-weight-normal" v-for="skill in 1" :key="skill">Arts Crafts</b>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 card p-0 jobCard">
            <div class="card-body p-3 align-middle">
              <p class="card-text pt-2">
                <b class="pr-2">Description :</b>
                {{(!data.description.length >= 200) ? data.description : data.description.substring(0, 200)}} <b class="view_more_truncate" v-if="data.description.length >= 200" @click="viewMore(true)">...view more</b>
              </p>
              <div class="col-sm-12 skillsPadding">
                <div class="row">
                  <b class="skills font-weight-normal" v-for="(skill, index) in data.skills" :key="index">{{skill}}</b>
                </div>
              </div>
              <p class="card-text mb-0 mt-3">
                <b>Price:</b>
                {{data.price}}
              </p>
              <p class="card-text locationbid mt-2">Bids: 0</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 pl-7 pr-7">
        <div class="row">
          <div class="col-sm-6 p-0 bid_card cards bid_cards">
            <div class="card p-0 cards bid_cards bid_cards_container">
              <div class="card-body pl-4 pr-4 pb-0">
                <b class="font-weight-normal"> Individual Translator </b>
              </div>
            </div>
            <hr>
            <div class="card p-0 organization bid_cards_container">
              <!-- <div class="card-header bid_cards p-5 pb-0 pt-0 bid_cards_container">
                <div class="card p-0 cards bid_cards">
                  <div class="card-body p-4">
                    <b class="font-weight-normal"> Organization </b>
                  </div>
                </div>
              </div> -->
              <div class="card-body pt-0 pb-0">
                <div class="row cards" v-for="(element) in 10" :key="element">
                  <div class="col-sm-4 card p-3 bid_card">
                    <div class="card-body p-0">
                      <div class="d-flex justify-content-start align-items-center">
                        <v-avatar
                          color="indigo"
                          size="36"
                        >
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          >
                        </v-avatar>
                        <b class="ml-2 font-weight-normal">Bill Gates</b>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 card p-3 bid_card">
                    <div class="card-body p-0 d-flex align-items-center justify-content-start">
                      <div class="location_bids">
                        <b class=" mr-2">Price: <v-icon class="locationIcon">mdi-map-marker</v-icon> <b class="font-weight-normal">$100.00 </b></b>
                        <b class="skills font-weight-normal bidAction">Accept</b>
                        <b class="skills font-weight-normal Decline bidAction">Decline</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 p-0 bid_card cards bid_cards">
            <div class="card p-0 cards bid_cards bid_cards_container">
              <div class="card-body pl-4 pr-4 pb-0">
                <b class="font-weight-normal"> Organization </b>
              </div>
            </div>
            <hr>
            <div class="card p-0 organization bid_cards_container">
              <div class="card-body pt-0 pb-0">
                <div class="row cards" v-for="(element) in 5" :key="element">
                  <div class="col-sm-4 card p-3 bid_card">
                    <div class="card-body p-0">
                      <div class="d-flex justify-content-start align-items-center">
                        <v-avatar
                          color="indigo"
                          size="36"
                        >
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          >
                        </v-avatar>
                        <b class="ml-2 font-weight-normal">Bill Gates</b>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 card p-3 bid_card">
                    <div class="card-body p-0 d-flex align-items-center justify-content-start">
                      <div class="location_bids">
                        <b class=" mr-2">Price: <v-icon class="locationIcon">mdi-map-marker</v-icon> <b class="font-weight-normal">$100.00 </b></b>
                        <b class="skills font-weight-normal bidAction">Accept</b>
                        <b class="skills font-weight-normal Decline bidAction">Decline</b>
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

    <div ref="MoreInfoWrapper" class="MoreInfoWrapper">
      <div ref="moreInfo" class="moreInfo">
        <v-icon class="exit_view_more" @click="viewMore(false)">mdi mdi-close</v-icon>
        <div class="card ViewMoreTitle mb-3">
          <b>{{returnData[0].title}}</b>
        </div>
        <div class="card ViewMoreCard pt-3">
          <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
          </div>-->
          <div class="card-body ViewMoreBody">
            <p class="card-text mb-3">
              <b>Price:</b>
              {{data[0].price}}
            </p>
            <p class="card-text">
              <b>Description :</b>Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
              Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
              Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
            </p>
            <div class="col-sm-12 skillsPadding">
              <div class="row">
                <b
                  class="skills font-weight-normal"
                  v-for="(skill, index) in data[0].skills"
                  :key="index"
                >{{skill}}</b>
              </div>
            </div>
          </div>
          <div class="card-footer ViewMoreFooter">
            <p class="locationbid">
              <b>Bids:</b> 0
            </p>
            <p class="locationbid">
              <b>Location:</b>
              <v-icon class="locationIcon">mdi-map-marker</v-icon>Philippines
            </p>
          </div>
        </div>
        <div class="card ViewMoreCard mt-2">
          <div class="card-header ViewMoreHeader">
            <b class="mb-5 font-weight-normal">Posted by:</b>
            <div class="d-flex justify-content-start mt-5 mb-3 post_owner">
              <v-avatar>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU"
                  alt="John"
                >
              </v-avatar>
              <div class="ml-2">
                <p class="card-text">
                  <b>Steve Jobs</b>
                </p>
              </div>
            </div>
            <!-- <b>Posted by: <b class="text-primary">Doom Bringer</b></b> -->
          </div>
          <div class="card-body ViewMoreBody">
            <p class="card-text mb-3">
              <b>Date Posted:</b> 9/24/2020
            </p>
            <p class="card-text mb-3">
              <b>Date Needed:</b> 9/24/2020
            </p>
            <div class="col-sm-12 skillsPadding">
              <div class="row">
                <b class="mr-2">Category :</b>
                <b class="skills font-weight-normal" v-for="skill in 1" :key="skill">Arts Crafts</b>
              </div>
            </div>
          </div>
          <div class="card-footer ViewMoreFooter"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardHeader: [
        "Active Contracts",
        "Posted Jobs",
        "Save Jobs",
        "Contracts History"
      ],
      data: [
        {
          title: "Premeiere arts for the Global Agriculture Industry",
          description:
            "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.",
          skills: ["ENGLISH", "RUSSIAN", "KOREAN"],
          price: "$300"
        }
      ],
      navEvent: "",
      iconDisplay: ""
    };
  },
  components: {},
  computed: {
    returnNavEvent() {
      return this.navEvent;
    },
    returnData() {
      return this.data;
    }
  },
  methods: {
    viewMore(ViewEvent) {
      if (ViewEvent) {
        this.$refs["MoreInfoWrapper"].style = "left: 0 !important";
        this.$refs["moreInfo"].style =
          "transition: .5s !important; left: 20% !important";
        if (window.innerWidth < 750) {
          this.$refs["moreInfo"].style =
            "width: 90% !important; transition: .5s !important; left: 10% !important";
        }
      } else {
        this.$refs["MoreInfoWrapper"].style = "left: 100% !important";
        this.$refs["moreInfo"].style =
          "transition: .5s !important; right: 100% !important";
      }
    }
  }
};
</script>

<style scoped>
.bidAction{
  cursor: pointer;
}
.Decline{
  background:#f2470f !important;
  border: 1px solid #f2470f !important;
}
.location_bids{
  white-space: nowrap; 
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.bid_cards_container{
  border: none !important;
}
.bid_cards{
  border-radius: 0px;
}
.bid_card{
  border: none;
  border-radius: 0px;
  white-space: nowrap; 
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.bids_title{
  font-size: 20px;
}
.view_more_truncate{
  color: rgb(51, 188, 247);
  cursor: pointer;
}
.show_posts_icons {
  animation: popIn;
  animation-duration: 1s;
  display: inline !important;
}
@keyframes popIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.hide_posts_icons {
  transition: 1s;
  display: none !important;
}
.edit_posts{
  font-size: 14px !important;
  background-color:rgb(51, 188, 247) !important;
  position: absolute;
  right: 60px;
  bottom: 15px;
  cursor: pointer;
  display: none;
}
.delete_posts{
  font-size: 14px !important;
  position: absolute;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
  display: none;
}
.FeedCard {
  overflow: hidden;
}
.ViewMoreIcon {
  padding-left: 25px;
  padding-right: 25px;
  background-color: #f2470f !important;
  color: white !important;
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute !important;
  bottom: 0px !important;
  right: -100%;
  cursor: pointer;
}
.ViewMoreIcon i{
  font-size: 14px;
  color: white !important;
}
.data_header {
  display: flex !important;
  align-items: center !important;
}
.cards {
  border: 1px solid rgb(212, 212, 212);
}
.notFocused {
  background: none;
}
.focused {
  transition: 0.5s;
  background: rgb(51, 188, 247);
  padding-top: 10px;
  padding-bottom: 10px;
}
.jobCard {
  border-radius: 0px;
}
.locationIcon {
  color: #f2470f !important;
  font-size: 14px !important;
}
.skills {
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: rgb(51, 188, 247);
  border: 1px solid rgb(51, 188, 247);
  color: white;
  border-radius: 15px;
  margin: 2px;
}
.skillsPadding {
  margin: 0px;
  padding-bottom: 0px;
}
.locationbid {
  margin-bottom: 0px !important;
}
.jobBoard {
  margin-top: 72px !important;
}
.jobnav {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: rgb(51, 188, 247);
}
.board_header_container {
  display: flex;
  min-height: 70px;
  padding: 15px;
  align-items: center;
}
.exit_view_more {
  margin-top: -15px;
  margin-left: -12px;
  padding: 5px;
  font-size: 14px !important;
  border: 1px solid rgb(51, 188, 247);
  border-radius: 50%;
  color: rgb(51, 188, 247) !important;
  cursor: pointer;
  z-index: 11;
  background:rgb(240, 240, 240);
}
.exit_view_more:hover {
  color: white !important;
  background-color: rgb(51, 188, 247) !important;
}
.MoreInfoWrapper {
  height: calc(100% - 72px) !important;
  width: 100% !important;
  position: fixed;
  left: 100%;
  top: 72px !important;
  z-index: 10;
  background: rgba(95, 92, 92, 0.4);
}
.moreInfo {
  padding: 15px;
  height: calc(100% - 72px) !important;
  position: fixed !important;
  top: 72px;
  left: 100% !important;
  background: rgb(240, 240, 240);
  width: 80% !important;
  z-index: 10 !important;
  overflow-y: scroll;
  border: 1px solid rgb(211, 200, 200);
  direction: rtl;
}
.moreInfo::backdrop {
  width: 100%;
  background: #f2470f !important;
}
.ViewMoreTitle {
  margin-top: -15px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  font-size: 15px;
  border-radius: 0px;
  direction: ltr;
}
.ViewMoreCard{
  direction: ltr;
}
.ViewMoreFooter{
  padding: 15px;
  border-top: none;
  background: none;
}
.ViewMoreBody{
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 15px;
  background: none;
  padding-right: 15px;
  
}
.ViewMoreHeader{
  padding: 15px;
  border-bottom: none;
  background: none;
}
@media (max-width: 576px) {
  .board_header_container {
    display: block;
    text-align: center;
  }
  .jobnav_container {
    width: 100% !important;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.moreInfo::-webkit-scrollbar {
  width: 7px;
}
.moreInfo::-webkit-scrollbar-track {
  background: rgb(240, 237, 235);
  margin-bottom: 10px;
}
.moreInfo::-webkit-scrollbar-thumb {
  background-color: #c7cbcc;
  border-radius: 20px;
  border: 0px;
}
.translator{
  overflow-y: scroll;
  height: 600px;
}
.translator::-webkit-scrollbar {
  width: 7px;
}
.translator::-webkit-scrollbar-track {
  background: rgb(240, 237, 235);
}
.translator::-webkit-scrollbar-thumb {
  background-color: #c7cbcc;
  border-radius: 20px;
  border: 0px;
}
.translator, .organization{
  overflow-y: scroll;
  height: 600px;
}
.organization::-webkit-scrollbar {
  width: 7px;
}
.organization::-webkit-scrollbar-track {
  background: rgb(240, 237, 235);
}
.organization::-webkit-scrollbar-thumb {
  background-color: #c7cbcc;
  border-radius: 20px;
  border: 0px;
}
</style>
