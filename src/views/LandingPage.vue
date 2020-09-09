<template>
  <div>
    <NavBar></NavBar>
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from "../components/Banner/Banner";
import NavBar from "../components/Navbar/LandingPageNavBar";
export default {
  name: "LandingPage",
  components: {
    Banner,
    NavBar
  }
};
</script>
