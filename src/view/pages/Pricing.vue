<template>
<div>
    <center>
        <h1 class="pricingTitle">Pricing</h1><br>
        <v-btn-toggle v-model="toggle_exclusive" rounded>
            <v-btn color="primary" @click="isUser= true">Regular User</v-btn>
            <v-btn color="success" @click="isUser = false">Organization</v-btn>
        </v-btn-toggle>
        <b-row>
            <b-col sm="6" v-for="payment in paymentType" :key="payment.title" data-aos="flip-right" data-aos-duration="3000">
                <b-card border-variant="primary" style="width:50%">
                    <b-card-text>
                        <h3> <i :class="payment.icon" style="font-size:30px" class="pr-5"></i>{{payment.title}}</h3>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <br />
    </center>
    <b-row v-if="isUser" class="justify-content-md-center">
        <b-col col lg="4">
            <v-card class="mx-auto price" max-width="344">
                <v-card-text>
                    <center>
                        <div class="priceTitle"><h1>0</h1>USD/Yr</div>
                        <hr style="border-color:blue" />
                        <h1>Free User</h1>
                        <div class="trial">Free for 1 year</div>
                        <br><br><br><br>
                        <div class="text--primary" style="font-size:15px">
                            <div>
                                <li>Register in Language <br> translation Portal </li><br>
                                <li>Perform the basic <br> features of this Portal</li><br>
                            </div>
                        </div><br><br>
                    </center>
                </v-card-text>
                <v-card-actions>
                    <b-button variant="outline-warning" block @click="$router.push('/register')" class="button">Register Now</b-button>
                </v-card-actions><br>
            </v-card>
        </b-col>
        <b-col col lg="4">
            <v-card class="mx-auto price" max-width="344">
                <v-card-text>
                    <center>
                        <div class="priceTitle"><h1>140</h1>USD/Yr</div>
                        <hr style="border-color:blue" />
                        <h1>Standard User</h1>
                        <div class="trial">Avail for 1 year</div>
                        <br>
                        <br>
                        <div class="text--primary" style="font-size:15px">
                            <div>
                                <li>Be a Full member</li><br>
                                <li>Gain and Show your member badge to everyone</li><br>
                                <li>Become a Priority in getting jobs</li><br>
                                <li>Become a member of Translators for Quotation</li><br>
                            </div>
                        </div>
                    </center>
                </v-card-text>
                <v-card-actions>
                    <b-button variant="outline-primary" block @click="avail('user_standard')" class="button">Avail Now</b-button>
                </v-card-actions><br>
            </v-card>
        </b-col>
        <!-- <b-col sm="4">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <p class="display-1 text--primary">90 USD/Yr</p>
              <hr style="border-color:blue"/>
              <h1>Standard User</h1><br>
              <div class="text--primary" style="font-size:15px">
                <ul>
                  <li>Be a member</li><br>
                  <li>Gain and Show your member badge to everyone</li><br>
                  <li>Become a Priority in getting jobs</li><br>
                  <li>Access instant quotatio</li><br>
                </ul>
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button variant="outline-primary" block @click="$emit('avail', user)">Avail Now</b-button>
          </v-card-actions>
        </v-card>
      </b-col> -->
    </b-row>

    <b-row v-if="!isUser">
        <b-col sm="12">
            <v-card class="mx-auto price" max-width="344">
                <v-card-text>
                    <center>
                        <div class="priceTitle"><h1>240</h1>USD/Yr</div>
                        <hr style="border-color:blue" />
                        <h1>Standard</h1>
                        <div class="trial">Avail for 1 year</div>
                        <br><br>
                        <div class="text--primary" style="font-size:15px">
                            <ul>
                                <li>Be a member</li><br>
                                <li>Avail features for organization</li><br>
                            </ul>
                        </div>
                    </center>
                </v-card-text>
                <v-card-actions>
                    <b-button variant="outline-primary" block @click="avail('organization')" class="button">Avail Now</b-button>
                </v-card-actions><br>
            </v-card>
        </b-col>
        <!-- <b-col sm="4">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <p class="display-1 text--primary">949 USD/Yr</p>
              <hr style="border-color:blue"/>
              <h1>Plus</h1><br>
               <div class="text--primary" style="font-size:15px">
                <ul>
                  <li>Be a Full member</li><br>
                  <li>Gain and Show your member badge to everyone</li><br>
                  <li>Become a Priority in getting jobs <br> and for booking translators</li><br>
                  <li>Meet new Clients</li><br>
                  <li>Become a member of Translators for Quotation</li><br>
                </ul>
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button variant="outline-primary" block @click="$emit('avail', org)">Avail Now</b-button>
          </v-card-actions>
        </v-card>
      </b-col>
      <b-col sm="4">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <p class="display-1 text--primary">449 USD/Yr</p>
              <hr style="border-color:blue"/>
              <h1>Enterprise</h1><br>
               <div class="text--primary" style="font-size:15px">
                <ul>
                  <li>Be a member</li><br>
                  <li>Gain and Show your member badge to everyone</li><br>
                  <li>Become a Priority in getting jobs</li><br>
                  <li>Access the instant quotation</li><br>
                </ul>
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button variant="outline-primary" block @click="$emit('avail', org)">Avail Now</b-button>
          </v-card-actions>
        </v-card>
      </b-col> -->
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            isUser: true,
            toggle_exclusive: undefined,
            paymentType: [{
                    title: "Credit Card (Coming Soon)",
                    icon: "far fa-credit-card"
                },
                {
                    title: "Paypal",
                    icon: "fab fa-cc-paypal"
                },
                // {
                //     title: "Klarna.se",
                //     icon: "fa fa-id-card"
                // },
                // {
                //     title: "Qliro.se",
                //     icon: "fa fa-mobile"
                // },
            ],
        };
    },
    methods: {
      avail(data){
        this.$store.commit('setplan', data)
        localStorage.setItem('plan', data)
        this.$router.push('/register')
      }
    }
};
</script>

<style lang="scss" scoped>
.pricingTitle {
    font-size: 50px;
    font-weight: bold;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
                 0px -5px 35px rgba(255,255,255,0.3);
}

.price:hover {
    box-shadow: 0px 5px 30px 0px #ccc;
    border: 2px solid rgb(26, 117, 255);
    -webkit-transform: scale(1);
    transform: scale(1);
}

.price {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    vertical-align: top;
    border-radius: 10%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
    transition: -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
    transition: transform 0.3s ease-out, filter 0.3s;
    transition: transform 0.3s ease-out, filter 0.3s, -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
}

.priceTitle{
  background-color:#33BCF7;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding-top:40px;
  font-size:20px
}
.priceTitle h1{
  font-size: 50px;
}

li{
  list-style-type: none;
}

.trial {
    font-size: .9rem;
    font-weight: 600;
    padding: 2px 21px 2px 21px;
    color: #33c4b6;
    border: 1px solid #e4e4e4;
    display: inline-block;
    border-radius: 15px;
    background-color: white;
    position: relative;
    bottom: -5px;
}
</style>
