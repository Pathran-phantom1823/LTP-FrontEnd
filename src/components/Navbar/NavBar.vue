<template>
<div class="page-wrapper">
<header class="webp-app-header">
  <div class="yit-nav yit-nav-transparent-style yit-nav-inverse yit-custom-nav-1" style="background-color:rgba(255, 255, 255, 1)">
     <nav class="navbar navbar-expand-md fixed-top navbar-light bg-none pt-20 pb-20 yit-scroll-nav yit-on-scroll-nav yit-bsnav-full-right-menu normal-logo js-nav-active">
      <div class="container-fluid">
        <h1>LTP</h1>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto font-weight-medium yit-upcase-nav js-nav-active text-uppercase">
            <li class="nav-item">
              <a class="nav-link" @click="toQuotation">Quotation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="toLogin">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="toRegister">SignUp</a>
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
import Navbar from "../Navbar"
export default {
    name: "Navbar",
    components:{
        // Banner
    },
    data(){
        return{
            navbar: Navbar
        }
    },
    methods: {
      toLogin(){
        this.$router.push("login")
      },
      toRegister(){
        this.$router.push("register")
      },
      toQuotation(){
        this.$router.push("quotation")
      } 
    }
};
</script>

<style>
</style>