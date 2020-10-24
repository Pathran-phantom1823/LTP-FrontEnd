<template>
<div class="UsersContainer">
    <div ref="sidebar" class="sidebar overflow-auto">
        <div class="card CategoryTitle">
            <b>Categories</b>
        </div>
        <div class="card CategoryData">
            <div class="card-body CategoryDataCardBody">
                <!-- <p class="CategoryText" v-for="(category, index) in categories" :key="index">{{category}}</p> -->
                <v-checkbox v-for="(category, index) in categories" :key="index" :label="category" color="blue lighten-1" :value="category" hide-details class="categoryCheck"></v-checkbox>
            </div>
        </div>
        <div class="card CategoryTitle mb-5">
            <b>Filter</b>
        </div>
        <div class="card CategoryData">
            <div class="card-body CategoryDataCardBody">
                <v-autocomplete ref="country" class="placeholder" v-model="fromLanguage" :items="countries" label="From" placeholder="language" color="blue lighten-1" required outlined dense></v-autocomplete>
                <v-autocomplete ref="country" class="placeholder" v-model="toLanguage" :items="countries" label="To" placeholder="language" color="blue lighten-1" required outlined dense></v-autocomplete>
                <v-autocomplete ref="freeTime" class="placeholder" v-model="freetime" :items="days" label="Days" placeholder="Free Time" color="blue lighten-1" required outlined dense></v-autocomplete>
            </div>
        </div>
    </div>
    <div ref="workspace" class="workspace">
        <button type="button" ref="sidebarToggler" class="default" @click="hideShow">
            <v-icon class="sidebar_toggler">mdi-backburger</v-icon>
        </button>
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-left mt-10 mb-5">
                <v-select :items="searchOptions" label="Search" class="searchOption" color="blue lighten-1" dense solo v-model="searchOption"></v-select>
                <v-text-field outlined :label="searchLabel" class="searchBox" append-icon="mdi-magnify" dense clearable rounded color="blue lighten-1"></v-text-field>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card FeedTitle mb-3">
                    <b>My Feed</b>
                </div>
                <div class="card FeedCard" v-for="data in getFeeds" :key="data.id" @mouseenter="showViewMore" @mouseleave="hideViewMore">
                    <div class="card-header dataHeader">
                        <div class="data_title">{{data.title}}</div>
                        <div class="saveJobIcon">
                            <i class="mdi mdi-heart-outline" @click="saveJob" title="save job"></i>
                        </div>
                    </div>
                    <div class="card-body dataBody">
                        <b class="priceLabel">Price: </b>
                        <b><span v-if="data.fixedPrice !== null">${{data.fixedPrice}}</span><span v-else>${{data.fromPrice}} - ${{data.toPrice}}</span></b>
                        <p class="card-text descriptionText">{{data.description}}</p>
                        <div class="col-sm-12 skillsPadding">
                            <div class="row">
                                <b class="skills" v-for="(language, index) in data.languageFrom" :key="index">
                                    {{language}}</b>
                            </div>
                        </div>
                        <p class="card-text locationbid mt-2">
                            Bids: <b>{{data.bids}}</b>
                        </p>
                        <p class="locationbid mb-2">
                            Location:
                            <v-icon class="locationIcon">mdi-map-marker</v-icon>
                            <v-icon class="ViewMoreIcon" @click="viewMore(true, data.id)" title="view more">
                                mdi-chevron-double-right
                            </v-icon>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5 mb-5">
            <v-pagination v-model="page" :length="15" :total-visible="7" circle color="blue lighten-1"></v-pagination>
        </div>
        <div ref="MoreInfoWrapper" class="MoreInfoWrapper">
            <div ref="moreInfo" class="moreInfo">
                <v-icon class="exit_view_more" @click="viewMore(false)">mdi mdi-close</v-icon>
                <div class="card ViewMoreTitle mb-3">
                    <b>{{feedDetails.title}}</b>
                </div>
                <div class="card ViewMoreCard pt-3">
                    <!-- <div class="card-header ViewMoreHeader">
              <b>{{feedData[0].title}}</b>
            </div> -->
                    <div class="card-body ViewMoreBody">
                        <p class="card-text mb-3"><b>Price:</b>
                            <span v-if="feedDetails.fixedPrice !== null"><b>Price: </b> ${{feedDetails.fixedPrice }}</span>
                            <span v-else><b>Price: </b> ${{feedDetails.fromPrice}} - ${{feedDetails.toPrice}}</span>
                            <p class="card-text">
                                <b> Description : </b>{{feedDetails.description}}
                            </p>
                            <div class="col-sm-12 skillsPadding">
                                <div class="row">
                                    <b class="skills">{{feedDetails.languageFrom}}</b>
                                </div>
                            </div>
                    </div>
                    <div class="card-footer ViewMoreFooter">
                        <p class="locationbid">
                            <b>Bids:</b>{{feedDetails.bids}}
                        </p>
                        <p class="locationbid">
                            <b>Location:</b>
                            <v-icon class="locationIcon">mdi-map-marker</v-icon>
                            Philippines
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
                                    <b>{{feedDetails.username}}</b>
                                </p>
                            </div>
                        </div>
                        <!-- <b>Posted by: <b class="text-primary">Doom Bringer</b></b> -->
                    </div>
                    <div class="card-body ViewMoreBody">
                        <p class="card-text mb-3"><b>Date Posted: </b>{{feedDetails.datePosted}}</p>
                        <p class="card-text mb-3"><b>Date Needed: </b>{{feedDetails.fromDate}} - {{feedDetails.toDate}}</p>
                        <div class="col-sm-12 skillsPadding">
                            <div class="row">
                                <b class="mr-2"> Category :</b><b class="skills">{{feedDetails.subject}}</b>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ViewMoreFooter text-center pt-10 pb-10">
                        <v-btn rounded class="acceptOffer" dark>Accept Offer</v-btn>
                    </div>
                </div>
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
            userID: null,
            feedDetails: [],
            feedData: [],
            categories: [
                "Agriculture",
                "Architecture",
                "Arts Crafts",
                "Automotive",
                "Banking",
                "BioTechnology",
                "Certificates & Lincences",
                "Chemicals"
            ],
            countries: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antigua &amp; Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia"
            ],
            fromLanguage: "",
            toLanguage: "",
            searchLabel: "Search Jobs",
            page: 1,
            searchOption: "jobs",
            searchOptions: ["jobs", "translators"],
            freetime: '',
            days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        };
    },
    components: {},
    mounted() {
        const id = localStorage.getItem('value')
        this.userID = id.substr(id.lastIndexOf('*') + 1)
        ApiService.post("getAllJobs", {
            id: this.userID
        }).then(res => {
            res.data.map(el => {
                let tempRes = el.languageFrom.replace(/,/g, ' ')
                el.languageFrom = tempRes.trim().split(' ')
            })
            this.feedData = res.data
            console.log(res.data);
        })
        if (window.innerWidth < 750) {
            this.$refs["sidebar"].style = "right: 100% !important;";
            this.$refs["workspace"].style =
                "width: 100% !important; margin-left: 0px !important;";
            this.$refs["sidebarToggler"].click();
        }
    },
    computed: {
        getFeeds() {
            return this.feedData
        }
    },
    methods: {
        saveJob(e) {
            if (e.target.className === 'mdi mdi-heart-outline') {
                e.target.className = 'mdi mdi-heart'
            } else {
                e.target.className = 'mdi mdi-heart-outline'
            }
        },
        showViewMore(e) {
            e.target.children[1].children[5].children[1].style = 'transition: .5s; right: 0 !important;'
        },
        hideViewMore(e) {
            e.target.children[1].children[5].children[1].style = 'transition: .5s; right: -100% !important;'
        },
        viewMore(ViewEvent, data) {
            if (ViewEvent) {
                ApiService.post("getJob", {
                    id: data
                }).then(res => {
                    console.log(res);
                    this.feedDetails = res.data[0]
                    console.log("feedDetails", this.feedDetails);
                })
                if (window.innerWidth < 750) {
                    this.$refs["moreInfo"].style =
                        "width: 80% !important; transition: .5s !important; left: 20% !important";
                }
                this.$refs["MoreInfoWrapper"].style = "left: 0 !important";
                this.$refs["moreInfo"].style =
                    "transition: .5s !important; left: 40% !important";
                if (window.innerWidth < 750) {
                    this.$refs["moreInfo"].style =
                        "width: 80% !important; transition: .5s !important; left: 20% !important";
                }
            } else {
                this.$refs["MoreInfoWrapper"].style = "left: 100% !important";
                this.$refs["moreInfo"].style =
                    "transition: .5s !important; right: 100% !important";
            }
        },
        hideShow() {
            if (
                this.$refs["sidebarToggler"].classList[1] === "show" ||
                this.$refs["sidebarToggler"].classList[1] === undefined
            ) {
                this.$refs["sidebarToggler"].classList.remove("show");
                this.$refs["sidebarToggler"].classList.add("hide");
                if (window.innerWidth < 750) {
                    this.$refs["sidebarToggler"].classList.remove("mobileshow");
                    this.$refs["sidebarToggler"].classList.add("mobilehide");
                    this.$refs["MoreInfoWrapper"].style = "left: 100% !important";
                    this.$refs["workspace"].style =
                        "width: 100% !important; margin-left: 0px !important; z-index: 2;";
                    this.$refs["sidebar"].style =
                        "transition: 3s !important; right: 100% !important; z-index: 11; width: 250px !important;";
                    return;
                }
                this.$refs["workspace"].style =
                    "transition: .5s; width: 100% !important; margin-left: 0px;";
            } else {
                this.$refs["sidebarToggler"].classList.remove("hide");
                this.$refs["sidebarToggler"].classList.add("show");
                if (window.innerWidth < 750) {
                    this.$refs["sidebarToggler"].classList.add("mobileshow");
                    this.$refs["sidebarToggler"].classList.remove("mobilehide");
                    this.$refs["MoreInfoWrapper"].style =
                        "left: 0 !important; z-index: 1 !important;";
                    this.$refs["workspace"].style =
                        "width: 100% !important; z-index: 2; margin-left: 0px !important;";
                    this.$refs["sidebar"].style =
                        "transition: 3s !important; left: 0 !important; z-index: 11; width: 250px !important;";
                    return;
                }
                this.$refs["workspace"].style =
                    "transition: .5s; width: calc(100% - 320px); margin-left: 320px !important;";
            }
        }
    }
};
</script>

