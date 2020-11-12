<template>
<div class="jobBoard">
    <div class="d-flex justify-content-between">
        <p class="job_board_title">Job Board</p>
        <v-btn rounded color="primary" class="post_job" dark @click="$router.push('/user/post_job')">
            <v-icon dark class="post_job_icon">mdi-plus</v-icon>post a job
        </v-btn>
    </div>
    <div class="card mb-20">
        <div class="card-header board_header_container">
            <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
                <a :ref="'nav' + index" class="jobnav" @click="navigateTo($event, jobheader)">{{ jobheader }}</a>
            </div>
        </div>
        <v-data-table v-if="showTable" :headers="headers" :items="returnData" :search="search"></v-data-table>
        <div class="card-body pt-4 pb-4" v-if="!showTable">
            <div class="row mb-1 cards FeedCard" v-for="data in returnData" :key="data.id" @mouseenter="showViewMore" @mouseleave="hideViewMore">
                <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
                    <div class="card-body p-0 d-flex justify-content-between data_header">
                        <b class="mb-0">{{ data.title }}</b>
                        <div class="saveJobIcon">
                            <i :class="
                    String(returnNavEvent.text).toLowerCase() === 'save jobs'
                      ? 'mdi mdi-heart'
                      : 'mdi mdi-heart-outline'
                  " @click="saveJob($event, index)" title="save job" v-if="
                    String(returnNavEvent.text).toLowerCase() ===
                      'active contracts' ||
                    String(returnNavEvent.text).toLowerCase() === 'save jobs'
                  "></i>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 card p-0 jobCard">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-start mt-2 mb-3">
                            <div class="ml-2">
                                <p class="card-text mb-0 pt-1">
                                    <b v-if="data.firstName === null || data.lastName === null">{{ data.username }}</b>
                                    <b v-else>{{data.firstName}} {{ data.lastName }}</b>
                                </p>
                                <p class="locationbid">
                                    Location:
                                    <v-icon class="locationIcon">mdi-map-marker</v-icon>{{data.city}}, {{data.country}}
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
                                <b class="skills">{{ data.subject }}</b>
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
                            <b class="font-weight-normal" v-if="data.description.length >= 200">...</b>
                        </p>
                        <div class="col-sm-12 skillsPadding">
                            <div class="row">
                                <b class="skills" v-for="(language, index) in data.languageFrom" :key="index">{{ language }}</b>
                            </div>
                        </div>
                        <p class="card-text mb-0 mt-3">
                            <b>Price:</b>
                            <span v-if="data.fixedPrice !== null">${{ data.fixedPrice }}</span>
                            <span v-else>${{ data.fromPrice }} - ${{ data.toPrice }}</span>
                        </p>
                        <p class="card-text locationbid mt-2">Bids: {{ data.bids }}</p>
                        <p class="ViewMoreIcon" @click="redirect('/user/review_bids/' + data.id)" v-if="
                  String(returnNavEvent.text).toLowerCase() === 'posted jobs'
                ">
                            <v-icon title="review bids">mdi mdi-eye</v-icon>View Bids
                        </p>
                        <v-avatar class="view_details" size="36" @click="viewMore(true, data.id)">
                            <v-icon title="View Details" class="white--text headline">mdi mdi-eye</v-icon>
                        </v-avatar>
                        <v-avatar class="edit_posts" size="36" @click="showModal(data.id)">
                            <v-icon title="edit" class="white--text headline">mdi mdi-lead-pencil</v-icon>
                        </v-avatar>
                        <v-avatar class="delete_posts" color="red accent-3" size="36" @click="deleteJob(data.id)">
                            <v-icon title="delete" class="white--text headline">mdi mdi-delete-forever</v-icon>
                        </v-avatar>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <EditModal v-if="jobDetailContent" :dialog="showDialog" @hideModal="hideDialog" :jobData="jobDetailContent" />

    <div ref="MoreInfoWrapper" class="MoreInfoWrapper">
        <div ref="moreInfo" class="moreInfo">
            <v-icon class="exit_view_more" @click="viewMore(false)">mdi mdi-close</v-icon>
            <div class="card ViewMoreTitle mb-3">
                <b>{{ jobDetails.title }}</b>
            </div>
            <div class="card ViewMoreCard pt-3">
                <div class="card-body ViewMoreBody">
                    <p class="card-text mb-3">
                        <span v-if="jobDetails.fixedPrice !== null"><b>Price: </b> ${{ jobDetails.fixedPrice }}</span>
                        <span v-else><b>Price: </b> ${{ jobDetails.fromPrice }} - ${{
                  jobDetails.toPrice
                }}</span>
                    </p>
                    <p class="card-text">
                        <b> Description : </b>{{ jobDetails.description }}
                    </p>
                </div>
                <div class="card-footer ViewMoreFooter">
                    <p class="locationbid">
                        <b>Language Tranlation:</b> {{ jobDetails.languageTo }}
                    </p>
                    <p class="locationbid"><b>Bids:</b>{{ jobDetails.bids }}</p>
                    <p class="locationbid">
                        <b>Location:</b>
                        <v-icon class="locationIcon">mdi-map-marker</v-icon>
                        {{jobDetails.city}}, {{jobDetails.country}}
                    </p>
                </div>
            </div>
            <div class="card ViewMoreCard mt-2">
                <div class="card-header ViewMoreHeader">
                    <b class="mb-5 font-weight-normal">Posted by:</b>
                    <div class="d-flex justify-content-start mt-5 mb-3 post_owner">
                        <v-avatar>
                            <img :src="profileImage" alt="Profile Picture" />
                        </v-avatar>
                        <div class="ml-2">
                            <p class="card-text">
                                <b v-if="jobDetails.firstName === null || jobDetails.lastName === null">{{ jobDetails.username }}</b>
                                <b v-else>{{jobDetails.firstName}} {{ jobDetails.lastName }}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-body ViewMoreBody">
                    <p class="card-text mb-3">
                        <b>Date Posted: </b>{{ jobDetails.datePosted }}
                    </p>
                    <p class="card-text mb-3">
                        <b>Date Needed: </b>{{ jobDetails.fromDate }} -
                        {{ jobDetails.toDate }}
                    </p>
                    <div class="col-sm-12 skillsPadding">
                        <div class="row">
                            <b class="mr-2"> Category :</b><b class="skills">{{ jobDetails.subject }}</b>
                        </div>
                    </div>
                </div>
                <div class="card-footer ViewMoreFooter text-center pt-10 pb-10" v-if="isShowFile">
                    <b>Download File</b>
                    <v-chip class="ma-2 downloadFileBtn" color="info accent-4" outlined @click="downloadFile(jobDetails.file)">
                        <v-icon left> mdi-file-download </v-icon>
                        {{ jobDetails.file }}
                    </v-chip>
                    <br />
                    <DragDrop :primaryId="jobDetails.id" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
