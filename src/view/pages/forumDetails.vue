<template>
  <div>
    <br />
    <v-col>
      <p class="forum_title">Forum</p>
    </v-col>
    <div>
      <div class="card FeedCard">
        <div class="card-body dataBody">
          <b class="emphasizeWords">Topic: </b>
          <b class="emphasizeWords navItems">{{ forumDetails.title }}</b>
          <p>
            Posted by:
            <span>
              {{ forumDetails.postedBy }}
            </span>
            <br />
            Posted Date:
            <span>
              {{ forumDetails.datePosted }}
            </span>
          </p>
          <p class="card-text descriptionText">
            {{ forumDetails.description }}
          </p>
          <hr />
          <div
            class="commentSection"
            v-for="a in forumDetails.comments"
            :key="a.id"
          >
            <v-row class=".col-5">
              <b class="replyNames">{{ a.commentedBy }} </b>
              <br />
              <p class="card-text descriptionText">
                Commented Date:
                <span class="commentDate">{{ a.commentDate }}</span>
                <br />
                {{ a.commentDetails }}
              </p>
              <br />
            </v-row>
          </div>
          <center>
            <v-col class="col-11">
              <v-text-field
                outlined
                label="Reply"
                class="searchBox"
                append-icon="mdi-message-text"
                dense
                clearable
                rounded
                color="blue lighten-1"
              ></v-text-field>
            </v-col>
          </center>
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
      forumDetails: {
        postedBy: "Hannah Chuchu",
        title: "Tips in localizing in a certain country",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        datePosted: "September 1, 2020",
        comments: [
          {
            id: 1,
            commentedBy: "Commentator 1",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
          },
          {
            id: 2,
            commentedBy: "Commentator 2",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
          },
          {
            id: 3,
            commentedBy: "Commentator 3",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
          },{
            id: 4,
            commentedBy: "Commentator 4",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 32, 2020",
          }
        ],
      },
    };
  },
  methods: {
    redirect(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
    saveJob(e) {
      if (e.target.className === "mdi mdi-heart-outline") {
        e.target.className = "mdi mdi-heart";
      } else {
        e.target.className = "mdi mdi-heart-outline";
      }
    },
  },
};
</script>
<style scoped>
.commentDate {
  font-size: 13px;
  color: cornflowerblue;
}
.replyArea {
  width: 300px;
  height: 30px;
}
.commentSection {
  margin-left: 80px;
}
.likeEmoticon {
  color: #f2470f;
}

.likeEmoticon {
  width: 40px;
  text-align: right;
  font-size: 20px;
}
.likeEmoticon i {
  color: #f2470f;
}
.likeEmoticon:hover {
  cursor: pointer;
}
.likeEmoticon:active {
  transform: scaleY(1.2);
}
.forum_title {
  padding-top: 50px;
  font-size: 35px;
  padding-bottom: 0px;
  margin-bottom: 0px !important;
}
.emphasizeWords {
  font-weight: bold;
  font-size: 20px;
}
.replyNames {
  font-weight: bold;
  font-size: 15px;
}
</style>
