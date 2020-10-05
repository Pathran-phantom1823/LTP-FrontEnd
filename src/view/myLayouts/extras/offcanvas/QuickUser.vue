<template>
<div class="topbar-item">
    <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
        <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
            Hi,
        </span>
        <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
            Seans
        </span>
        <span class="symbol symbol-35 symbol-light-success">
            <img v-if="false" alt="Pic" :src="picture" />
            <span v-if="true" class="symbol-label font-size-h5 font-weight-bold">
                S
            </span>
        </span>
    </div>

    <div id="kt_quick_user" ref="kt_quick_user" class="offcanvas offcanvas-right p-10">
        <!--begin::Header-->
        <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5">
            <h3 class="font-weight-bold m-0">
                User Profile
                <small class="text-muted font-size-sm ml-2">12 messages</small>
            </h3>
            <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
                <i class="ki ki-close icon-xs text-muted"></i>
            </a>
        </div>
        <!--end::Header-->

        <!--begin::Content-->
        <perfect-scrollbar class="offcanvas-content pr-5 mr-n5 scroll" style="max-height: 90vh; position: relative;">
            <!--begin::Header-->
            <div class="d-flex align-items-center mt-5">
                <div class="symbol symbol-100 mr-5">
                    <img class="symbol-label" :src="picture" alt="" />
                    <i class="symbol-badge bg-success"></i>
                </div>
                <div class="d-flex flex-column">
                    <a href="#" class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
                        James Jones
                    </a>
                    <div class="text-muted mt-1">Application Developer</div>
                    <div class="navi mt-2">
                        <a href="#" class="navi-item">
                            <span class="navi-link p-0 pb-2">
                                <span class="navi-icon mr-1">
                                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                                        <!--begin::Svg Icon-->
                                        <inline-svg src="media/svg/icons/Communication/Mail-notification.svg" />
                                        <!--end::Svg Icon-->
                                    </span>
                                </span>
                                <span class="navi-text text-muted text-hover-primary">
                                    jm@softplus.com
                                </span>
                            </span>
                        </a>
                    </div>
                    <button class="btn btn-light-primary btn-bold" @click="onLogout">
                        Sign out
                    </button>
                </div>
            </div>
            <!--end::Header-->
            <div class="separator separator-dashed mt-8 mb-5"></div>
            <!--begin::Nav-->
            <div class="navi navi-spacer-x-0 p-0">
                <!--begin::Item-->
                <router-link to="/builder" @click.native="closeOffcanvas" href="#" class="navi-item">
                    <div class="navi-link">
                        <div class="symbol symbol-40 bg-light mr-3">
                            <div class="symbol-label">
                                <span class="svg-icon svg-icon-md svg-icon-success">
                                    <!--begin::Svg Icon-->
                                    <inline-svg src="media/svg/icons/General/Notification2.svg" />
                                    <!--end::Svg Icon-->
                                </span>
                            </div>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Profile</div>
                            <div class="text-muted">
                                Account settings and more
                                <span class="label label-light-danger label-inline font-weight-bold">
                                    update
                                </span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <!--end:Item-->
                <!--begin::Item-->
                <router-link to="/builder" @click.native="closeOffcanvas" href="#" class="navi-item">
                    <div class="navi-link">
                        <div class="symbol symbol-40 bg-light mr-3">
                            <div class="symbol-label">
                                <span class="svg-icon svg-icon-md svg-icon-warning">
                                    <!--begin::Svg Icon-->
                                    <inline-svg src="media/svg/icons/Shopping/Chart-bar1.svg" />
                                    <!--end::Svg Icon-->
                                </span>
                            </div>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Messages</div>
                            <div class="text-muted">Inbox and tasks</div>
                        </div>
                    </div>
                </router-link>
                <!--end:Item-->
                <v-divider></v-divider>
                <h3>Set your unavailable date</h3>
                <v-date-picker v-model="dates" multiple color="red" header-color="primary" style="margin-right:10px"></v-date-picker>
            </div>
            <!--end::Nav-->
            <div class="separator separator-dashed my-7"></div>
             <a
                class="btn btn-light-primary font-weight-bolder btn-sm"
                href="#"
                >Upgrade plan</a
              >
        </perfect-scrollbar>
        <!--end::Content-->
    </div>
</div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
    overflow: hidden;
}
</style>

<script>
import {
    LOGOUT
} from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";

export default {
    name: "KTQuickUser",
    data() {
        return {
            dates: ['2018-09-15', '2018-09-20'],
            menu: false,
        };
    },
    mounted() {
        // Init Quick User Panel
        KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
    },
    methods: {
        onLogout() {
            this.$store
                .dispatch(LOGOUT)
                .then(() => this.$router.push({
                    name: "login"
                }));
        },
        closeOffcanvas() {
            new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
        }
    },
    computed: {
        picture() {
            return process.env.BASE_URL + "media/users/300_21.jpg";
        }
    }
};
</script>
