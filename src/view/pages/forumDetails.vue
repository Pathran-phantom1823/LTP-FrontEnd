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
            <v-list two-line>
                <v-list-item-group multiple>
                    <div v-for="comment in getComments" :key="comment.id">
                        <v-card>
                            <v-list-item>
                                <template>
                                    <v-list-item-avatar>
                                        <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <h5>{{comment.username}}</h5>
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="text--primary" v-text="comment.comment"></v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-list-item-action-text>{{comment.likes }}</v-list-item-action-text>

                                        <v-icon color="yellow darken-3" @click="changeLikeColor($event,comment.id)">
                                            {{comment.status !== 'like' || comment.username !== currentUser ? 'mdi-thumb-up-outline' : 'mdi-thumb-up'}}
                                        </v-icon>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </v-card><br>
                    </div>
                </v-list-item-group>
            </v-list>
            <br>
            <center>
                <span style="color:red">{{error}}</span>
                <v-text-field v-model="comment" append-outer-icon="mdi-send" filled clear-icon="mdi-close-circle" clearable rounded label="Message" type="text" @click:append-outer="sendComment(forumDetails.transactionId)"></v-text-field>
                <!-- <v-text-field outlined label="Reply" class="searchBox" append-icon="mdi-message-text" dense clearable rounded color="blue lighten-1" v-model="comment"></v-text-field>
                <v-btn @click="sendComment(forumDetails.transactionId)">Send</v-btn> -->
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
            userID: null,
            error: null,
            currentUser: null
        };
    },
    computed: {
        getComments() {
            return this.comments
        },
        isLike() {
            return this.liked
        }
    },
    mounted() {
        let id = this.$route.params.id

        console.log(id);
        ApiService.post("getForumDetails", {
            postId: id
        }).then(res => {
            // console.log("data", res.data)
            this.forumDetails = res.data[0]
            this.retrieveComment()
            this.retrieveLikes(),
            this.retrieveCurrentUser()
        })

    },
    methods: {
        changeLikeColor(e, commentId) {
            const id = localStorage.getItem('value')
            this.userID = id.substr(id.lastIndexOf('*') + 1)
            // let status = null;
            ApiService.post("like", {
                commentId: commentId,
                likeById: this.userID,
                status: "like"
            }).then(() => {
                this.liked = !this.liked
                this.retrieveComment()
            })
        },
        sendComment(transactionId) {
            // console.log(transactionId)
            if (this.comment !== null) {
                const id = localStorage.getItem('value')
                const userID = id.substr(id.lastIndexOf('*') + 1)
                ApiService.post("saveComment", {
                    postId: transactionId,
                    commentedById: userID,
                    comment: this.comment
                }).then(() => {
                    this.error = null
                    this.retrieveComment();
                    this.retrieveLikes();
                })
            } else {
                this.error = "Field is empty"
            }
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
                // console.log("res", this.liked);
            })
        },
        retrieveLikes() {
            ApiService.get("getLikes").then(res => {
                // console.log("likes", res);
                res.data.map(el => {
                    this.comments.map(com => {
                        console.log();
                        if(el.likeById.toString() === this.userID.toString() && com.id.toString() === el.commentId.toString()){
                            this.liked = true
                            // console.log(true);
                        }else{
                            this.false
                            // console.log(false);
                        }
                    })
                })
            })
        },
        retrieveCurrentUser() {
            const id = localStorage.getItem('value')
            this.userID = id.substr(id.lastIndexOf('*') + 1)
            ApiService.post("getCurrentUser", {
                id: this.userID
            }).then(res => {
                this.currentUser = res.data[0]
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