<style scoped>
.acceptOffer {
    background-color: rgb(51, 188, 247) !important;
}

.post_owner {
    display: flex;
    align-items: center;
}

.ViewMoreIcon {
    padding-left: 25px;
    padding-right: 25px;
    background-color: #f2470f !important;
    color: white !important;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute !important;
    bottom: 15px !important;
    right: -100%;
    /* left: 100%; */
}

.ViewMoreCard {
    direction: ltr;
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

.default {
    margin-left: -75px;
    position: fixed;
    z-index: 3;
    top: 92px;
}

.hide {
    transition: 0.5s;
    transform: rotateY(180deg);
    margin-left: -40px;
}

.show {
    transition: 0.5s;
    transform: rotateY(0deg);
}

.mobileshow {
    left: 330px !important;
    top: 80px !important;
    z-index: 3 !important;
    transition: 0.5s;
}

.mobilehide {
    left: 45px !important;
    top: 80px !important;
    z-index: 3;
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
    width: 60% !important;
    z-index: 10 !important;
    overflow-y: scroll;
    border: 1px solid rgb(211, 200, 200);
    direction: rtl;
}

.moreInfo::backdrop {
    width: 100%;
    background: #f2470f !important;
}

.placeholder {
    font-size: 12px !important;
}

.sidebar_toggler {
    /* position: fixed !important; */
    /* z-index: 3; */
    /* left: 0; */
    /* margin-top: -12px !important;
  margin-left: -30px !important; */
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: #f2470f;
    color: white !important;
    box-shadow: 0px 0px 10px rgb(199, 197, 197) !important;
}

.categoryCheck /deep/ label {
    font-size: 12px !important;
    padding-top: 10px !important;
}

.categoryCheck {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding: 2px !important;
}

.CategoryDataCardBody {
    padding: 0px;
}

.CategoryData {
    border: none;
    border-radius: 0px;
}

.CategoryText {
    margin: 0px;
    padding: 2px;
    cursor: pointer;
    font-size: 13px;
    color: #0085be;
}

.CategoryText:hover {
    border-left: 3px solid #0085be;
    margin-left: -3px;
    font-size: 14px;
}

.FeedCard:hover {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
}

.FeedCard {
    overflow: hidden;
}

/**
Category Text css initial
*/
.CategoryText:focus {
    background-color: #0085be;
    color: white;
}

.CategoryText:active {
    background-color: #0085be;
    color: white;
}

/** ends here */
.CategoryTitle {
    height: 48px;
    padding-left: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: center;
    /* margin-top: 50px; */
    border-left: 3px solid #0085be;
    border-radius: 0px;
}

.dataBody {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 15px;
    padding-right: 15px;
}

.dataHeader {
    height: 60px;
    max-height: 200px !important;
    display: flex;
    align-items: center;
    color: rgb(41, 38, 38);
    border-bottom: none;
    font-weight: 600;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    background-color: white;
}

.data_title {
    word-wrap: break-word !important;
    white-space: initial !important;
    width: calc(100% - 40px);
    max-height: 200px;
}

.saveJobIcon {
    width: 40px;
    text-align: right;
    font-size: 20px;
}

.saveJobIcon i {
    color: #f2470f;
}

.saveJobIcon:hover {
    cursor: pointer;
}

.saveJobIcon:active {
    transform: scaleY(1.2);
}

.descriptionText {
    margin-bottom: 0px;
    padding: 2px;
}

.locationbid {
    margin-bottom: 0px !important;
}

.FeedTitle {
    height: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    border-radius: 0px;
}

.FeedTitle b {
    font-size: 20px;
    font-weight: normal;
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

.locationIcon {
    color: #f2470f !important;
    font-size: 14px !important;
}

.priceLabel {
    font-weight: normal;
}

.sidebar {
    width: 320px;
    height: calc(100% - 72px) !important;
    position: fixed;
    background-color: white;
    /* text-align: left; */
    padding: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.workspace {
    width: calc(100% - 320px);
    margin-left: 320px;
    padding-top: 0px !important;
    padding: 15px;
    z-index: 2;
    background: rgb(240, 240, 240);
}

.UsersContainer {
    margin-top: 72px;
    overflow-x: hidden !important;
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.searchBox {
    width: 75% !important;
    background-color: white;
    height: 40px !important;
}

.searchOption {
    width: 25% !important;
    font-size: 12px !important;
    margin-right: 10px !important;
}

.searchOption /deep/ label {
    font-size: 12px !important;
}

.searchJobsIcon {
    cursor: pointer;
}

.searchJobs {
    color: grey !important;
}

.searchJobs:focus {
    border: 1px solid rgb(155, 152, 152);
}

::placeholder {
    color: grey !important;
}

:-ms-input-placeholder {
    color: grey;
}

::-ms-input-placeholder {
    color: grey;
}

.sidebar::-webkit-scrollbar {
    width: 7px !important;
}

.sidebar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230) !important;
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: #c7cbcc !important;
    border-radius: 20px !important;
    border: 0px !important;
}

.moreInfo::-webkit-scrollbar {
    width: 7px !important;
}

.moreInfo::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(230, 230, 230);
    background: rgb(240, 237, 235) !important;
    margin-bottom: 10px !important;
}

.moreInfo::-webkit-scrollbar-thumb {
    background-color: #c7cbcc !important;
    border-radius: 20px !important;
    border: 0px !important;
}
</style>
