<template>
  <h1>
      Hello I'am Component 1
  </h1>
</template>

<script>
import axios from 'axios'
export default {
    name: "Component1",
    mounted(){
        let token = `Bearer ${localStorage.getItem('token')}`
        console.log(token)
        axios.get('https://api-nodejs-todolist.herokuapp.com/task', token).then(res => {
            console.log(res.data)
        })
        // this.$axios.get
    }
}
</script>

<style>

</style>