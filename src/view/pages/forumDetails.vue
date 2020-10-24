<template>
<div class="forumDetails">
    <v-card max-width="1200" class="mx-auto">
        <v-card-text>
            <b-card border-variant="primary">
                <v-card-title class="headline font-weight-bold">Topic: {{ forumDetails.topic }}
                </v-card-title>
                <v-card-subtitle class="text--primary text-justify ">Posted by: {{ forumDetails.username }} <br />Posted Date:
                    {{ forumDetails.datePosted}}</v-card-subtitle>
                <v-card-subtitle>
                    <span class=" mx-12  text-center text-justify">{{
            forumDetails.description
          }}</span>
                </v-card-subtitle>
            </b-card>
            <hr />
            <b-card style="overflow-y:auto">
                <div v-for="(comment, index) in getComments" :key="index" max-width="200">
                    <b-card no-body border-variant="warning">
                        <b-row>
                            <b-col sm="10">
                                <v-list-item two-line>
                                    <v-list-item-avatar>
                                        <v-avatar>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John">
                                        </v-avatar>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{comment.username}}</v-list-item-title>
                                        <v-list-item-subtitle>{{comment.comment}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </b-col>
                            <b-col sm="2">
                                <v-list-item two-line>
                                    <v-list-item-avatar>
                                        <v-btn icon  @click="changeLikeColor($event,comment.id)">
                                          <i :class="liked === true  ? 'mdi mdi-thumb-up' : 'mdi mdi-thumb-up-outline'" id="btnLike"></i>
                                        </v-btn>
                                    </v-list-item-avatar>
                                    <v-list-item-content v-if="comment.likes !== 0">
                                        <v-list-item-title>{{ comment.likes }}</v-list-item-title>
                                        <!-- <v-list-item-subtitle>{{comment.comment}}</v-list-item-subtitle> -->
                                    </v-list-item-content>
                                </v-list-item>
                                <!-- <p class="likeNumber">{{ comment.likes }}</p> -->
                            </b-col>
                        </b-row>
                        <!-- <b class="ml-12 text--primary font-weight-bold">
                    {{ comment.username }} </b>
                <p class="ml-12 text--primary font-weight-light">
                    {{ comment.comment }}
                </p>
                <div class="btnLike">
                    <i class="mdi mdi-thumb-up-outline" @click="changeLikeColor"></i>
                    <p class="likeNumber">{{ comment.likes }}</p>
                </div> -->
                    </b-card>
                    <br />
                </div>
            </b-card>
            <center>
                <v-text-field outlined label="Reply" class="searchBox" append-icon="mdi-message-text" dense clearable rounded color="blue lighten-1" v-model="comment"></v-text-field>
                <v-btn @click="sendComment(forumDetails.transactionId)">Send</v-btn>
            </center>
        </v-card-text>
    </v-card>
    <br />
</div>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
    data() {
        return {
            comment: null,
            dialog: false,
            forumDetails: [],
            comments: [],
            liked: false,
            userID:null,
        };
    },
    computed: {
        getComments() {
            return this.comments
        },
    },
    mounted() {
        let id = this.$route.params.id
         
        console.log(id);
        ApiService.post("getForumDetails", {
            postId: id
        }).then(res => {
            console.log("data", res.data)
            this.forumDetails = res.data[0]
            this.retrieveComment()
        })

    },
    methods: {
        changeLikeColor(e,commentId) {
          const id = localStorage.getItem('value')
          this.userID = id.substr(id.lastIndexOf('*') + 1)
          ApiService.post("like", {
            commentId: commentId,
            likeById: this.userID
          })
            if (e.target.className === "mdi mdi-thumb-up-outline") {
                e.target.className = "mdi mdi-thumb-up";
                
            } else {
                e.target.className = "mdi mdi-thumb-up-outline";
            }
        },
        sendComment(transactionId) {
            // console.log(transactionId)
            const id = localStorage.getItem('value')
            const userID = id.substr(id.lastIndexOf('*') + 1)
            ApiService.post("saveComment", {
                postId: transactionId,
                commentedById: userID,
                comment: this.comment
            }).then(() => {
                this.retrieveComment();
            })
        },
        retrieveComment() {
            let id = this.$route.params.id
            const uId = localStorage.getItem('value')
            this.userID = uId.substr(uId.lastIndexOf('*') + 1)
            ApiService.post("getComment", {
                postId: id
            }).then(res => {
                console.log(res.data)
                this.comments = res.data      
                res.data.forEach(liked=> {
                  if(liked.likeById === null){
                    this.liked = false;
                  }else{
                    this.liked = (this.userID.toString() === liked.likeById.toString()) ? true : false;
                  }
                });
                // console.log("res", this.liked);
            })
        }
    }
};
</script>

<style scoped>
.forumDetails {
    margin-top: 130px;
}

#description {
    width: 20px !important;
}

#btnLike {
    color: #f2470f;
    font-size: 30px;
}
/* 
.likeNumber {
    margin-top: -20px;
    margin-left: 70px !important;
    font-size: 10px;
} */

.searchBox {
    width: 950px;
}
</style>
