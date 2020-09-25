<template>
  <div>
    <center>
      <h1 class="pricingTitle">Pricing</h1><br>
       <v-btn-toggle v-model="toggle_exclusive" rounded>
        <v-btn color="primary" @click="isUser= true">Regular User</v-btn>
        <v-btn color="success" @click="isUser = false">Organization</v-btn>
      </v-btn-toggle>
      <b-row>
      <b-col sm="3" v-for="payment in paymentType" :key="payment.title">
        <b-card border-variant="primary">
          <b-card-text>
                <h3> <i :class="payment.icon" style="font-size:30px"  class="pr-5"></i>{{payment.title}}</h3>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
      <br />
    </center>
    <b-row v-if="isUser">
      <b-col sm="4" v-for="user in regUser" :key="user.title">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <p class="display-1 text--primary">{{user.price}} USD/Yr</p>
              <hr style="border-color:blue"/>
              <h1>{{user.title}}</h1>
              <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button variant="outline-primary" block @click="$emit('avail', user)">Avail Now</b-button>
          </v-card-actions>
        </v-card>
      </b-col>
    </b-row>
    <b-row v-if="!isUser">
      <b-col sm="4" v-for="org in organization" :key="org.title">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <p class="display-1 text--primary">{{org.price}} USD/Yr</p>
              <hr style="border-color:blue"/>
              <h1>{{org.title}}</h1>
              <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button variant="outline-primary" block @click="$emit('avail', org)">Avail Now</b-button>
          </v-card-actions>
        </v-card>
      </b-col>
    </b-row>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: true,
      regUser: [
        { title: "Free User", price: 0, description: "" },
        { title: "Standard User", price: 99, description: "" },
        { title: "Plus User", price: 149, description: "" },
      ],
      organization: [
        { title: "Standard", price: 249, description: "" },
        { title: "Plus", price: 449, description: "" },
        { title: "Enterprise", price: 949, description: "" },
      ],
      paymentType: [
        { title: "Credit Card", icon: "far fa-credit-card" },
        { title: "Paypal", icon: "fab fa-cc-paypal" },
        { title: "Klarna.se", icon: "fa fa-id-card" },
        { title: "Qliro.se", icon: "fa fa-mobile" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pricingTitle {
  font-size: 50px;
}
.price:hover{
  box-shadow: 0px 5px 30px 0px #ccc;
}
</style>