<template>
  <ul>
      <li v-for="navs in navbar" :key="navs.name">{{navs.name}}</li>
  </ul>
</template>

<script>
import Navbar from "./Navbar.js"
export default {
    name: "Navbar",
    data(){
        return{
            navbar: Navbar,
            navbars: []
        }
    },
    mounted(){
        console.log(Navbar)
    }
}
</script>

<style>

</style>