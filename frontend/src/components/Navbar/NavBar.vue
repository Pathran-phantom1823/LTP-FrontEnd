<template>
<div class="page-wrapper">
<header class="webp-app-header">
  <div class="yit-nav yit-nav-transparent-style yit-on-scroll-nav fixed-top yit-nav-inverse yit-custom-nav-1" style="background-color:blue">
    <nav class="navbar navbar-expand-md navbar-light bg-none pt-20 pb-20 yit-bsnav-full-right-menu">
      <div class="container-fluid">
        <h1 style="color:white">LTP</h1>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto font-weight-medium yit-upcase-nav js-nav-active">
            <li class="nav-item dropdown">
              <a title="Pages" class="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:white">Services</a>
              <div class="dropdown-menu yit-radius-none pt-0 pb-0" aria-labelledby="navbarDropdown2">
                    <ul class="yit-seclevel-menu">
                      <li class="nav-item">
                        <a title="Services" class="nav-link toggle" href="javascript:void(0);" id="navbarDropdown4" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" style="color:white">Quotation Schedule</a>
                      </li>
                    </ul>
              </div>
            </li>
            <li class="nav-item" v-for="nav in navbar" :key="nav.name" @click="toPathName(nav.route)">
              <a title="Home" class="nav-link" style="color:white">{{nav.name}}</a>
            </li>
          </ul>
          <ul class="navbar-nav text-uppercase">
            <li class="nav-item">
              <a class="nav-link" @click="toLogin" style="color:white">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="toRegister" style="color:white">SignUp</a>
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
      toPathName(path){
        this.$router.push(path)
      }  
    }
};
</script>

<style>
</style>