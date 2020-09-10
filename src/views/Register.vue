<template>
  <div id="home" class="webp-app-banner yit-scroll-nav" style="background-color: #0085BE">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-lg-7">
          <div class="d-flex align-items-center height-cover xs-height-auto">
            <div class="banner-content xs-banner-large-space">
              <h1 class="mt-15 mb-15" style="color:white">Language Translation Portal</h1>
              <p class="yit-lead" style="color:white">Tanslate Different Language Worlwide</p>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-lg-5 d-flex align-items-center hidden-xs">
          <div
            class="yit-cotact-form common-form white-color-bg img-shadow input-style-6"
            style="width:500px"
          >
            <h6 class="text-center blue-color-bg pad-15-all">Register</h6>
            <form class="pad-15-all mt-20 mb-20" id="contact-form">
              <div class="form-group control-group">
                <input name="firstname" placeholder="Enter Name" class="form-control" type="text" />
                <i class="ti-user themify-icon input-icon"></i>
              </div>
              <div class="form-group control-group">
                <input name="email" placeholder="Enter Email" class="form-control" type="email" />
                <i class="ti-email themify-icon input-icon"></i>
              </div>
              <div class="form-group control-group">
                <input name="phoneno" placeholder="Enter Phone" class="form-control" type="text" />
                <i class="ti-mobile themify-icon input-icon"></i>
              </div>
              <div class="form-group">
                <input name="phoneno" placeholder="Address" class="form-control" type="text" />
                <i class="ti-map-alt themify-icon input-icon"></i>
              </div>
              <div class="form-group control-group">
                <input
                  name="password"
                  placeholder="Password"
                  class="form-control"
                  :type="show ? 'text' : 'password'"
                />
                <i class="ti-lock themify-icon input-icon"></i>
                <i
                  :class="show ? 'fa fa-eye input-icon' : 'fa fa-eye-slash input-icon'"
                  @click="show = !show"
                  style="position:absolute; left:85%"
                ></i>
              </div>
              <br />
              <div class="form-group">
                <button
                  name="btn-submit"
                  class="btn btn-block btn-primary"
                  type="submit"
                >Submit</button>
              </div>
            </form>
            <div>
              Already have an account?
              <br />
              <router-link to="/login">Login Here!</router-link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
button{
    background-color: #0085BE;
  }
</style>