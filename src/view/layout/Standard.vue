<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      fixed="top"
      class="nav_bar"
    >
      <b-navbar-brand href="#">
        <h1>L T P</h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <v-btn text>
            <a
              class="nav-link text-light navItems"
              @click="redirect('/user/feed')"
              >Home</a
            >
          </v-btn>
          <v-btn text>
            <a
              class="nav-link text-light navItems"
              @click="redirect('/user/job_board')"
              >Jobs</a
            >
          </v-btn>
          <v-btn text>
            <a
              class="nav-link text-light navItems"
              @click="redirect('/user/forum')"
              >Communication</a
            >
          </v-btn>
          <v-btn text>
            <a
              class="nav-link text-light navItems"
              @click="$router.push('/user/messenger')"
              >Messages</a
            >
          </v-btn>
          <!-- <v-btn text>
            <a class="nav-link navItems" id="notifications"
              ><i class="far fa-bell text-light"></i
            ></a>
          </v-btn> -->
          <!-- <b-popover target="notifications" triggers="hover" placement="bottom">
                    <div class="card">
                        <div class="card-body">
                            <h5> notifications </h5>
                        </div>
                    </div>
                </b-popover> -->
          <b-dropdown
            size="sm"
            variant="link"
            toggle-class="topbar-item text-decoration-none"
            no-caret
            right
            no-flip
          >
            <template v-slot:button-content>
              <div
                class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary"
              >
                <span class="svg-icon svg-icon-xl svg-icon-primary">
                  <inline-svg
                    src="media/svg/icons/General/Notifications1.svg"
                  />
                </span>
                <span class="pulse-ring"></span>
              </div>
            </template>
            <b-dropdown-text tag="div" class="min-w-md-350px">
              <form>
                <KTDropdownNotification
                  :quotations="data"
                ></KTDropdownNotification>
              </form>
            </b-dropdown-text>
          </b-dropdown>

          <div>
            <img
              src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"
              alt="Profile Picture"
              class="profile"
              id="profile-popover"
            />
          </div>
          <b-popover
            target="profile-popover"
            triggers="hover"
            placement="bottom"
          >
            <button class="btn form-control">profile info</button>
            <button class="btn form-control">logout</button>
          </b-popover>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import KTDropdownNotification from "@/view/myLayouts/extras/dropdown/DropdownNotification.vue";

export default {
  data() {
    return {
      userdetails: [
        {
          name: "Profile",
        },
        {
          name: "Logout",
        },
      ],
    };
  },
  methods: {
    redirect(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* .navItems {
    margin-left: 10px;
    margin-right: 10px;
} */
.dropdown-menu {
  margin: 0;
  padding: 0;
  outline: none;

  .b-dropdown-text {
    padding: 0;
  }
}

.profile {
  height: 40px;
  width: 40px;
  max-width: 40px;
  max-height: 50px;
  border-radius: 25px;
  cursor: pointer;
}

.nav_bar {
  min-height: 72px !important;
  background: rgb(51, 188, 247) !important;
}

.body {
  background: rgb(240, 240, 240);
  font-family: Poppins, Helvetica, "sans-serif";
}
</style>
