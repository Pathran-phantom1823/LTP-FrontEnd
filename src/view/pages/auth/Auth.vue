<template>
  <v-container fluid class="content">
    <b-row class="p-10">
      <b-col sm="6">
        <v-img src="../../../../public/media/bg/banner1.png" class="serviceImage"></v-img>
      </b-col>
      <b-col sm="6">
        <div id="kt_login">
          <router-view></router-view>
        </div>
      </b-col>
    </b-row>
  </v-container>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "auth",
  methods: {},
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    backgroundImage() {
      return process.env.BASE_URL + "media/bg/bg-5.jpg";
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
}

@media only screen and (max-width: 600px) {
  .content {
  height: 150vh;
}
}
</style>
