<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-7">
            <p>New Jobs</p>
            <hr />
            <div class="projects_container">
                <div class="card project_card" v-for="(jobs, newNdx) in returnAcceptedJobs" :key="jobs.id" @mouseenter="newJobsActionShow" @mouseleave="newJobsActionHide">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-sm-5 d-flex justify-content-start">
                                <v-avatar>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                                </v-avatar>
                                <div class="ml-2">
                                    <p class="mb-0">Posted by:<span v-if="jobs.firstName === null || jobs.lastName === null"> {{ jobs.username }}</span>
                                    <span v-else>{{ jobs.firstName }} {{jobs.lastName}}</span> 
                                    </p>
                                    <p class="mb-1">Location: {{jobs.city}},{{jobs.country}}</p>
                                </div>
                            </div>
                            <div class="col-sm-7 p-0 new_project_info">
                                <div class="pl-4 pt-2">
                                    <div class="mb-1">
                                        <b class="mb-2 project_info_title font-weight-normal">Title: {{ jobs.title }}</b>
                                    </div>
                                    <div>
                                        <b class="project_info_price font-weight-normal">
                                            Price:
                                            <span v-if="jobs.fixedPrice !== null">${{ jobs.fixedPrice }}</span>
                                            <span v-else>${{ jobs.fromPrice }} - ${{ jobs.toPrice }}</span>
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref="new_job_action" class="new_job_action">
                            <button :id="'newJob' + newNdx" @click="selectMember">
                                <b class="font-weight-normal new_job_action_element new_job_action_assign mr-2" role="button">
                                    <i class="mdi mdi-worker mr-2 text-white"></i> Assign
                                </b>
                            </button>
                            <b class="font-weight-normal new_job_action_element new_job_action_details" @click="viewMore(true, jobs.id)">
                                <i class="mdi mdi-eye mr-2 text-white"></i> Details
                            </b>
                            <b-popover ref="popover" :target="'newJob' + newNdx" placement="left">
                                <b class="popover_close" @click="closePopOver">x</b>
                                <div class="assign-card-container">
                                    <div class="card assign-card" @click="assignJob(member.id, jobs.id, jobs.postedById)" v-for="member in getMembers" :key="member.id">
                                        <div class="card-body pl-2 pr-2 pt-1 pb-1 members">
                                            <v-avatar size="36">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                                            </v-avatar>
                                            <b class="font-weight-normal ml-2">{{
                          member.username
                        }}</b>
                                        </div>
                                    </div>
                                </div>
                            </b-popover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-5">
            <p>Active Jobs</p>
            <hr />
            <div class="projects_container">
                <div class="card project_card" v-for="assigned in returnAssignedJobs" :key="assigned.id">
                    <div class="card-body p-4" v-if="assigned.workedByUsername !== null">
                        <div class="col-sm-12 p-0 d-flex justify-content-start">
                            <v-avatar>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                            </v-avatar>
                            <div class="ml-2">
                                <p class="mb-0">{{ assigned.workedByUsername }}</p>
                                <p class="mb-1">Location: {{assigned.workedByCity}},{{assigned.workedByCountry}}</p>
                            </div>
                        </div>
                        <div class="col-sm-12 p-0 mt-2">
                            <div>
                                <div class="mb-1">
                                    <b class="mb-2 project_info_title font-weight-normal">Title: {{ assigned.title }}</b>
                                </div>
                                <div class="mb-1">
                                    <b class="project_info_price font-weight-normal">Price:
                                        <span v-if="assigned.fixedPrice !== null">${{ assigned.fixedPrice }}</span>
                                        <span v-else>${{ assigned.fromPrice }} - ${{
                          assigned.toPrice
                        }}</span>
                                    </b>
                                </div>
                                <div>
                                    <b class="project_info_details font-weight-normal" @click="viewMoreAssginedJobs(true, assigned.id)" style="cursor:pointer">Details</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 p-0 save_jobs_container">
        <p class="mb-0">Saved Jobs</p>
        <hr />
        <div class="card">
            <div class="card-header board_header_container">
                <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
                    <a :ref="'nav' + index" class="jobnav" @click="navigateTo">{{
              jobheader
            }}</a>
                </div>
            </div>
            <div class="card-body pt-4 pb-4 save_jobs_body">
                <div class="row mb-1 cards FeedCard" v-for="(data, index) in returnData" :key="index" @mouseenter="showViewMore" @mouseleave="hideViewMore">
                    <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
                        <div class="card-body p-0 d-flex justify-content-between data_header">
                            <b class="mb-0">{{ data.title }}</b>
                            <div class="saveJobIcon">
                                <i :class="
                      String(returnNavEvent.text).toLowerCase() === 'save jobs'
                        ? 'mdi mdi-heart'
                        : 'mdi mdi-heart-outline'
                    " @click="saveJob($event, index)" title="save job" v-if="
                      String(returnNavEvent.text).toLowerCase() === 'save jobs'
                    "></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 card p-0 jobCard">
                        <div class="card-body p-3">
                            <div class="d-flex justify-content-start mt-2 mb-3">
                                <v-avatar>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                                </v-avatar>
                                <div class="ml-2">
                                    <p class="card-text mb-0 pt-1">
                                        <b v-if="data.firstName === null || data.lastName === null">{{ data.username }}</b>
                                        <b v-else>{{data.firstName}} {{data.lastName}}</b>
                                    </p>
                                    <p class="locationbid">
                                        Location:
                                        <v-icon class="locationIcon">mdi-map-marker</v-icon>{{data.city}},{{data.country}}
                                    </p>
                                </div>
                            </div>
                            <p class="card-text mb-1">
                                <b class="font-weight-normal">Date Posted:</b>
                                {{ data.datePosted }}
                            </p>
                            <p class="card-text mb-1">
                                <b class="font-weight-normal">Date Needed:</b>
                                {{ data.fromDate }} - {{ data.toDate }}
                            </p>
                            <div class="col-sm-12 skillsPadding">
                                <div class="row">
                                    <b class="mr-2 font-weight-normal">Category :</b>
                                    <b class="skills font-weight-normal">{{ data.subject }}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 card p-0 jobCard">
                        <div class="card-body p-3 align-middle">
                            <p class="card-text pt-2">
                                <b class="pr-2">Description :</b>
                                {{
                    !data.description.length >= 200
                      ? data.description
                      : data.description.substring(0, 200)
                  }}
                                <b class="view_more_truncate" v-if="data.description.length >= 200" @click="viewMore(true)">...view more</b>
                            </p>
                            <div class="col-sm-12 skillsPadding">
                                <div class="row">
                                    Current Language of document:
                                    <b class="skills" v-for="(language, index) in data.languageFrom" :key="index">{{ language }}</b>
                                </div>
                            </div>
                            <p class="card-text mb-0 mt-3">
                                <b>Price:</b>
                                <span v-if="data.fixedPrice !== null">${{ data.fixedPrice }}</span>
                                <span v-else>${{ data.fromPrice }} - ${{ data.toPrice }}</span>
                            </p>
                            <p class="card-text locationbid mt-2">Bids: 0</p>
                            <p class="ViewMoreIcon" @click="redirect('/user/review_bids')" v-if="
                    String(returnNavEvent.text).toLowerCase() === 'posted jobs'
                  ">
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
        <p class="mb-0">Job History</p>
        <hr />
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
                <b>{{ jobsDetails.title }}</b>
            </div>
            <div class="card ViewMoreCard pt-3">
                <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
          </div>-->

                <div class="card-body ViewMoreBody">
                    <p class="card-text mb-3">
                        <b>Price:</b>
                        <span v-if="jobsDetails.fixedPrice !== null">${{ jobsDetails.fixedPrice }}</span>
                        <span v-else>${{ jobsDetails.fromPrice }} - {{ jobsDetails.toPrice }}</span>
                    </p>
                    <p class="card-text">
                        <b>Description :</b>
                        {{ jobsDetails.description }}
                    </p>
                    <div class="col-sm-12 skillsPadding">
                        <div class="row">
                            <b>Translation Languages:</b>
                            <b class="skills">{{ jobsDetails.languageTo }}</b>
                        </div>
                    </div>
                </div>
                <div class="card-footer ViewMoreFooter">
                    <p class="locationbid"><b>Bids:</b> 0</p>
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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                        </v-avatar>
                        <div class="ml-2">
                            <p class="card-text">
                                <b>{{ jobsDetails.username }}</b>
                            </p>
                        </div>
                    </div>
                    <div class="card-body ViewMoreBody">
                        <p class="card-text mb-3">
                            <b>Date Posted:</b>
                            {{ jobsDetails.datePosted }}
                        </p>
                        <p class="card-text mb-3">
                            <b>Date Needed:</b>
                            {{ jobsDetails.fromDate }} - {{ jobsDetails.toDate }}
                        </p>
                        <div class="col-sm-12 skillsPadding">
                            <div class="row">
                                <b class="mr-2">Category :</b>
                                <b class="skills">{{ jobsDetails.subject }}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ref="MoreInfoWrapper2" class="MoreInfoWrapper2">
        <div ref="moreInfo2" class="moreInfo2">
            <v-icon class="exit_view_more" @click="viewMoreAssginedJobs(false)">mdi mdi-close</v-icon>
            <div class="card ViewMoreTitle mb-3">
                <b>{{ assignedJobsDetails.title }}</b>
            </div>
            <div class="card ViewMoreCard pt-3">
                <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
          </div>-->

                <div class="card-body ViewMoreBody">
                    <p class="card-text mb-3">
                        <b>Price:</b>
                        <span v-if="assignedJobsDetails.fixedPrice !== null">${{ assignedJobsDetails.fixedPrice }}</span>
                        <span v-else>${{ assignedJobsDetails.fromPrice }} - {{ assignedJobsDetails.toPrice }}</span>
                    </p>
                    <p class="card-text">
                        <b>Description :</b>
                        {{ assignedJobsDetails.description }}
                    </p>
                    <div class="col-sm-12 skillsPadding">
                        <div class="row">
                            <b>Translation Languages:</b>
                            <b class="skills">{{ assignedJobsDetails.languageTo }}</b>
                        </div>
                    </div>
                </div>
                <div class="card-footer ViewMoreFooter">
                    <!-- <p class="locationbid"><b>Bids:</b> 0</p>   -->
                    <p class="locationbid">
                        <b>Location:</b>
                        <v-icon class="locationIcon">mdi-map-marker</v-icon>{{assignedJobsDetails.workedByCity}},{{assignedJobsDetails.workedByCountry}}
                    </p>
                </div>
            </div>
            <div class="card ViewMoreCard mt-2">
                <div class="card-header ViewMoreHeader">
                    <b class="mb-5 font-weight-normal">Assigned To:</b>
                    <div class="d-flex justify-content-start mt-5 mb-3 post_owner">
                        <v-avatar>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                        </v-avatar>
                        <div class="ml-2">
                            <p class="card-text">
                                <b>{{ assignedJobsDetails.workedByUsername }}</b>
                            </p>
                        </div>
                    </div>
                    <div class="card ViewMoreCard mt-2">
                        <div class="card-header ViewMoreHeader">
                            <b class="mb-5 font-weight-normal">Posted by:</b>
                            <div class="d-flex justify-content-start mt-5 mb-3 post_owner">
                                <v-avatar>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHEZ8jN4MlDEwzxSXGnYU7shtaCjbeMf6Ow&usqp=CAU" alt="John" />
                                </v-avatar>
                                <div class="ml-2">
                                    <p class="card-text">
                                        <b v-if="assignedJobsDetails.postedByFirstName === null || assignedJobsDetails.postedByLastName === null">{{ assignedJobsDetails.postedByUsername }}</b>
                                        <b v-else>{{assignedJobsDetails.postedByFirstName}} {{ assignedJobsDetails.postedByLastName }}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body ViewMoreBody">
                            <p class="card-text mb-3">
                                <b>Date Posted:</b>
                                {{ assignedJobsDetails.datePosted }}
                            </p>
                            <p class="card-text mb-3">
                                <b>Date Needed:</b>
                                {{ assignedJobsDetails.fromDate }} - {{ assignedJobsDetails.toDate }}
                            </p>
                            <div class="col-sm-12 skillsPadding">
                                <div class="row">
                                    <b class="mr-2">Category :</b>
                                    <b class="skills">{{ assignedJobsDetails.subject }}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
