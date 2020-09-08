<template>
  <div id="app">
    <button><router-link to="/component1">Component1</router-link></button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-if="!isLoggedIn"><router-link to="/component2" >Component2</router-link></button>
    <div id="nav" v-if="isLoggedIn">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout(){
      let token = `Bearer ${localStorage.getItem('token')}`
      let API = "https://api-nodejs-todolist.herokuapp.com/user/logout"
      this.$axios.post(API, token).then(res => {
        console.log(res);
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
