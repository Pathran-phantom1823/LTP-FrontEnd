<template>
<div>
    <v-snackbar v-model="snackbar" :timeout="timeout" left color="red" elevation="24">
        {{ text }}
    </v-snackbar>
    <v-container>
        <form style="text-align: left">
            <v-card style="padding: 10px">
                <label for="title">
                    <strong>How much would you pay your translator?*</strong>
                </label>
                <b-row>
                    <b-col v-for="payment in paymentFunc" :key="payment.id">
                        <v-card class="p-5 projecType" @click="handlePayment(payment.id)" :style="
                  payment.click === true 
                    ? 'background-color:rgb(17, 58, 240);color:white'
                    : null
                ">
                            <strong>
                                <p>{{ payment.name }}</p>
                            </strong>
                        </v-card>
                    </b-col>
                </b-row>
            </v-card>
            <br />
            <v-card style="padding: 10px" v-if="hourly">
                <label for="title">
                    <strong>Fixed Price:*</strong>
                </label>
                <v-text-field outlined v-model="paymentNoRange" label="Price" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
            </v-card>
            <br />
            <div>
                <v-card class="card" style="padding: 10px" v-if="!hourly">
                    <label for="title">
                        <strong>Hourly payment range:*</strong>
                        <br />
                    </label>
                    <b-row>
                        <b-col sm="6">
                            <v-text-field outlined v-model="withRange.from" label="Price From:" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
                        </b-col>
                        <b-col sm="6">
                            <v-text-field outlined v-model="withRange.to" label="Price To:" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
                        </b-col>
                    </b-row>
                </v-card>
                <br />
                <v-card style="padding: 10px">
                    <label for="title">
                        <strong>Date the project needed:*</strong>
                        <br />
                    </label>
                    <b-row>
                        <b-col sm="6">
                            <label for="fromDate">
                                <strong>From:</strong>
                            </label>
                            <b-form-datepicker type="date" v-model="dateRange.from" class="form-control"></b-form-datepicker>
                        </b-col>
                        <b-col sm="6">
                            <label for="fromDate">
                                <strong>To:</strong>
                            </label>
                            <b-form-datepicker type="date" v-model="dateRange.to" class="form-control"></b-form-datepicker>
                        </b-col>
                    </b-row>
                </v-card>
                <br>
                <v-card class="p-5">
                    <label for="title">
                        <strong>Enter your Email address*</strong>
                    </label>
                    <b-form-input type="text" v-model="email" id="title" class="form-control"></b-form-input>
                </v-card>
            </div>
            <div class="mt-20">
                <v-btn color="primary" @click="next" :disabled="handleNext">Done</v-btn>
                <v-btn color="danger" @click.prevent="reset">Reset</v-btn>
            </div>
        </form>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            IsNext: false,
            AddBtnClick: false,
            hourly: true,
            email: null,
            typeOfPayment: [{
                    id: 0,
                    name: "Pay per hour",
                    click: false
                },
                {
                    id: 1,
                    name: "Pay a fixed price",
                    click: false
                },
            ],
            withRange: {
                from: null,
                to: null,
            },
            paymentNoRange: null,
            dateRange: {
                from: null,
                to: null,
            },
            paymentType: null,
            snackbar: false,
            text: "Fields with(*) are required",
            timeout: 3000,
        };
    },
    computed: {
        paymentFunc() {
            return this.typeOfPayment;
        },
        handleNext() {
            return this.IsNext;
        },
    },
    methods: {
        handlePayment(id) {
            this.typeOfPayment.map((el) => {
                if (el.id === id) {
                    el.click = true;
                    this.hourly = true;
                    this.paymentType = el.name;
                } else {
                    el.click = false;
                    this.hourly = false;
                }
            });
        },
        next() {
            if (this.paymentType === "Pay per hour") {
                if (
                    this.withRange.from === null ||
                    this.withRange.to === null ||
                    this.dateRange.from === null ||
                    this.dateRange.to === null
                ) {
                    this.snackbar = true
                } else {
                    // console.log(this.email)
                    let paremeter = {
                        email: this.email,
                        paymentType: this.paymentType,
                        priceFrom: this.withRange.from,
                        priceTo: this.withRange.to,
                        dateFrom: this.dateRange.from,
                        dateTo: this.dateRange.to,
                    };
                    this.$emit("budget", paremeter);
                    this.IsNext = true;
                }
            } else if (this.paymentType === "Pay a fixed price") {
                if (
                    this.paymentNoRange === null ||
                    this.dateRange.from === null ||
                    this.dateRange.to === null
                ) {
                    this.snackbar = true
                } else {
                    let paremeter = {
                        email: this.email,
                        paymentType: this.paymentType,
                        fixedPrice: this.paymentNoRange,
                        dateFrom: this.dateRange.from,
                        dateTo: this.dateRange.to,
                    };
                    this.$emit("budget", paremeter);
                    this.IsNext = true;
                }
            } else {
                alert("Fields are required");
            }
        },
        reset() {
            this.email = null
            this.paymentType = null;
            this.typeOfPayment.map((el) => {
              el.click = false
            })
            this.withRange.from = null;
            this.withRange.to = null;
            this.dateRange.from = null;
            this.dateRange.to = null;
            this.paymentNoRange = null;
            let paremeter = {
                priceFrom: this.withRange.from,
                priceTo: this.withRange.to,
                paymentType: this.paymentType,
                fixedPrice: this.paymentNoRange,
                dateFrom: this.dateRange.from,
                dateTo: this.dateRange.to,
            };
            this.$emit("budget", paremeter);
            this.IsNext = false;
        },
    },
};
</script>

<style scoped>
button {
    width: 100px;
    height: 50px;
    margin-bottom: 20px;
}

.projecType:hover {
    background-color: rgb(17, 58, 240);
    color: white;
    box-shadow: 2px 2px 3px #999;
    cursor: pointer;
}

.actionBtn {
    width: 100px;
    height: 50px;
    margin-bottom: 20px;
}
</style>
