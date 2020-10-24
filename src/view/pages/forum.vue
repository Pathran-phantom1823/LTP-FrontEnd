<template>
  <div class="forum">
    <div>
      <p class="forum_title">Forum</p>
      <v-text-field
        outlined
        class="searchBox"
        append-icon="mdi-magnify"
        dense
        clearable
        color="blue lighten-1"
      ></v-text-field>
      <div>
        <b-button
          id="toggle-btn "
          @click="toggleModal"
          variant="primary"
          class="btnAddPostFourm"
          >POST TO FORUM</b-button
        >
        <b-modal
          ref="my-modal"
          hide-footer
          title="Ask Question to Forum"
          style="width:900px;"
        >
          <b-container fluid style="height:200px;">
            <b-row>
              <b-col>
                <label for="textarea-small">Topic:</label>
              </b-col>
              <b-col sm="12">
                <b-input
                  v-model="topic"
                  id="inline-form-input-name"
                  class="mb-12 mr-sm-12 mb-sm-0"
                ></b-input>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-col sm="2">
                <label for="textarea-default">Description:</label>
              </b-col>
              <b-col sm="12">
                <b-form-textarea v-model="description" class="mb-12 mr-sm-12 mb-sm-0"
                  id="textarea-default"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row>
              <b-button variant="danger" id="btnCancel" @click="hideModal"
                >CANCEL</b-button
              >
              <b-button variant="primary" id="btnAddPost" @click="post">
                POST</b-button
              >
            </b-row>
          </b-container>
        </b-modal>
      </div>
    </div>
    <div class="card FeedCard" v-for="(data, index) in returnGetForum" :key="index">
      <div class="card-body dataBody">
        <b class="emphasizeWords">Topic: </b>
        <b
          class="emphasizeWords navItems"
          @click="redirect('/user/forumdetails/' + data.postId)"
          >{{ data.topic }}</b
        >
        <p style="font-weight:bold;">
          {{ data.datePosted }}<br />
          Comments: 200 Comments
        </p>
        <p class="card-text descriptionText">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      dialog: false,
      topic: null,
      description: null,
      forumData: [
        // {
        //   id: 1,
        //   title: "Tips in localizing in a certain country",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        //   datePosted: "September 1, 2020",
        // },
        // {
        //   id: 2,
        //   title: "Premeiere Translation for the Global Agriculture Industry",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        //   datePosted: "September 2, 2020",
        // },
        // {
        //   id: 3,
        //   title: "Premeiere Translation for the Global Agriculture Industry",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        //   datePosted: "September 1, 2020",
        // },
        // {
        //   id: 4,
        //   title: "Premeiere Translation for the Global Agriculture Industry",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        //   datePosted: "September 1, 2020",
        // },
        // {
        //   id: 5,
        //   title: "Premeiere Translation for the Global Agriculture Industry",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius blandit nibh. Suspendisse eu congue lorem. Suspendisse pellentesque ac tortor eget efficitur. Fusce feugiat vestibulum nisi at dignissim. Vivamus auctor purus in turpis facilisis mattis. Fusce posuere ante ante, in bibendum ante dignissim vestibulum. Quisque nibh turpis, tincidunt non bibendum non, mattis bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tristique hendrerit. Sed ac libero vel ante lobortis sagittis. Nulla mollis velit in tellus ullamcorper, id euismod sapien laoreet. Donec convallis urna quis nulla viverra faucibus. Nunc sed risus quis mauris pellentesque egestas a ac est. Cras ac enim vitae libero placerat dignissim. Quisque tempus vel augue non vehicula. Cras egestas neque nisi, a semper libero vehicula sit amet.",
        //   datePosted: "September 1, 2020",
        // },
      ],
    };
  },
  computed: {
    returnGetForum(){
      return this.forumData
    }
  },
  mounted(){
    ApiService.get("getPost").then(res => {
      console.log(res.data)
      this.forumData = res.data
    })
  },
  methods: {
    redirect(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    post(){
      const id = localStorage.getItem('value')
      const userID = id.substr(id.lastIndexOf('*') + 1)
      ApiService.post("post",{
        accountId: userID,
        topic: this.topic,
        description: this.description,
      }).then(res => {
        console.log(res.data);
      })
    }
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
  width: 700px !important;
  position: absolute;
  top: 130px;
  left: 340px;
  /* float: right; */
}
.btnAddPostFourm {
  position: absolute;
  top: 130px;
  left: 1070px;
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
.titleLabel {
  font-size: 15px;
}
.forum {
  margin-top: 80px;
}
#btnAddPost {
  position: absolute;
  top: 190px;
  left: 380px !important;
}
#btnCancel {
  position: absolute;
  top: 190px;
  left: 280px !important;
}
</style>