export default {
    data() {
        return {
            boardHeader: ["Save Jobs"],
            newPojects: [],
            activeProjects: [],
            data: [],
            acceptedJobs: [],
            jobsDetails: [],
            navEvent: "",
            search: "",
            drop: true,
            members: [],
            assignedJobs: [],
            assignedJobsDetails: [],
            headers: [{
                    text: "Project Name",
                    align: "start",
                    filterable: true,
                    value: "title",
                },
                {
                    text: "Assigned to:",
                    value: "workedByUsername",
                },
                {
                    text: "Date Assigned",
                    value: "datePosted",
                },
                {
                    text: "Date Finished",
                    value: "dateFinish",
                },
                {
                    text: "Fixed Price",
                    value: "fixedPrice",
                },
                 {
                    text: "From Price",
                    value: "fromPrice",
                },
                 {
                    text: "To Price",
                    value: "toPrice",
                },
            ],
            project: [],
        };
    },
    components: {},
    mounted() {
        this.$refs["nav0"][0].click();

        const id = localStorage.getItem("value");
        const userID = id.substr(id.lastIndexOf("*") + 1);
        ApiService.post("getsavejob", {
            savedById: userID,
        }).then((res) => {
            // console.log("data", res.data);
            res.data.map((el) => {
                let tempres = el.languageFrom.replace(/,/g, " ");
                el.languageFrom = tempres.trim().split(" ");
            });
            this.data = res.data;
        });

        ApiService.post("getacceptedjobs", {
            savedById: userID,
        }).then((res) => {
            // console.log("acceptedJObs",res.data);
            this.acceptedJobs = res.data;
        });

        ApiService.post("getAssignedJobs", {
            orgId: userID,
        }).then((res) => {
            // console.log("assignedJobs", res.data);
            this.assignedJobs = res.data;
        });

        ApiService.post("getJobHistory", {
            orgId: userID,
        }).then((res) => {
        //   console.log("history", res.data);
            this.project = res.data;
        });
    },
    computed: {
        returnNavEvent() {
            return this.navEvent;
        },
        returnData() {
            return this.data;
        },
        returnAcceptedJobs() {
            return this.acceptedJobs;
        },
        getMembers() {
            return this.members;
        },
        returnAssignedJobs() {
            return this.assignedJobs;
        },
    },
    methods: {
        closePopOver() {
            this.selectMember();
            this.$root.$emit("bv::hide::popover");
        },
        assignJob(memberId, jobId, postedById) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Assign",
                    cancelButtonText: "Cancel",
                    reverseButtons: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        const id = localStorage.getItem("value");
                        const userID = id.substr(id.lastIndexOf("*") + 1);
                        ApiService.post("assign-job", {
                            jobId: jobId,
                            orgId: userID,
                            workedBy: memberId,
                            postedBy: postedById,
                        }).then(() => {
                            // console.log(res);
                            swalWithBootstrapButtons.fire(
                                "Successfully Assigned!",
                                "",
                                "success"
                            );
                        });
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire("Cancelled", "Cancelled!", "error");
                    }
                    this.$root.$emit("bv::hide::popover");
                    this.drop = !this.drop;
                });
        },
        selectMember() {
            this.drop = !this.drop;
            this.retrieveMembers();
        },
        newJobsActionShow(e) {
            e.target.children[0].children[1].style =
                "transition: .5s; right: 0 !important;";
        },
        newJobsActionHide(e) {
            if (this.drop) {
                this.$root.$emit("bv::hide::popover");
                e.target.children[0].children[1].style =
                    "transition: .5s; right: -100% !important;";
            }
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
                ApiService.post("getJob", {
                    id: data,
                }).then((res) => {
                    // console.log(res);
                    this.jobsDetails = res.data[0];
                    // console.log("feedDetails", this.feedDetails);
                });
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
        },
        viewMoreAssginedJobs(ViewEvent, data) {
            if (ViewEvent) {
                ApiService.post("getAssignedJobsDetails", {
                    id: data,
                }).then((res) => {
                    // console.log(res);
                    this.assignedJobsDetails = res.data[0];
                    console.log("feedDetails", this.feedDetails);
                });
                this.$refs["MoreInfoWrapper2"].style = "left: 0 !important";
                this.$refs["moreInfo2"].style =
                    "transition: .5s !important; left: 30% !important";
                if (window.innerWidth < 750) {
                    this.$refs["moreInfo"].style =
                        "width: 90% !important; transition: .5s !important; left: 10% !important";
                }
            } else {
                this.$refs["MoreInfoWrapper2"].style = "left: 100% !important";
                this.$refs["moreInfo2"].style =
                    "transition: .5s !important; right: 100% !important";
            }
        },
        retrieveMembers() {
            const id = localStorage.getItem("value");
            const userID = id.substr(id.lastIndexOf("*") + 1);
            ApiService.post("getmembers", {
                id: userID,
            }).then((res) => {
                // console.log(res.data);
                this.members = res.data;
            });
        },
    },
};
</script>

<style scoped>
.popover {
    z-index: 94 !important;
}

.popover_close {
    font-size: 14px;
    font-weight: normal !important;
    position: absolute;
    top: 0;
    left: 0 !important;
    z-index: 94 !important;
    border: 1px solid grey;
    background: white;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 50%;
    cursor: pointer;
}

.assign-card-container {
    height: 300px;
    overflow-y: scroll;
}

.assign-card {
    width: 220px;
    border-radius: 0px;
    cursor: pointer;
}

.members:hover {
    background-color: rgb(51, 188, 247);
}

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

.MoreInfoWrapper2 {
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

.moreInfo2 {
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

.moreInfo2::backdrop {
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

.project_info_details:hover{
  background-color:#375fe2;
  box-shadow: 2px 3px 4px gray;
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

.assign-card-container::-webkit-scrollbar {
    width: 7px !important;
}

.assign-card-container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230) !important;
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.assign-card-container::-webkit-scrollbar-thumb {
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
