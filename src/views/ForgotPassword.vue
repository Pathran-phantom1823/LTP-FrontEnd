<template>
<div>
    <div class="container" style="margin-top:100px; ">
                <div class="yit-cotact-form common-form white-color-bg img-shadow input-style-6" style="border-radius:7px;">
                    <h6 class="text-center pad-40-all" style="color: #0085BE; font-family:verdana;font-size:300%">LTP</h6>
                    <form class="pad-20-all mt-20 mb-20" id="contact-form">
                        <div class="form-group control-group">
                            <input name="email" placeholder="Enter email address" class="form-control" type="email">
                            <i class="ti-email themify-icon input-icon"></i>
                        </div>
                        <br>
                        <div class="form-group">
                            <input style="background-color: #0085BE;border-radius:7px" name="btn-submit" class="btn btn-block control-group" value="SEND REQUEST" type="submit">
                        </div>
                    </form>
                    <br>
                </div>
            </div>
        </div>
</template>



<script>
export default {
    name: "ForgotPassword",
    data() {
        return {
            show: false
        }
    }
}
</script>

<style>
.form-control {
    border-color: #418dff;
}

body {
    background-color: #0085be;
}
</style>
