<template>
  <div>
    <center>
      <h1 class="pricingTitle">Pricing</h1>
      <br />
      <v-btn-toggle v-model="toggle_exclusive" rounded>
        <v-btn color="primary" @click="isUser = true">Regular User</v-btn>
        <v-btn color="success" @click="isUser = false">Organization</v-btn>
      </v-btn-toggle>
      <b-row>
        <b-col
          sm="6"
          v-for="payment in paymentType"
          :key="payment.title"
          data-aos="flip-right"
          data-aos-duration="3000"
        >
          <b-card border-variant="primary" style="width: 50%">
            <b-card-text>
              <h3>
                <i
                  :class="payment.icon"
                  style="font-size: 30px"
                  class="pr-5"
                ></i
                >{{ payment.title }}
              </h3>
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
              <div class="priceTitle">
                <h1>0</h1>
                USD/Yr
              </div>
              <hr style="border-color: blue" />
              <h1>Free User</h1>
              <div class="trial">Free for 1 year</div>
              <br /><br /><br /><br />
              <div class="text--primary" style="font-size: 15px">
                <div>
                  <li>
                    Register in Language <br />
                    translation Portal
                  </li>
                  <br />
                  <li>
                    Perform the basic <br />
                    features of this Portal
                  </li>
                  <br />
                </div>
              </div>
              <br /><br />
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button
              variant="outline-warning"
              block
              @click="$router.push('/register')"
              class="button"
              >Register Now</b-button
            > </v-card-actions
          ><br />
        </v-card>
      </b-col>
      <b-col col lg="4">
        <v-card class="mx-auto price" max-width="344">
          <v-card-text>
            <center>
              <div class="priceTitle">
                <h1>140</h1>
                USD/Yr
              </div>
              <hr style="border-color: blue" />
              <h1>Standard User</h1>
              <div class="trial">Avail for 1 year</div>
              <br />
              <br />
              <div class="text--primary" style="font-size: 15px">
                <div>
                  <li>Be a Full member</li>
                  <br />
                  <li>Gain and Show your member badge to everyone</li>
                  <br />
                  <li>Become a Priority in getting jobs</li>
                  <br />
                  <li>Become a member of Translators for Quotation</li>
                  <br />
                </div>
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button
              variant="outline-primary"
              block
              @click="avail('user_standard')"
              class="button"
              >Avail Now</b-button
            > </v-card-actions
          ><br />
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
              <div class="priceTitle">
                <h1>240</h1>
                USD/Yr
              </div>
              <hr style="border-color: blue" />
              <h1>Standard</h1>
              <div class="trial">Avail for 1 year</div>
              <br /><br />
              <div class="text--primary" style="font-size: 15px">
                <ul>
                  <li>Be a member</li>
                  <br />
                  <li>Avail features for organization</li>
                  <br />
                </ul>
              </div>
            </center>
          </v-card-text>
          <v-card-actions>
            <b-button
              variant="outline-primary"
              block
              @click="avail('organization')"
              class="button"
              >Avail Now</b-button
            > </v-card-actions
          ><br />
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
    <v-dialog v-model="dialog" max-width="1000" persistent>
      <v-card>
        <b-row>
          <b-col sm="4">
            <center>
              <div
                style="
                  height: 150px;
                  width: 150px;
                  background-color: blue;
                  border-radius: 50%;
                "
                class="pt-2"
              >
                <span class="svg-icon svg-icon-success svg-icon-10x">
                  <inline-svg src="media/svg/avatars/007-boy-2.svg" />
                </span>
              </div>
              <br />
              <h1>
                {{ plan }}
              </h1>
            </center>
            <v-form class="pl-2">
            <div class="form-group">
              <label>Price</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="locstate"
                placeholder="State"
                :value="tempPrice"
                disabled
              />
            </div>
            <div class="form-group">
              <label>Currency</label>
              <select
                name=""
                id=""
                class="form-control form-control-solid form-control-lg"
                v-model="selectedCurrency"
              >
                <option value="">Select Currency:</option>
                <option
                  v-for="(currency, index) in currencies"
                  :key="index"
                  :value="currency.code"
                  class="form-control"
                >
                  {{ currency.name }}({{ currency.code }})
                </option>
              </select>
            </div>
            </v-form>
          </b-col>
          <b-col sm="8">
            <v-card-text>
              <v-form>
                <div class="form-group">
                  <label>Payment method:</label>
                  <v-select v-model="selectedWayOfPayment" outlined :items="waysofPayment"> </v-select>
                </div>
                <div class="form-group">
                  <label>Intent:</label>
                  <v-select outlined v-model="selectedIntent" :items="intents"> </v-select>
                </div>
                <div class="form-group">
                  <label>Description:</label>
                  <textarea
                    class="form-control form-control-solid form-control-lg"
                    name="locstate"
                    placeholder="Description"
                    v-model="description"
                  />
                </div>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="orange darken-1" text @click="dialog = false">
                Cancel
              </v-btn>

              <v-btn
                color="blue darken-1"
                @click="dialog = false"
                style="color: white"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </b-col>
        </b-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Currency from "./Currency.js";
export default {
  data() {
    return {
      dialog: false,
      isUser: true,
      currencies: Currency,
      toggle_exclusive: undefined,
      plan: null,
      selectedCurrency: null,
      selectedWayOfPayment: null,
      selectedIntent: null,
      description: null,
      price: null,
      tempPrice: null,
      paymentMethod: null,
      intents: ["SALE", "WITHDRAW", "DEPOSIT", "TRANSFER"],
      waysofPayment: ["PayPal"],
      paymentType: [
        {
          title: "Credit Card (Coming Soon)",
          icon: "far fa-credit-card",
          click: false,
        },
        {
          title: "Paypal",
          icon: "fab fa-cc-paypal",
          click: false,
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
    avail(data) {
      console.log(this.plan);
      this.$store.commit("setplan", data);
      localStorage.setItem("plan", data);
      if (data === "user_standard") {
        this.plan = "Standard User";
        this.tempPrice = 140;
        this.dialog = true;
        console.log(this.plan);
      } else {
        this.plan = "Standard Organization";
        this.tempPrice = 240;
        this.dialog = true;
      }
      // this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped>
.pricingTitle {
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
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
  transition: transform 0.3s ease-out, filter 0.3s,
    -webkit-transform 0.3s ease-out, -webkit-filter 0.3s;
}

.priceTitle {
  background-color: #33bcf7;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding-top: 40px;
  font-size: 20px;
}

.priceTitle h1 {
  font-size: 50px;
}

li {
  list-style-type: none;
}

.trial {
  font-size: 0.9rem;
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
