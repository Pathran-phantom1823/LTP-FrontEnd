<template>
    <div>
        <Banner/>
        <About/>
        <Pricing/>
    </div>
</template>

<script>
import Banner from "../components/Banner/Banner"
import About from "../views/Content/About"
import Pricing from "../views/Content/Pricing"
export default {
    name: "LandingPage",
    components: {
        Banner,
        About,
        Pricing
    }
}
</script>

<style>

</style>