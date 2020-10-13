<template>
<div>
    <b-row>
        <b-col sm="4" v-for="quotation in quote" :key="quotation.id">
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                <v-card-title>
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>
                            <h3>{{quotation.postedBy}}</h3>
                        </v-list-item-title>
                        <v-list-item-title>Today</v-list-item-title>
                    </v-list-item-content>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                    {{quotation.title}}
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-row align="center" justify="end">
                            <v-btn color="white" style="color:#0066ff" @click.stop="showDetails(quotation.id)">
                                View Details
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </b-col>
    </b-row>
     <div class="text-center">
            <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="info">
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3>{{details.postedBy}}</h3>
                        </v-list-item-title>
                        <v-list-item-title>Today</v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list subheader class="mt-5">
                    <center>
                        <h1>{{details.title}}</h1>
                        <h5>{{details.category}}</h5>
                    </center>
                    <v-container>
                        <h3>Description</h3>
                        <v-card class="p-5">{{details.description}}</v-card>
                        <hr style="border:2px solid blue">
                        <b-row>
                            <b-col sm="6">
                                <h3>Language From:</h3>
                                <v-card class="p-5">{{details.languageFrom}}</v-card>
                            </b-col>
                            <b-col sm="6">
                                <h3>Language To:</h3>
                                <b-row>
                                    <b-col v-for="(each, index) in details.languageTo" :key="index">
                                        <v-card class="p-5">{{each}}</v-card>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr style="border:2px solid orange">
                        <b-row>
                            <b-col sm="6">
                                <h3>Date From</h3>
                                <v-card class="p-5">{{details.fromDate}}</v-card>
                            </b-col>
                            <b-col sm="6">
                                <h3>Date To</h3>
                                <v-card class="p-5">{{details.toDate}}</v-card>
                            </b-col>
                        </b-row>
                        <hr style="border:2px solid blue">
                        <b-row>
                            <b-col sm="6">
                                <h3>Price Type</h3>
                                <v-card class="p-5">{{details.priceType}}</v-card>
                            </b-col>
                            <b-col sm="6" v-if="details.priceType === 'Fixed Price'">
                                <h3>Date To</h3>
                                <v-card class="p-5">$ {{details.fixedPrice}}</v-card>
                            </b-col>
                            <b-col sm="6" v-else>
                                <b-row>
                                    <b-col sm="6">
                                        <h3>From Price</h3>
                                        <v-card class="p-5">$ {{details.fromPrice}}</v-card>
                                    </b-col>
                                    <b-col sm="6">
                                        <h3>To Price</h3>
                                        <v-card class="p-5">$ {{details.toPrice}}</v-card>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr style="border:2px solid orange">
                        <b-row>
                            <b-col sm="6">
                                <h3>To Price</h3>
                                <v-card class="p-5">{{details.visibility}}</v-card>
                            </b-col>
                            <b-col sm="6">
                                <h3>To Price</h3>
                                <v-card class="p-5">{{details.levelOfCofidentiality}}</v-card>
                            </b-col>
                        </b-row>
                    </v-container>
                </v-list>
            </v-card>
        </v-dialog>
    </v-row>
</div>
</template>

<script>
import Quotations from "./Quotations.js"
export default {
    data() {
        return {
            quotation: Quotations,
            dialog: false,
            details: [],
            page: 1,
        }
    },
    computed: {
        quote() {
            return this.quotation
        }
    },
    methods: {
        showDetails(id) {
            this.dialog = true
            this.quotation.map(el => {
                if (el.id === id) {
                    this.details = el
                }
            })
            console.log(this.details)
        }
    }

}
</script>

<style>

</style>
