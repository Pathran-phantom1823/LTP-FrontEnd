<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 "
    max-width="900"
    style="padding-bottom:0px;padding-top:45px"
    
  >
    
    <v-card-title class="overline" style="justify-content:center;font-weight:500;size:3rem">Powered by</v-card-title>
    <v-img
              src="@/assets/pay.jpg"
              height="80" 
              width="80"
              style="margin:auto"
            ></v-img>

    <div class="container" style="padding-right:140px;padding-left:140px">
      <v-row align="center" class="mx-0">
        <v-col cols="12" sm="12">
          <input type="text" class="form-control" id="validationDefault01" placeholder="CardNumber" value="" required></v-col>
        <v-col cols="12" sm="6">
          <input type="text" class="form-control" id="validationDefault01" placeholder="Expires" value="" required></v-col>
        <v-col cols="12" sm="6">
          <input type="text" class="form-control" id="validationDefault01" placeholder="CSC" value="" required></v-col>
       </v-row>

      <v-card-title class="Subtitle 2" align="center" style="font-weight:bold" >Billing Address</v-card-title>
      <v-row align="center" class="mx-0">
          <v-col cols="12" sm="6">
          <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="" required></v-col>
          <v-col cols="12" sm="6">
          <input type="text" class="form-control" id="validationDefault01" placeholder="Last name" value="" required></v-col>
          <v-col cols="12" sm="12">
          <input type="text" class="form-control" id="validationDefault01" placeholder="Street Address" value="" required></v-col>
          <v-col cols="12" sm="12">
          <input type="text" class="form-control" id="validationDefault01" placeholder="Apt.,ste.,bldg." value="" required></v-col>
          <v-col cols="12" sm="12">
          <input type="text" class="form-control" id="validationDefault01" placeholder="City" value="" required></v-col> 
          <v-col cols="12" sm="12">
          <select name="country"  class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Philippines</option>
            <option v-for="(country, index) in states" :key="index" :value="country.initial">{{country.name}}</option>
          </select></v-col>    
          <v-col cols="12" sm="12">
          <input type="number" class="form-control" id="validationDefault01" placeholder="Zipcode" value="" required></v-col> 
          <v-col cols="12" sm="12">
          <input type="number" class="form-control" id="validationDefault01" placeholder="Mobile" value="" required></v-col>   
          <v-col cols="12" sm="12">
          <input type="email" class="form-control" id="validationDefault01" placeholder="Email" value="" required></v-col> 
      </v-row>

    </div>

  
<v-divider class="mx-2"></v-divider>

    <div class="form-check" style="margin-left:5%;padding-bottom:5%">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" >
    <label class="form-check-label" for="exampleCheck1">Ship to billing to address</label>
  </div>
   
  
    <div style="padding-bottom:5%">
       <center><b-button  style="background-color:rgb(10, 110, 169);color:white;border-radius:30px;width:90%" type="submit">Pay Now</b-button></center>
    </div>
 </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      states: [{
                name: "Viet Nam",
                initial: "VN",
            },
            {
                name: "United States",
                initial: "US",
            }
        ],
    }),

    methods: {
     
    },
  }
</script>

