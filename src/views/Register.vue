<template>
  <div class="container" style="margin-top:100px;">
       <div class="yit-cotact-form common-form white-color-bg img-shadow input-style-6"  style="width:50%;margin-left:auto;margin-right:auto;display:block">
              <h6 class="text-center blue-color-bg pad-15-all">Register</h6>
              <form class="pad-15-all mt-20 mb-20" id="contact-form">
                <div class="form-group control-group">
                  <input name="firstname" placeholder="Enter Name" class="form-control" type="text">
                  <i class="ti-user themify-icon input-icon"></i>
                </div>
                <div class="form-group control-group">
                  <input name="email" placeholder="Enter Email" class="form-control" type="email">
                  <i class="ti-email themify-icon input-icon"></i>
                </div>
                <div class="form-group control-group">
                  <input name="phoneno" placeholder="Enter Phone" class="form-control" type="text">
                  <i class="ti-mobile themify-icon input-icon"></i>
                </div>
                <div class="form-group">
                   <input name="phoneno" placeholder="Address" class="form-control" type="text">
                  <i class="ti-map-alt themify-icon input-icon"></i>
                </div>
                <div class="form-group control-group">
                    <input name="password" placeholder="Password" class="form-control" :type="show ? 'text' : 'password'">
                    <i class="ti-lock themify-icon input-icon"></i>
                    <i :class="show ? 'fa fa-eye input-icon' : 'fa fa-eye-slash input-icon'" @click="show = !show" style="position:absolute; left:85%"></i>
                </div><br>
                <div class="form-group">
                  <input name="btn-submit" class="btn btn-block  btn-primary" value="Submit" type="submit">
                </div>
              </form>
              <div>Already have an account?<br><router-link to="/login">Login Here!</router-link></div><br>
            </div>
  </div>
</template>

<script>
export default {
    name: "Register",
    data(){
        return{
            show: false
        }
    }
}
</script>

<style>

</style>