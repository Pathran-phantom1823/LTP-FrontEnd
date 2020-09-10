<template>
<div>
    <div class="container" style="margin-top:100px; ">
        <div class="row">
            <div class="col-sm-7">
                <div class="column" style="margin-top:65px;">
                    <h1 style="color:white">Language Translation Portal</h1>
                    <br>
                    <img src="@/assets/login.png">
                </div>
            </div>
            <div class="col-sm-5">
                <div class="yit-cotact-form common-form white-color-bg img-shadow input-style-6" style="border-radius:7px;">
                    <h6 class="text-center pad-40-all" style="color: #0085BE; font-family:verdana;font-size:300%">LTP</h6>
                    <form class="pad-20-all mt-20 mb-20" id="contact-form">
                        <div class="form-group control-group">
                            <input name="email" placeholder="Email" class="form-control" type="email">
                            <i class="ti-email themify-icon input-icon"></i>
                        </div>
                        <br>
                        <div class="form-group control-group">
                            <input name="password" placeholder="Password" class="form-control" :type="show ? 'text' : 'password'">
                            <i class="ti-lock themify-icon input-icon"></i>
                            <i :class="show ? 'fa fa-eye input-icon' : 'fa fa-eye-slash input-icon'" @click="show = !show" style="position:absolute; left:93%"></i>
                        </div>
                        <br>
                        <div class="form-group">
                            <input style="background-color: #0085BE;border-radius:7px" name="btn-submit" class="btn btn-block control-group" value="LOGIN" type="submit">
                        </div>
                    </form>
                    <div>
                        Don't have an account?
                        <router-link to="/register" style="color: #0085BE">Sign up</router-link>
                        <br>
                        <router-link to="/forgot" style="color: #0085BE">Forgot password</router-link>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Login",
    components: {},
    data() {
        return {
            show: false
        };
    }
};
</script>
<style>
.form-control {
    border-color: #418dff;
}

body {
    background-color: #0085be;
}
</style>
