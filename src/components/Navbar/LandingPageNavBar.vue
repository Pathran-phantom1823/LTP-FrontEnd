<template>
  <div class="page-wrapper">
    <header class="webp-header">
      <div
        class="yit-nav yit-nav-transparent-style yit-on-scroll-nav fixed-top"
        style="background-color: #0085BE"
      >
        <nav class="navbar navbar-expand-md navbar-light bg-none pt-20 pb-20">
          <div class="container">
            <a class="navbar-brand" href="#" @click="$router.push('/')">
              <img :src="require('../../assets/doc-logo.png')" alt="WebPanda Default" width="214" height="47">
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto font-weight-medium yit-upcase-nav yit-mega-menu">
                <li class="nav-item">
                  <div class="yit-cotact-form mt-20 common-form input-style-6">
                    <div class="row justify-content-end">
                      <div class="col-xl-12 col-md-12 col-lg-12">
                        <div class="form-group control-group">
                          <input
                            name="SearchJob"
                            placeholder="Search Jobs"
                            class="form-control searchJobs"
                            type="text"
                          >
                          <i class="fa fa-search white-color-text input-icon searchJobsIcon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    title="Services"
                    class="nav-link"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Services</a>
                </li>
                <li class="nav-item">
                  <a
                    title="Signup"
                    class="nav-link"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="toRegister"
                  >Signup</a>
                </li>
                <li class="nav-item">
                  <a
                    title="Login"
                    class="nav-link"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="toLogin"
                  >Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
// import Banner from "../Banner/Banner"
import Navbar from "../Navbar";
export default {
  name: "Navbar",
  components: {
    // Banner
  },
  data() {
    return {
      navbar: Navbar
    };
  },
  methods: {
    toLogin() {
      this.$router.push("login");
    },
    toRegister() {
      this.$router.push("register");
    },
    toPathName(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
::placeholder {
  color: white !important;
}

:-ms-input-placeholder {
  color: white;
}

::-ms-input-placeholder {
  color: white;
}
.searchJobs:focus{
  border-color: white;
}
</style>