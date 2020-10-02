<template>
  <div class="forum">
    <br /><br />
    <v-container cols="12">
      <v-row justify="space-around">
        <v-col>
          <p class="forum_title">Forum</p>
        </v-col>
        <v-col>
          <v-text-field
            outlined
            :label="searchLabel"
            class="searchBox"
            append-icon="mdi-magnify"
            dense
            clearable
            color="blue lighten-1"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-dialog
            v-model="dialog"
            persistent
            style="top:100px;"
            max-width="900px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="btnPostForum primary"
                v-bind="attrs"
                v-on="on"
              >
                POST TO FORUM
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="header">
                <span class="text-uppercase " bold
                  >Ask a question to forum</span
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field label="Topic" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-textarea label="Description" outlined></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" dark @click="dialog = false">
                  C A N C E L
                </v-btn>
                <v-btn color="success" dark  @click="dialog = false">
                  P O S T
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- End Forum Modal -->
        </v-col>
      </v-row>
    </v-container>
    <div>
      <div
        class="card FeedCard"
        v-for="(data, index) in forumData"
        :key="index"
      >
        <div class="card-body dataBody">
          <b class="emphasizeWords">Topic: </b>
          <b
            class="emphasizeWords navItems"
            @click="redirect('/user/forumdetails')"
            >{{ data.title }}</b
          >
          <p style="font-weight:bold;">{{ data.datePosted }}<br>
          Comments: 200 Comments
          </p>
          <p class="card-text descriptionText">{{ data.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      forumData: [
        {
          id: 1,
          title: "Tips in localizing in a certain country",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
          datePosted: "September 1, 2020",
        },
        {
          id: 2,
          title: "Premeiere Translation for the Global Agriculture Industry",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
          datePosted: "September 2, 2020",
        },
        {
          id: 3,
          title: "Premeiere Translation for the Global Agriculture Industry",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
          datePosted: "September 1, 2020",
        },
        {
          id: 4,
          title: "Premeiere Translation for the Global Agriculture Industry",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
          datePosted: "September 1, 2020",
        },
        {
          id: 5,
          title: "Premeiere Translation for the Global Agriculture Industry",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
          datePosted: "September 1, 2020",
        },
      ],
    };
  },
  methods: {
    redirect(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
  },
};
</script>
<style scoped>
.emphasizeWords {
  font-weight: bold;
  font-size: 17px;
}
.header {
  font-size: 20px;
}
.searchBox {
  padding-top: 50px !important;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  width: 780px !important;
  /* float: right; */
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
.edit_posts {
  font-size: 14px !important;
  background-color: rgb(51, 188, 247) !important;
  position: absolute;
  right: 185px;
  bottom: 15px;
  cursor: pointer;
  display: none;
}
.delete_posts {
  font-size: 14px !important;
  position: absolute;
  right: 140px;
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
.ViewMoreIcon i {
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
.saveJobIcon i {
  width: 40px;
  text-align: right;
  font-size: 20px;
  color: #f2470f !important;
  cursor: pointer;
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
.post_job_icon {
  font-size: 12px !important;
  padding: 2px !important;
  margin-right: 10px !important;
  border: 1px solid white;
  border-radius: 50%;
}
.btnPostForum {
  margin-top: 52px;
  float: right;
}
.forum_title {
  padding-top: 50px;
  font-size: 35px;
  padding-bottom: 0px;
  margin-bottom: 0px !important;
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
  background: rgb(240, 240, 240);
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
.ViewMoreCard {
  direction: ltr;
}
.ViewMoreFooter {
  padding: 15px;
  border-top: none;
  background: none;
}
.ViewMoreBody {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 15px;
  background: none;
  padding-right: 15px;
}
.ViewMoreHeader {
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

.titleLabel {
  font-size: 15px;
}
</style>
