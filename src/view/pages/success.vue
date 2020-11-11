<template>
    <div class="container-fluid pt-20">
        <p> success payment page </p>
        <br>
        <h1> success </h1>
    </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
    created(){
        let param = this.$route.query
        const id = localStorage.getItem('value')
        const userID = id.substr(id.lastIndexOf('*') + 1)
        ApiService.get("/success/" + userID + '/' + param.paymentId + '/' + param.PayerID).then(response => {
            console.log(response);
        })
    }
}
</script>

<style>

</style>
