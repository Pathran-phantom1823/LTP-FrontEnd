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
              <img
                :src="require('../../assets/doc-logo.png')"
                alt="WebPanda Default"
                width="214"
                height="47"
              >
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
                  >Jobs</a>
                </li>
                <li class="nav-item">
                  <a
                    title="Signup"
                    class="nav-link"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Signup</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="dropdown-toggle navbar-brand mt-15" href="#" @click="$router.push('/')">
                    <img
                      src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"
                      alt="WebPanda Default"
                      width="50"
                      height="50"
                    >
                  </a>
                  <div
                    class="dropdown-menu yit-radius-none yit-mega-dropdown container-fluid dropdown-menu-scroll"
                    aria-labelledby="navbarDropdown1"
                  >
                    <div class="row ml-0 mr-0">
                      <div class="col-sm-12 mr-100">
                        <ul class="yit-megamenu-item">
                          <li>
                            <a href="#" title="Classic">Classic</a>
                          </li>
                          <li>
                            <a href="#" title="Digital Agency">Digital Agency</a>
                          </li>
                          <li>
                            <a href="#" title="Business Parallax">Business Parallax</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
export default {};
</script>

<style>
</style>