import EditModal from "@/view/pages/postjob/EditPostJob/EditModal.vue";
import JwtService from "@/core/services/jwt.service";
import DragDrop from "@/view/pages/DragDrop.vue";

export default {
    data() {
        return {
            modal: false,
            boardHeader: [
                "Active Contracts",
                "Posted Jobs",
                "Save Jobs",
                "Contracts History",
            ],
            jobContent: [],
            data: [],
            navEvent: "",
            iconDisplay: "",
            jobDetails: [],
            jobDetailContent: null,
            search: null,
            showTable: false,
            isShowFile: false,
            profileImage: null,
            headers: [{
                    text: "Project Name",
                    align: "start",
                    filterable: true,
                    value: "title",
                },
                {
                    text: "Posted By",
                    value: "postedBy",
                },
                {
                    text: "Date Applied",
                    value: "dateApplied",
                },
                {
                    text: "Date Accepted",
                    value: "dateAccepted",
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
    components: {
        DragDrop,
        EditModal,
    },
    mounted() {
        this.$refs["nav0"][0].click();
    },
    computed: {
        returnNavEvent() {
            return this.navEvent;
        },
        returnData() {
            return this.data;
        },
        returnJobDetail() {
            return this.jobDetails;
        },
        showDialog() {
            return this.modal;
        },
    },
    methods: {
        showModal(data) {
            ApiService.post("editJob", {
                id: data,
            }).then((res) => {
                // console.log(res.data[0]);
                res.data.map((el) => {
                    let tempres = el.languageFrom.replace(/,/g, " ");
                    el.languageFrom = tempres.trim().split(" ");

                    let tempres2 = el.languageTo.replace(/,/g, " ");
                    el.languageTo = tempres2.trim().split(" ");
                });
                this.jobDetailContent = res.data[0];
                this.modal = true;
            });
        },
        hideDialog() {
            this.modal = false;
        },
        showViewMore(e) {
            let target = e.target.children[2].children[0].children;
            if (String(this.navEvent.text).toLowerCase() === "posted jobs") {
                target[5].classList.remove("hide_posts_icons");
                target[5].classList.add("show_posts_icons");
                target[6].classList.remove("hide_posts_icons");
                target[6].classList.add("show_posts_icons");
                target[7].classList.remove("hide_posts_icons");
                target[7].classList.add("show_posts_icons");
                target[4].style = "transition: .5s; right: 0 !important;";
            } else if (
                String(this.navEvent.text).toLowerCase() === "active contracts"
            ) {
                target[4].classList.remove("hide_posts_icons");
                target[4].classList.add("show_posts_icons");
                target[4].style = "right: 10px !important; padding: 5px !important;";
            }
        },
        hideViewMore(e) {
            let target = e.target.children[2].children[0].children;
            if (String(this.navEvent.text).toLowerCase() === "posted jobs") {
                target[5].classList.add("hide_posts_icons");
                target[5].classList.remove("show_posts_icons");
                target[6].classList.add("hide_posts_icons");
                target[6].classList.remove("show_posts_icons");
                target[7].classList.add("hide_posts_icons");
                target[7].classList.remove("show_posts_icons");
                target[4].style = "transition: .5s; right: -100% !important;";
            } else if (
                String(this.navEvent.text).toLowerCase() === "active contracts"
            ) {
                target[4].classList.remove("show_posts_icons");
                target[4].classList.add("hide_posts_icons");
                target[4].style = "right: 10px !important; padding: 5px !important;";
            }
        },
        viewMore(ViewEvent, data) {
            if (ViewEvent) {
                this.$refs["MoreInfoWrapper"].style = "left: 0 !important";
                this.$refs["moreInfo"].style =
                    "transition: .5s !important; left: 20% !important";

                ApiService.post("getJob", {
                    id: data,
                }).then((res) => {
                    // console.log(res);
                    this.jobDetails = res.data[0];
                    this.retreiveImage(res.data[0].postedById)
                });

                if (window.innerWidth < 750) {
                    this.$refs["moreInfo"].style =
                        "width: 80% !important; transition: .5s !important; left: 20% !important";
                }

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
            this.data = []
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
                // console.log(value);
                this.showTable = false;
                this.isShowFile = true;
                const id = localStorage.getItem("value");
                const userID = id.substr(id.lastIndexOf("*") + 1);
                ApiService.post("getacceptedjobs", {
                    savedById: userID,
                }).then((res) => {
                    if (res.data[0].id !== null) {
                        res.data.map((el) => {
                            let tempres = el.languageFrom.replace(/,/g, " ");
                            el.languageFrom = tempres.trim().split(" ");
                        });
                        this.data = res.data;
                    } else {
                        this.data = [];
                    }
                });
            } else if (value === "Posted Jobs") {
                this.isShowFile = false;
                this.showTable = false;
                const id = localStorage.getItem("value");
                const userID = id.substr(id.lastIndexOf("*") + 1);
                ApiService.post("get-my-jobs", {
                    id: userID,
                }).then((res) => {
                    // console.log(res.data);
                    if (res.data[0].id) {
                        res.data.map((el) => {
                            let tempres = el.languageFrom.replace(/,/g, " ");
                            el.languageFrom = tempres.trim().split(" ");
                        });
                        this.data = res.data;
                    } else {
                        this.data = [];
                    }
                });
            } else if (value === "Save Jobs") {
                this.isShowFile = false;
                // console.log(value);
                this.showTable = false;
                const id = localStorage.getItem("value");
                const userID = id.substr(id.lastIndexOf("*") + 1);
                ApiService.post("getsavejob", {
                    savedById: userID,
                }).then((res) => {
                    // console.log("saved jobs ============ " + JSON.stringify(res.data));
                    if (res.data.length > 0) {
                        res.data.map((el) => {
                            let tempres = el.languageFrom.replace(/,/g, " ");
                            el.languageFrom = tempres.trim().split(" ");
                        });
                        this.data = res.data;
                    }
                });
            } else if (value === "Contracts History") {
                this.isShowFile = false;
                this.showTable = true;
                const id = localStorage.getItem("value");
                const userID = id.substr(id.lastIndexOf("*") + 1);
                ApiService.post("getMyJobHistory", {
                    id: userID,
                }).then((res) => {
                    // console.log(res.data);
                    if (res.data.length > 0) {
                        this.data = res.data;
                    } else {
                        this.data = [];
                    }
                });
            }
        },
        redirect(url) {
            this.$router.push(url);
        },
        retreiveImage(postedById) {
            this.$axios({
                method: "post",
                url: "http://localhost:8003/api/getProfile/",
                // header: {
                //     Authorization: `${JwtService.getToken()}`
                // },
                responseType: "blob",
                data: {
                    accountId: postedById
                },
            }).then((res) => {
                this.convertImage(res);
            });
        },
        convertImage(data) {
           const url = URL.createObjectURL(data.data);
            let img = new Image();
            img.onload = () => {
                URL.revokeObjectURL(url);
                // console.log(img);
            };
            this.profileImage = url
        },
        deleteJob(id) {
            Swal.fire({
                title: "Do you want to delete this job?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    ApiService.post("deleteJob", {
                        id: id,
                    }).then(() => {
                        Swal.fire("Deleted!", "", "success");
                    });
                } else if (result.isDenied) {
                    Swal.fire("Delete is cancelleds", "", "info");
                }
            });
        },
        downloadFile(file) {
            this.$axios({
                method: "get",
                url: "http://localhost:8003/ltp/getFiles/" + file,
                header: {
                    Authorization: `${JwtService.getToken()}`
                },
                responseType: "blob",
            }).then((res) => {
                // console.log(res.data)
                // let response = this.base64ToArrayBuffer(res)
                this.forceToDownload(res, file);
            });
        },

        forceToDownload(data, title) {
            let blob = new Blob([data.data]);
            let url = window.URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.style.display = "none";
            link.href = url;
            link.setAttribute("download", title);
            document.body.appendChild(link);
            link.click();
        },
    },
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
    right: 178px;
    bottom: 15px;
    cursor: pointer;
    display: none;
}

.delete_posts {
    font-size: 14px !important;
    position: absolute;
    right: 135px;
    bottom: 15px;
    cursor: pointer;
    display: none;
}

.view_details {
    font-size: 14px !important;
    background-color: rgb(51, 188, 247) !important;
    position: absolute;
    right: 221px;
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
