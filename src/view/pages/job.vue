<template>
<div class="jobBoard">
    <div class="d-flex justify-content-between">
        <p class="job_board_title">Job Board</p>
        <v-btn rounded color="primary" class="post_job" dark>
            <v-icon dark class="post_job_icon">mdi-plus</v-icon>post a job
        </v-btn>
    </div>
    <div class="card mb-20">
        <div class="card-header board_header_container">
            <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
                <a :ref="'nav' + index" class="jobnav" @click="navigateTo($event, jobheader)">{{jobheader}}</a>
            </div>
        </div>
        <div class="card-body pt-4 pb-4">
            <div class="row mb-1 cards FeedCard" v-for="data in returnData" :key="data.id" @mouseenter="showViewMore" @mouseleave="hideViewMore">
                <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
                    <div class="card-body p-0 d-flex justify-content-between data_header">
                        <b class="mb-0">{{data.title}}</b>
                        <div class="saveJobIcon">
                            <i :class="(String(returnNavEvent.text).toLowerCase() === 'save jobs') ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'" @click="saveJob($event, index)" title="save job" v-if="String(returnNavEvent.text).toLowerCase() === 'active contracts' || String(returnNavEvent.text).toLowerCase() === 'save jobs'"></i>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 card p-0 jobCard">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-start mt-2 mb-3">
                            <v-avatar>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John">
                            </v-avatar>
                            <div class="ml-2">
                                <p class="card-text mb-0 pt-1">
                                    <b>{{data.username}}</b>
                                </p>
                                <p class="locationbid">
                                    Location:
                                    <v-icon class="locationIcon">mdi-map-marker</v-icon>Philippines
                                </p>
                            </div>
                        </div>
                        <p class="card-text mb-1">
                            <b class="font-weight-normal">Date Posted:</b>{{data.datePosted}}
                        </p>
                        <p class="card-text mb-1">
                            <b class="font-weight-normal">Date Needed:</b>{{data.fromDate}} - {{data.toDate}}
                        </p>
                        <div class="col-sm-12 skillsPadding">
                            <div class="row">
                                <b class="mr-2 font-weight-normal">Category :</b>
                                <b class="skills">{{data.subject}}</b>
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
                                <b class="skills" v-for="(language, index) in data.languageFrom" :key="index">{{language}}</b>
                            </div>
                        </div>
                        <p class="card-text mb-0 mt-3">
                            <b>Price:</b>
                            <span v-if="data.fixedPrice !== null">${{data.fixedPrice}}</span>
                            <span v-else>${{data.fromPrice}} - ${{data.toPrice}}</span>
                        </p>
                        <p class="card-text locationbid mt-2">Bids: {{data.bids}}</p>
                        <p class="ViewMoreIcon" @click="redirect('/user/review_bids/' + data.id)" v-if="String(returnNavEvent.text).toLowerCase() === 'posted jobs'">
                            <v-icon title="review bids">mdi mdi-eye</v-icon>
                            view bids
                        </p>
                        <v-avatar class="edit_posts" size="36">
                            <v-icon title="edit" class="white--text headline">
                                mdi mdi-lead-pencil
                            </v-icon>
                        </v-avatar>
                        <v-avatar class="delete_posts" color="red accent-3" size="36">
                            <v-icon title="delete" class="white--text headline">
                                mdi mdi-delete-forever
                            </v-icon>
                        </v-avatar>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div ref="MoreInfoWrapper" class="MoreInfoWrapper">
        <div ref="moreInfo" class="moreInfo">
            <v-icon class="exit_view_more" @click="viewMore(false)">mdi mdi-close</v-icon>
            <div class="card ViewMoreTitle mb-3">
                <b>{{returnData[0].title}}</b>
            </div>
            <div class="card ViewMoreCard pt-3"> -->

    <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
          </div>-->

    <!-- <div class="card-body ViewMoreBody">
                    <p class="card-text mb-3">
                        <b>Price:</b>
                        {{returnData[0].price}}
                    </p>
                    <p class="card-text">
                        <b>Description :</b>Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
                        Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
                        Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents from farming machinery and crop science to agri trade with accuracy and speed.Translate all agricultural documents
                    </p>
                    <div class="col-sm-12 skillsPadding">
                        <div class="row">
                            <b class="skills" v-for="(skill, index) in returnData[0].skills" :key="index">{{skill}}</b>
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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John">
                        </v-avatar>
                        <div class="ml-2">
                            <p class="card-text">
                                <b>Steve Jobs</b>
                            </p>
                        </div>
                    </div> -->

    <!-- <b>Posted by: <b class="text-primary">Doom Bringer</b></b> -->

    <!-- </div>
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
                            <b class="skills" v-for="skill in 1" :key="skill">Arts Crafts</b>
                        </div>
                    </div>
                </div>
                <div class="card-footer ViewMoreFooter"></div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
    data() {
        return {
            boardHeader: [
                "Active Contracts",
                "Posted Jobs",
                "Save Jobs",
                "Contracts History"
            ],
            data: [],
            navEvent: "",
            iconDisplay: ""
        };
    },
    components: {},
    mounted() {
        this.$refs["nav0"][0].click();
    },
    computed: {
        returnNavEvent() {
            return this.navEvent;
        },
        returnData() {
            return this.data;
        }
    },
    methods: {
        showViewMore(e) {
            if (String(this.navEvent.text).toLowerCase() === 'posted jobs') {
                let target = e.target.children[2].children[0].children
                target[5].classList.remove('hide_posts_icons')
                target[5].classList.add('show_posts_icons')
                target[6].classList.remove('hide_posts_icons')
                target[6].classList.add('show_posts_icons')
                target[4].style = "transition: .5s; right: 0 !important;";
            }
        },
        hideViewMore(e) {
            if (String(this.navEvent.text).toLowerCase() === 'posted jobs') {
                let target = e.target.children[2].children[0].children
                target[5].classList.add('hide_posts_icons')
                target[5].classList.remove('show_posts_icons')
                target[6].classList.add('hide_posts_icons')
                target[6].classList.remove('show_posts_icons')
                target[4].style = "transition: .5s; right: -100% !important;";
            }
        },
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
        },
        saveJob(e, index) {
            if (e.target.className === "mdi mdi-heart-outline") {
                e.target.className = "mdi mdi-heart";
            } else {
                if (
                    String(this.navEvent.text).toLowerCase() === "save jobs" &&
                    e.target.className === "mdi mdi-heart"
                ) {
                    this.data.splice(index, 1);
                } else {
                    e.target.className = "mdi mdi-heart-outline";
                }
            }
        },
        navigateTo(e, value) {
            if (e.target !== this.navEvent) {
                e.target.parentNode.classList.add("focused");
                e.target.style = "color: white !important;";
                if (this.navEvent !== "") {
                    this.navEvent.parentNode.classList.add("notFocused");
                    this.navEvent.parentNode.classList.remove("focused");
                    this.navEvent.style = "color: rgb(51, 188, 247) !important;";
                }
            }
            this.navEvent = e.target;

            if (value === "Active Contracts") {
              this.data = []
            } else if (value === "Posted Jobs") {

                const id = localStorage.getItem('value')
                const userID = id.substr(id.lastIndexOf('*') + 1)
                ApiService.post("get-my-jobs", {
                    id: userID
                }).then(res => {
                    res.data.map(el => {
                        let tempres = el.languageFrom.replace(/,/g, ' ')
                        el.languageFrom = tempres.trim().split(' ')
                    })
                    this.data = res.data
                    // console.log(this.data)

                })
            } else if (value === "Save Jobs") {
                const id = localStorage.getItem('value')
                const userID = id.substr(id.lastIndexOf('*') + 1)
                ApiService.post("getsavejob", {
                    savedById: userID
                }).then(res => {
                    // console.log(res.data);
                    res.data.map(el => {
                        let tempres = el.languageFrom.replace(/,/g, ' ')
                        el.languageFrom = tempres.trim().split(' ')
                    })
                    this.data = res.data
                })
            }else{
              this.data = []
            }
        },
        redirect(url) {
            if (this.$route.path !== url) {
                this.$router.push(url)
            }
        }
    }
};
</script>

<style scoped>
.view_more_truncate {
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

.post_job {
    margin-top: 52px;
    background-color: #f2470f !important;
}

.job_board_title {
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
</style>
