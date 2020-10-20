<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-7">
            <p>New Jobs</p>
            <hr>
            <div class="projects_container">
                <div class="card project_card" v-for="jobs in returnAcceptedJobs" :key="jobs.id" @mouseenter="newJobsActionShow" @mouseleave="newJobsActionHide">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-sm-5 d-flex justify-content-start">
                                <v-avatar>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John">
                                </v-avatar>
                                <div class="ml-2">
                                    <p class="mb-0">{{jobs.username}}</p>
                                    <p class="mb-1">Location: India</p>
                                </div>
                            </div>
                            <div class="col-sm-7 p-0 new_project_info">
                                <div>
                                    <div class="mb-1">
                                        <b class="mb-2 project_info_title font-weight-normal">Title: {{jobs.title}}</b>
                                    </div>
                                    <div>
                                        <b class="project_info_price font-weight-normal">Price:
                                            <span v-if="jobs.fixedPrice !== null">${{jobs.fixedPrice}}</span>
                                            <span v-else>${{jobs.fromPrice}} - ${{jobs.toPrice}}</span>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref="new_job_action" class="new_job_action">
                            <b class="font-weight-normal new_job_action_element new_job_action_assign mr-2"><i class="mdi mdi-worker mr-2 text-white"></i> Assign </b>
                            <b class="font-weight-normal new_job_action_element new_job_action_details" @click="viewMore(true, jobs.id)"><i class="mdi mdi-eye mr-2 text-white"></i> Details </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-5">
            <p>Active Jobs</p>
            <hr>
            <div class="projects_container">
                <div class="card project_card" v-for="element in 8" :key="element">
                    <div class="card-body p-4">
                        <div class="col-sm-12 p-0 d-flex justify-content-start">
                            <v-avatar>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John">
                            </v-avatar>
                            <div class="ml-2">
                                <p class="mb-0">Name of Worker</p>
                                <p class="mb-1">Location: India</p>
                            </div>
                        </div>
                        <div class="col-sm-12 p-0 mt-2">
                            <div>
                                <div class="mb-1">
                                    <b class="mb-2 project_info_title font-weight-normal">Title: Translate Document</b>
                                </div>
                                <div class="mb-1">
                                    <b class="project_info_price font-weight-normal">Price: $100.00</b>
                                </div>
                                <div>
                                    <b class="project_info_details font-weight-normal" @click="viewMore(true)">Details</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 p-0 save_jobs_container">
        <p class="mb-0"> Saved and Posted Jobs </p>
        <hr>
        <div class="card">
            <div class="card-header board_header_container">
                <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
                    <a :ref="'nav' + index" class="jobnav" @click="navigateTo">{{jobheader}}</a>
                </div>
            </div>
            <div class="card-body pt-4 pb-4 save_jobs_body">
                <div class="row mb-1 cards FeedCard" v-for="(data, index) in returnData" :key="index" @mouseenter="showViewMore" @mouseleave="hideViewMore">
                    <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
                        <div class="card-body p-0 d-flex justify-content-between data_header">
                            <b class="mb-0">{{data.title}}</b>
                            <div class="saveJobIcon">
                                <i :class="(String(returnNavEvent.text).toLowerCase() === 'save jobs') ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'" @click="saveJob($event, index)" title="save job" v-if="String(returnNavEvent.text).toLowerCase() === 'save jobs'"></i>
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
                                    <b class="skills font-weight-normal">{{data.subject}}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 card p-0 jobCard">
                        <div class="card-body p-3 align-middle">
                            <p class="card-text pt-2">
                                <b class="pr-2">Description :</b>
                                {{(!data.description.length >= 200) ? data.description : data.description.substring(0, 200)}}
                                <b class="view_more_truncate" v-if="data.description.length >= 200" @click="viewMore(true)">...view more</b>
                            </p>
                            <div class="col-sm-12 skillsPadding">
                                <div class="row">
                                    Current Language of document: 
                                    <b class="skills" v-for="(language, index) in data.languageFrom" :key="index">{{language}}</b>
                                </div>
                            </div>
                            <p class="card-text mb-0 mt-3">
                                <b>Price:</b>
                                <span v-if="data.fixedPrice !== null">${{data.fixedPrice}}</span>
                                <span v-else>${{data.fromPrice}} - ${{data.toPrice}}</span>
                            </p>
                            <p class="card-text locationbid mt-2">Bids: 0</p>
                            <p class="ViewMoreIcon" @click="redirect('/user/review_bids')" v-if="String(returnNavEvent.text).toLowerCase() === 'posted jobs'">
                                <v-icon title="review bids">mdi mdi-eye</v-icon>view bids
                            </p>
                            <v-avatar class="edit_posts" size="36">
                                <v-icon title="edit" class="white--text headline">mdi mdi-lead-pencil</v-icon>
                            </v-avatar>
                            <v-avatar class="delete_posts" color="red accent-3" size="36">
                                <v-icon title="delete" class="white--text headline">mdi mdi-delete-forever</v-icon>
                            </v-avatar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-12 p-0">
        <p class="mb-0"> Job History </p>
        <hr>
        <v-card>
            <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="project" :search="search"></v-data-table>
        </v-card>
    </div>

    <div ref="MoreInfoWrapper" class="MoreInfoWrapper">
      <div ref="moreInfo" class="moreInfo">
        <v-icon class="exit_view_more" @click="viewMore(false)">mdi mdi-close</v-icon>
        <div class="card ViewMoreTitle mb-3">
          <b>{{jobsDetails.title}}</b>
        </div>
        <div class="card ViewMoreCard pt-3">
    <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
          </div>-->

    <div class="card-body ViewMoreBody">
            <p class="card-text mb-3">
              <b>Price:</b>
              <span v-if="jobsDetails.fixedPrice !== null">${{jobsDetails.fixedPrice}}</span>
              <span v-else>${{jobsDetails.fromPrice}} - {{jobsDetails.toPrice}}</span>
            </p>
            <p class="card-text">
              <b>Description :</b>{{jobsDetails.description}}
            </p>
            <div class="col-sm-12 skillsPadding">
              <div class="row">
                <b
                  class="skills"
                >{{jobsDetails.languageTo}}</b>
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
                  <b>{{jobsDetails.username}}</b>
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
                <b class="skills" v-for="skill in 1" :key="skill">Arts Crafts</b>
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
import ApiService from "@/core/services/api.service";
export default {
    data() {
        return {
            boardHeader: [
                "Save Jobs"
            ],
            newPojects: [],
            activeProjects: [],
            data: [],
            acceptedJobs: [],
            jobsDetails: [],
            navEvent: "",
            search: '',
            headers: [{
                    text: 'Project Name',
                    align: 'start',
                    filterable: true,
                    value: 'name',
                },
                {
                    text: 'Assigned to:',
                    value: 'assignedTo'
                },
                {
                    text: 'Date',
                    value: 'date'
                },
                {
                    text: 'Location',
                    value: 'location'
                },
                {
                    text: 'Price',
                    value: 'price'
                },
            ],
            project: [{
                    name: 'Premiere Mechanical for the Global Medical Industry',
                    assignedTo: 'Steve Jobs',
                    date: '9/24/2020',
                    location: 'Philippines',
                    price: '$300.0',
                },
                {
                    name: 'Premiere Mechanical for the Global Art Industry',
                    assignedTo: 'Steve Jobs',
                    date: '9/24/2020',
                    location: 'Philippines',
                    price: '$300.0',
                },
                {
                    name: 'Premiere Mechanical for the Global Agriculture Industry',
                    assignedTo: 'Steve Jobs',
                    date: '9/24/2020',
                    location: 'Philippines',
                    price: '$300.0',
                }
            ],
        };
    },
    components: {},
    mounted() {
        this.$refs["nav0"][0].click();

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

        ApiService.post("getacceptedjobs", {
            savedById: userID
        }).then(res => {
            console.log(res.data);
            this.acceptedJobs = res.data
        })
    },
    computed: {
        returnNavEvent() {
            return this.navEvent;
        },
        returnData() {
            return this.data;
        },
        returnAcceptedJobs() {
            return this.acceptedJobs
        }
    },
    methods: {
        newJobsActionShow(e) {
            e.target.children[0].children[1].style = 'transition: .5s; right: 0 !important;'
        },
        newJobsActionHide(e) {
            e.target.children[0].children[1].style = 'transition: .5s; right: -100% !important;'
        },
        showViewMore(e) {
            if (String(this.navEvent.text).toLowerCase() === "posted jobs") {
                let target = e.target.children[2].children[0].children;
                target[5].classList.remove("hide_posts_icons");
                target[5].classList.add("show_posts_icons");
                target[6].classList.remove("hide_posts_icons");
                target[6].classList.add("show_posts_icons");
                target[4].style = "transition: .5s; right: 0 !important;";
            }
        },
        hideViewMore(e) {
            if (String(this.navEvent.text).toLowerCase() === "posted jobs") {
                let target = e.target.children[2].children[0].children;
                target[5].classList.add("hide_posts_icons");
                target[5].classList.remove("show_posts_icons");
                target[6].classList.add("hide_posts_icons");
                target[6].classList.remove("show_posts_icons");
                target[4].style = "transition: .5s; right: -100% !important;";
            }
        },
        navigateTo(e) {
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
        },
        saveJob(index) {
            console.log("removing from save jobs", index);
        },
        viewMore(ViewEvent, data) {
            if (ViewEvent) {
                ApiService.get("getJob", data).then(res => {
                    console.log(res);
                    this.jobsDetails = res.data[0]
                    console.log("feedDetails", this.feedDetails);
                })
                this.$refs["MoreInfoWrapper"].style = "left: 0 !important";
                this.$refs["moreInfo"].style =
                    "transition: .5s !important; left: 30% !important";
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
.new_job_action_assign {
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    border: 1px solid rgb(223, 223, 223);
}

.new_job_action_details {
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    border: 1px solid rgb(223, 223, 223);
}

.new_job_action_element {
    display: flex;
    align-items: center;
    background-color: rgb(51, 188, 247) !important;
    color: white !important;
}

.new_job_action {
    display: flex;
    align-items: center;
    position: absolute !important;
    bottom: 5px !important;
    right: -100%;
}

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

.notFocused {
    background: none;
}

.focused {
    transition: 0.5s;
    background: rgb(51, 188, 247);
    padding-top: 10px;
    padding-bottom: 10px;
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

.save_jobs_body {
    height: 400px;
    overflow-y: scroll;
    font-size: 12px !important;
}

.save_jobs_container {
    margin-top: 50px;
    margin-bottom: 30px;
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

.MoreInfoWrapper {
    height: 100vh !important;
    width: 100% !important;
    position: fixed;
    left: 100%;
    top: 0px !important;
    z-index: 96;
    background: rgba(95, 92, 92, 0.4);
}

.moreInfo {
    padding: 15px;
    height: calc(100% - 65px) !important;
    position: fixed !important;
    top: 65px;
    left: 100% !important;
    background: rgb(240, 240, 240);
    width: 70% !important;
    z-index: 99 !important;
    overflow-y: scroll;
    border: 1px solid rgb(211, 200, 200);
    direction: rtl;
}

.moreInfo::backdrop {
    width: 100%;
    background: #f2470f !important;
}

.view_more_truncate {
    color: rgb(51, 188, 247);
    cursor: pointer;
}

.ViewMoreFooter {
    padding: 15px;
    border-top: none;
    background: none;
}

.locationIcon {
    color: #f2470f !important;
    font-size: 14px !important;
}

.locationbid {
    margin-bottom: 0px !important;
}

.saveJobIcon i {
    width: 40px;
    text-align: right;
    font-size: 20px;
    color: #f2470f !important;
    cursor: pointer;
}

.data_header {
    display: flex !important;
    align-items: center !important;
}

.jobCard {
    border-radius: 0px;
}

.cards {
    border: 1px solid rgb(212, 212, 212);
}

.FeedCard {
    overflow: hidden;
}

.project_info_price {
    padding-left: 2px;
    padding-right: 30px;
    padding-top: 2px;

    padding-bottom: 2px;
    background-color: #f2470f;
    color: white;
    /* position: absolute;
  top: 50%;
  left: 0;
  margin-right: -50%;
  transform: translate(0, -50%) */
}

.project_info_title {
    padding-left: 2px;
    padding-right: 30px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: #ffa800;
    color: white;
}

.project_info_details {
    padding-left: 2px;
    padding-right: 30px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: rgb(51, 188, 247) !important;
    color: white;
}

.new_project_info {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
}

.new_project_info_wrapper {
    width: 100%;
    height: 100% !important;
}

.projects_container {
    height: 350px;
    overflow-y: scroll;
}

.project_card {
    border-radius: 0px;
    margin-bottom: 2px;
    overflow: hidden;
}

.projects_container::-webkit-scrollbar {
    width: 7px !important;
}

.projects_container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230);
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.projects_container::-webkit-scrollbar-thumb {
    background-color: #c7cbcc !important;
    border-radius: 20px !important;
    border: 0px !important;
}

.moreInfo::-webkit-scrollbar {
    width: 7px !important;
}

.moreInfo::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230) !important;
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.moreInfo::-webkit-scrollbar-thumb {
    background-color: #c7cbcc !important;
    border-radius: 20px !important;
    border: 0px !important;
}

.save_jobs_body::-webkit-scrollbar {
    width: 7px !important;
}

.save_jobs_body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230) !important;
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.save_jobs_body::-webkit-scrollbar-thumb {
    background-color: #c7cbcc !important;
    border-radius: 20px !important;
    border: 0px !important;
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
</style>
