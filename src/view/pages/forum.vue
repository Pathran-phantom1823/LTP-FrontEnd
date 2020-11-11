<template>
  <div>
    <v-sheet
      style="background: linear-gradient(to bottom, #33bcf7 20%, #ffffff 100%)"
      height="300"
    >
      <b-row>
        <b-col class="mt-20">
          <center>
            <h1 style="font-size: 50px; color: white">Forums</h1>
            <v-form class="ml-2 mt-10 mr-2">
              <v-text-field
                v-model="search"
                label="Search Forum"
                dark
                flat
                solo-inverted
                hide-details
                clearable
                clear-icon="mdi-close-circle-outline"
              ></v-text-field>
            </v-form>
          </center>
        </b-col>
        <b-col>
          <v-img
            src="../../../public/media/bg/Service3.png"
            width="500"
          ></v-img>
        </b-col>
      </b-row>
    </v-sheet>
    <v-container fluid class="pt-30">
      <v-btn color="blue" dark large @click.stop="dialog = true">
        <v-icon>mdi-android-messages</v-icon>Add Forum
      </v-btn>
      <v-list two-line>
        <v-list-item-group active-class="blue--text" multiple>
          <div v-for="item in filteredForum" :key="item.id">
            <v-card>
              <v-list-item>
                <template>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h1>{{ item.topic }}</h1>
                    </v-list-item-title>

                    <v-list-item-subtitle class="text--primary">
                      <p>{{ item.description }}</p>
                    </v-list-item-subtitle>

                    <v-list-item-subtitle
                      >{{
                        item.numberOfComments
                      }}
                      comments</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text>{{
                      item.datePosted
                    }}</v-list-item-action-text>
                    <v-icon
                      color="grey lighten-1"
                      active-class="blue--text"
                      @click="redirect('/user/forumdetails/' + item.postId)"
                      >> mdi-forum-outline
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-card>
            <br />
          </div>
        </v-list-item-group>
      </v-list>

      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title class="headline"> Post New Forum </v-card-title>

          <v-card-text>
            <label for="textarea-small">Topic:</label>
            <b-input
              v-model="topic"
              id="inline-form-input-name"
              class="mb-12 mr-sm-12 mb-sm-0"
            ></b-input
            ><br />

            <label for="textarea-default">Description:</label>
            <b-form-textarea
              v-model="description"
              class="mb-12 mr-sm-12 mb-sm-0"
              id="textarea-default"
            ></b-form-textarea>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false"> Cancel </v-btn>

            <v-btn color="info" @click="post"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      dialog: false,
      topic: null,
      description: null,
      forumData: [],
      search: "",
    };
  },
  computed: {
    returnGetForum() {
      return this.forumData;
    },
    filteredForum() {
      return this.forumData.filter((el) => {
        return el.topic.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.retrieveForum();
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
    post() {
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);
      ApiService.post("post", {
        accountId: userID,
        topic: this.topic,
        description: this.description,
      }).then(() => {
        Swal.fire({
          title: "",
          text: "Successfully created new forum",
          icon: "success",
          confirmButtonClass: "btn btn-secondary",
        });
        this.retrieveForum()
      });
    },
    retrieveForum() {
      if(localStorage.getItem('id_token') === null){
      ApiService.get("getPost").then((res) => {
        console.log(res.data);
        this.forumData = res.data;
      });
      }else{
       ApiService.get("getPostwithAuth").then((res) => {
        console.log(res.data);
        this.forumData = res.data;
      }); 
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
