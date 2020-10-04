<template>
  <div class="forumDetails">
    <v-card max-width="1200" class="mx-auto">
      <v-card-text>
        <v-card-title class="headline font-weight-bold"
          >Topic: {{ forumDetails.title }}
        </v-card-title>
        <v-card-subtitle class="text--primary text-justify "
          >Posted by: {{ forumDetails.postedBy }} <br />Posted Date:
          {{ forumDetails.datePosted }}</v-card-subtitle
        >
        <v-card-subtitle>
          <span class=" mx-12  text-center text-justify">{{
            forumDetails.description
          }}</span>
          <hr />
        </v-card-subtitle>
        <div v-for="a in forumDetails.comments" :key="a.id" max-width="200">
          <v-card-sutitle class="mx-12 text--primary font-weight-bold">
            {{ a.commentedBy }} </v-card-sutitle
          ><br />
          <v-card-sutitle class="mx-12 text--primary font-weight-light">
            {{ a.commentDetails }}
          </v-card-sutitle>
          <div class="btnLike">
            <i class="mdi mdi-thumb-up-outline" @click="changeLikeColor"></i>
            <p class="likeNumber">{{ a.like }}</p>
          </div>
          <br />
        </div>
        <center>
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
        </center>
      </v-card-text>
    </v-card>
    <br />
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
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
            like: 100,
          },
          {
            id: 2,
            commentedBy: "Commentator 2",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
            like: 300,
          },
          {
            id: 3,
            commentedBy: "Commentator 3",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 1, 2020",
            like: 200,
          },
          {
            id: 4,
            commentedBy: "Commentator 4",
            commentDetails:
              "The French language is the only language besides English to be present on five continents.The French language is the only language besides English to be present on five continents.",
            commentDate: "October 32, 2020",
            like: 100,
          },
        ],
      },
    };
  },
  methods: {
    changeLikeColor(e) {
      if (e.target.className === "mdi mdi-thumb-up-outline") {
        e.target.className = "mdi mdi-thumb-up";
      } else {
        e.target.className = "mdi mdi-thumb-up-outline";
      }
    },
  },
};
</script>
<style scoped>
.forumDetails {
  margin-top: 130px;
}
#description {
  width: 20px !important;
}
.btnLike i {
  color: #f2470f;
  margin-bottom: 20px;
  margin-left: 50px;
  font-size: 15px;
}
.likeNumber {
  margin-top: -20px;
  margin-left: 70px !important;
  font-size: 10px;
}
.searchBox {
  width: 950px;
}
</style>
