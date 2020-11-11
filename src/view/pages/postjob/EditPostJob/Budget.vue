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
                <v-text-field outlined v-model="budgets.fixedPrice" label="Price" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
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
                            <v-text-field outlined v-model="budgets.fromPrice" label="Price From:" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
                        </b-col>
                        <b-col sm="6">
                            <v-text-field outlined v-model="budgets.toPrice" label="Price To:" prepend-inner-icon="mdi-square-inc-cash"></v-text-field>
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
                            <b-form-datepicker type="date" v-model="budgets.fromDate" class="form-control"></b-form-datepicker>
                        </b-col>
                        <b-col sm="6">
                            <label for="fromDate">
                                <strong>To:</strong>
                            </label>
                            <b-form-datepicker type="date" v-model="budgets.toDate" class="form-control"></b-form-datepicker>
                        </b-col>
                    </b-row>
                    <div class="mt-20">
                        <v-btn color="primary" @click="next" :disabled="handleNext">Done</v-btn>                    </div>
                </v-card>
                <!-- <br>
                <v-card class="p-5">
                    <label for="title">
                        <strong>Enter your Email address*</strong>
                    </label>
                    <b-form-input type="text" v-model="email" id="title" class="form-control"></b-form-input>
                </v-card> -->
            </div>
        </form>
    </v-container>
</div>
</template>

<script>
export default {
    props:['budgets'],
    data() {
        return {
            IsNext: false,
            AddBtnClick: false,
            hourly: true,
            // email: null,
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
    mounted(){
        let vm = this
        this.typeOfPayment.map((el) => {
            if(vm.budgets.fixedPrice !== null){
                if(el.name === "Pay a fixed price"){
                    this.paymentType = el.name;
                    this.hourly = true
                    el.click = true
                }
            }else{
                if(el.name === "Pay per hour"){
                    this.paymetType = el.name;
                    el.click = true;
                    this.hourly = false
                }
            }
        })
    },
    methods: {
        handlePayment(id) {
            let vm = this
            this.typeOfPayment.map((el) => {
                if (el.id === id) {
                    el.click = true;
                    // console.log(id, el.name);
                    this.hourly = true;
                    this.paymentType = el.name;
                    vm.budgets.priceType = el.name
                } else {
                    el.click = false;
                    this.hourly = false;
                }
            });
        },
        next() {
            let vm = this.budgets
            if (vm.priceType === "Pay per hour") {
                if (
                    vm.fromPrice === "" ||
                    vm.toPrice === "" ||
                    vm.fromDate === "" ||
                    vm.toDate === ""
                ) {
                    this.snackbar = true
                } else {
                    vm.fixedPrice = null
                    this.$emit("budget", vm);
                }
            } else if (vm.priceType === "Pay a fixed price") {
                if (
                    vm.fixedPrice === "" ||
                    vm.fromDate === "" ||
                    vm.toDate === ""
                ) {
                    this.snackbar = true
                } else {
                    vm.fromPrice = null,
                    vm.toPrice = null
                    this.$emit("budget", vm);
                    // this.IsNext = true;
                }
            } else {
                alert("Fields are required");
            }
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
