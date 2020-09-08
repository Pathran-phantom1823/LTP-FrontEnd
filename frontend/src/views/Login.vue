<template>
  <div>
    <h3>This for the Login Page</h3>
    <Navbar/>
  </div>
</template>

<script>
import router from "../router"
import Navbar from "../components/Navbar.vue"
export default {
    name:"Login",
    components:{
      Navbar
    },
    data(){
      return{
        route: router
      }
    }
}
</script>

<style>

</style>