<template>
<div class="jobBoard">
    <div class="card mb-20 bid_cards_container">
        <div class="card-header board_header_container pb-0 bid_cards_container">
            <!-- <div class="jobnav_container" v-for="(jobheader, index) in boardHeader" :key="index">
          <a :ref="'nav' + index" class="jobnav" @click="navigateTo">{{jobheader}}</a>
        </div> -->
            <div class="card col-sm-12 p-0 cards bid_cards">
                <div class="card-body p-3">
                    <b class="font-weight-normal bids_title"> Review Bids </b>
                </div>
            </div>
        </div>
        <div class="card-body pt-4 pb-4">
            <div class="row mb-1 cards FeedCard">
                <div class="col-sm-12 card pl-3 pr-3 pt-5 pb-5 jobCard">
                    <div class="card-body p-0 d-flex justify-content-between data_header">
                        <b class="mb-0">{{ data.title }}</b>
                    </div>
                </div>
                <div class="col-sm-4 card p-0 jobCard">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-start mt-2 mb-3">
                            <v-avatar>
                                <img :src="profileImage" alt="Profile Picture" />
                            </v-avatar>
                            <div class="ml-2">
                                <p class="card-text mb-0 pt-1">
                                    <b v-if="data.firstName === null || data.lastName === null">{{ data.username }}</b>
                                    <b v-else>{{ data.firstName }} {{ data.lastName }}</b>
                                </p>
                                <p class="locationbid">
                                    Location:
                                    <v-icon class="locationIcon">mdi-map-marker</v-icon>{{ data.city }}, {{ data.country }}
                                </p>
                            </div>
                        </div>
                        <p class="card-text mb-1">
                            <b class="font-weight-normal">Date Posted:</b>{{ data.datePosted }}
                        </p>
                        <p class="card-text mb-1">
                            <b class="font-weight-normal">Date Needed:</b>{{ data.fromDate }} - {{ data.toDate }}
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
                                <b class="skills font-weight-normal">{{
                    data.languageFrom
                  }}</b>
                            </div>
                        </div>
                        <p class="card-text mb-0 mt-3">
                            <b>Price:</b>
                            <span v-if="data.fixedPrice !== null">${{ data.fixedPrice }}</span>
                            <span v-else>${{ data.fromPrice }} = ${{ data.toPrice }}</span>
                        </p>
                        <p class="card-text locationbid mt-2">Bids: {{ data.bids }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Widget3 :data="bidders" :primaryId="data.id" />
    </div>
</div>
</template>

<script>
// import Swal from "sweetalert2";
// import JwtService from "@/core/services/jwt.service";
import ApiService from "@/core/services/api.service";
import Widget3 from "@/view/content/widgets/advance-table/Widget3.vue";
export default {
    data() {
        return {
            boardHeader: [
                "Active Contracts",
                "Posted Jobs",
                "Save Jobs",
                "Contracts History",
            ],
            data: [],
            bidders: [],
            navEvent: "",
            iconDisplay: "",
            profileImage: null,
            search: "",
            headers: [{
                    text: "Dessert (100g serving)",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                {
                    text: "Calories",
                    value: "calories"
                },
                {
                    text: "Fat (g)",
                    value: "fat"
                },
                {
                    text: "Carbs (g)",
                    value: "carbs"
                },
                {
                    text: "Protein (g)",
                    value: "protein"
                },
                {
                    text: "Iron (%)",
                    value: "iron"
                },
            ],
        };
    },
    components: {
        Widget3,
    },
    computed: {
        returnNavEvent() {
            return this.navEvent;
        },
        returnData() {
            return this.data;
        },
        getBidders() {
            return this.bidders;
        },
    },
    mounted() {
        // console.log(this.$route.params.id);
        let id = this.$route.params.id;
        ApiService.post("getJob", {
            id: id,
        }).then((res) => {
            // console.log(res);
            this.data = res.data[0];
            // console.log("feedDetails", this.data);
            this.retrieveBidder()
        });
    },
    methods: {
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
        retrieveBidder() {
            let id = this.$route.params.id;
            ApiService.post("getBids", {
                id: id
            }).then((res) => {
                // console.log(res);
                this.bidders = res.data;
            });
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
    },
};
</script>

<style scoped>
.bidAction {
    cursor: pointer;
}

.Decline {
    background: #f2470f !important;
    border: 1px solid #f2470f !important;
}

.location_bids {
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.bid_cards_container {
    border: none !important;
}

.bid_cards {
    border-radius: 0px;
}

.bid_card {
    border: none;
    border-radius: 0px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.bids_title {
    font-size: 20px;
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
    right: 60px;
    bottom: 15px;
    cursor: pointer;
    display: none;
}

.delete_posts {
    font-size: 14px !important;
    position: absolute;
    right: 15px;
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

.translator {
    overflow-y: scroll;
    height: 600px;
}

.translator::-webkit-scrollbar {
    width: 7px;
}

.translator::-webkit-scrollbar-track {
    background: rgb(240, 237, 235);
}

.translator::-webkit-scrollbar-thumb {
    background-color: #c7cbcc;
    border-radius: 20px;
    border: 0px;
}

.translator,
.organization {
    overflow-y: scroll;
    height: 600px;
}

.organization::-webkit-scrollbar {
    width: 7px;
}

.organization::-webkit-scrollbar-track {
    background: rgb(240, 237, 235);
}

.organization::-webkit-scrollbar-thumb {
    background-color: #c7cbcc;
    border-radius: 20px;
    border: 0px;
}
</style>
