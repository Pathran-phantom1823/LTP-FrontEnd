<template>
  <div>
    <NavBar></NavBar>
    <Banner/>
    <About/>
    <Pricing/>
  </div>
</template>

<script>
import Banner from "../components/Banner/Banner";
import About from "../views/Content/About";
import Pricing from "../views/Content/Pricing";
import NavBar from "../components/Navbar/LandingPageNavBar";
export default {
  name: "LandingPage",
  components: {
    Banner,
    About,
    Pricing,
    NavBar
  }
};
</script>
