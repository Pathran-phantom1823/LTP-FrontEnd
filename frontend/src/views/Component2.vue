<template>
  <div>
    <h3>Form</h3>
    <form @submit.prevent="submit" v-if="isLoggedIn">
      <input v-model="name" type="text" placeholder="Name" />
      <br />
      <br />
      <input v-model="email" type="email" placeholder="Email" />
      <br />
      <br />
      <input v-model="password" type="password" placeholder="Password" />
      <br />
      <br />
      <input v-model="age" type="number" placeholder="Age" /><br><br>
      <button>Register</button> 
    </form>
    <form @submit.prevent="login" v-if="!isLoggedIn">
      <input v-model="email" type="email" placeholder="Email" />
      <br />
      <br />
      <input v-model="password" type="password" placeholder="Password" />
      <br />
      <br />
      <button>Login</button> 
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Component2",
  data(){
      return{
          name: '',
          email: '',
          password: '',
          age: null,
          isRegister: true
      }
  },
  computed: {
      isLoggedIn(){
          return localStorage.getItem('token') !== null || localStorage.getItem('token') !== undefined
      }
  },
  methods:{
      submit(){
          let params = {
              name: this.name,
              email: this.email,
              password: this.password,
              age: this.age
          }
          let API = "https://api-nodejs-todolist.herokuapp.com/user/register"
          axios.post(API, params).then(res => {
              console.log(res)
              localStorage.setItem('token', res.data.token)
              this.isRegister = false
              this.name = ""
              this.email = ""
              this.password = ""
              this.age = ""
          })
      },
      login(){
          let params = {
              email: this.email,
              password: this.password
          }
          let API = "https://api-nodejs-todolist.herokuapp.com/user/login"
          axios.post(API, params).then(res => {
              console.log(res)
              this.email = ""
              this.password = ""
          })
      }
  }
};
</script>

<style>
</style>
