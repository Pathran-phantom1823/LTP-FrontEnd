<template>
  <div class="topbar-item">
    <div
      class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
      id="kt_quick_user_toggle"
    >
      <span
        class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
      >
        Hi,
      </span>
      <span
        class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
      >
        {{ currentUser }}
      </span>
      <span class="symbol symbol-35 symbol-light-success">
        <img v-if="false" alt="Pic" :src="picture" />
        <span v-if="true" class="symbol-label font-size-h5 font-weight-bold">
          {{ user }}
        </span>
      </span>
    </div>

    <div
      v-if="!showMenu"
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      ></div>
      <button class="btn btn-block btn-light-primary btn-bold" @click="onLogout">
        Sign out
      </button>
    </div>

    <div
      v-if="showMenu"
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <h3 class="font-weight-bold m-0">
          User Profile
          <!-- <small class="text-muted font-size-sm ml-2">12 messages</small> -->
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img class="symbol-label" :src="profileImage" alt="" />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a
              href="#"
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              {{ name }}
            </a>
            <!-- <div class="text-muted mt-1">Application Developer</div> -->
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    {{ email }}
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
          <!-- <router-link
            to="/builder"
            @click.native="closeOffcanvas"
            class="navi-item"
          > -->
          <div
            class="navi-link"
            v-if="role !== 'super-admin' || role !== 'agency'"
            @click.prevent="goToProfile"
          >
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
                <span
                  class="label label-light-danger label-inline font-weight-bold"
                >
                  update
                </span>
              </div>
            </div>
          </div>
          <!-- </router-link> -->
          <!--end:Item-->
          <!--begin::Item-->
          <router-link
            to="/organization/messenger"
            @click.native="closeOffcanvas"
            class="navi-item"
            v-if="role === 'agency'"
          >
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
                <div class="text-muted">Rooms and conversations</div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->
          <v-divider></v-divider>
          <!-- <h3>Set your unavailable date</h3> -->
          <!-- <v-date-picker
            v-model="dates"
            multiple
            color="red"
            header-color="primary"
            style="margin-right: 10px"
          ></v-date-picker> -->
        </div>
        <!--end::Nav-->
        <div class="separator separator-dashed my-7"></div>
        <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#"
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
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";
import ApiService from "@/core/services/api.service";
// import JwtService from "@/core/services/jwt.service";
import { mapGetters } from "vuex";
export default {
  name: "KTQuickUser",
  data() {
    return {
      dates: ["2018-09-15", "2018-09-20"],
      showMenu: false,
      userID: null,
      currentUser: null,
      user: null,
      email: null,
      name: null,
      profileImage: null,
      role: null,
    };
  },
  mounted() {
    // Init Quick User Panel
    this.$store.commit("get_Role", localStorage.getItem("role"));
    this.role = this.getRole.toLowerCase();

    if(this.role === 'super-admin' || this.role === 'agency'){
      this.showMenu = true
    }else{
      this.showMenu = false
    }

    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);

    const id = localStorage.getItem("value");
    this.userID = id.substr(id.lastIndexOf("*") + 1);

    ApiService.post("getCurrentUser", {
      id: this.userID,
    }).then((res) => {
      // console.log(res.data.substr(0,2));
      if (res.data.username !== null) {
        this.currentUser = res.data.username;
        if (res.data.firstName !== null && res.data.lastName !== null) {
          this.name = `${res.data.firstName} ${res.data.lastName}`;
        } else {
          this.name = res.data.username;
        }
        this.user = res.data.username.substr(0, 2).toUpperCase();
        this.email = res.data.email;
      } else {
        this.currentUser = "User";
        this.currentUser = "User";
      }
    });
    // const id = localStorage.getItem('value')
    this.userID = id.substr(id.lastIndexOf("*") + 1);
    // console.log(this.userID);
    let imageUrl = null;
    if (this.role === "super-admin") {
      imageUrl = "http://localhost:8003/api/getAdminProfile/";
    }else if(this.role === "agency"){
      imageUrl = "http://localhost:8003/api/getAgencyImage/"
    }
    this.$axios({
      method: "post",
      url: imageUrl,
      // header: {
      //   Authorization: `${JwtService.getToken()}`,
      // },
      responseType: "blob",
      data: {
        accountId: this.userID,
      },
    }).then((res) => {
      this.forceToDownload(res);
    });
  },
  methods: {
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() => {
        window.location.reload();
        this.$router.push({
          name: "login",
        });
      });
    },

    forceToDownload(data) {
      // console.log(data.data);
      const url = URL.createObjectURL(data.data);
      let img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        // console.log(img);
      };
      this.profileImage = url;
    },

    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    },
    goToProfile() {
      const id = localStorage.getItem("value");
      this.userID = id.substr(id.lastIndexOf("*") + 1);
      this.$router.push(`/organization/profile/${this.userID}`);
      if (this.role === "agency") {
        this.$router.push(`/organization/profile/${this.userID}`);
      } else if (this.role === "super-admin") {
        this.$router.push("/superAdmin/profile");
      }
    },
  },
  computed: {
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    },
    ...mapGetters(["getRole"]),
  },
};
</script>
