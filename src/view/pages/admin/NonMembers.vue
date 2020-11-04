<template>
<v-card>
    <v-card-title>
        None Members Accounts
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="accounts" :search="search"></v-data-table>
</v-card>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
    data() {
        return {
            search: '',
            accounts: [],
            headers: [{
                    text: 'Username',
                    align: 'start',
                    sortable: false,
                    value: 'username',
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Status',
                    value: 'statu'
                },
            ],
        }
    },
    mounted(){
        this.retrieveAccounts()
    },
    methods: {
         retrieveAccounts(){
            ApiService.post("getAccounts", {roleType: "FREE"}).then(res => {
                this.accounts = res.data
                console.log(res.data);
            })
        }
    }
}
</script>
