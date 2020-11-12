<template>
<!--begin::Advance Table Widget 9-->
<div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label font-weight-bolder text-dark">Bidders</span>
        </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0 pb-3">
        <div class="tab-content">
            <!--begin::Table-->
            <div class="table-responsive">
                <table class="table table-head-custom table-vertical-center table-head-bg table-borderless">
                    <thead>
                        <tr class="text-left">
                            <th style="min-width: 250px" class="pl-7">
                                <span class="text-dark-75">Username</span>
                            </th>
                            <th style="min-width: 120px">Price</th>
                            <th style="min-width: 120px">Status</th>
                            <th style="min-width: 101px"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(item, i) in data">
                            <tr v-bind:key="i">
                                <td class="pl-0 pt-8">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"><span v-if="
                              item.firstName === null || item.lastName === null
                            ">{{ item.username }}</span>
                                                <span v-if="item.firstName === null || item.lastName">{{ item.firstName }} {{ item.lastName }}</span>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg" v-if="item.fixedPrice !== null">{{ item.pricing }}</span>
                                </td>
                                <td>
                                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.status }}</span>
                                </td>
                                <td class="pr-0 text-right">
                                    <a href="#" class="btn btn-light-danger font-weight-bolder font-size-sm"  @click="decline(primaryId, item.applicationId)">Decline</a>
                                    <a href="#" class="btn btn-light-success font-weight-bolder font-size-sm" @click="accept(primaryId, item.applicationId)">Accept</a>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <!--end::Table-->
        </div>
    </div>
    <!--end::Body-->
</div>
<!--end::Advance Table Widget 9-->
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
export default {
    name: "widget-3",
    props: ["data", "primaryId"],
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
       accept(jobId, applicantId) {
    //   console.log("jobId: ", jobId, "applicantId", applicantId);
      ApiService.post("accept-bidder", {
        jobId: jobId,
        id: applicantId,
        status: "accepted",
      }).then(() => {
        Swal.fire({
          title: "",
          text: "You Accepted the offer",
          icon: "success",
          confirmButtonClass: "btn btn-secondary",
        });
        this.$parent.retrieveBidder()
      });
    },
    decline(jobId, applicantId) {
    //   console.log("jobId: ", jobId, "applicantId", applicantId);
      ApiService.post("decline-bidder", {
        jobId: jobId,
        id: applicantId,
        status: "declined",
      }).then(() => {
        Swal.fire({
          title: "",
          text: "You Decline the offer",
          icon: "success",
          confirmButtonClass: "btn btn-secondary",
        });
        this.$parent.retrieveBidder()
      });
    },
    }
};
</script>
