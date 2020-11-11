<template>
  <v-data-table
    :headers="headers"
    :items="quotes"
    sort-by="title"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>QUOTATIONS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="800px"
          v-if="item !== null"
        >
          <v-card class="pa-2">
        <v-icon
           class="float-right"
           @click="dialog = false"
           color="red"
        >mdi-close</v-icon> 
          <v-card-title>
              <span class="headline">{{ item.name }}</span>
            </v-card-title>
              <v-card-text>
                  <p>Agent's name: {{ item.agent }}</p>
                  <p> Assigned to : {{ item.assign }}</p>
                  <p>{{ item.date }}</p>
                  <p>{{ item.descriptions }}</p>
                 
              </v-card-text>     
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

     <template v-slot:item.status="{ item }">
      <v-btn
        color="blue darken-1"
        small
        class="text-white"
        text
        >
        Mark as Read
      </v-btn>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="viewItem(item)"
        color="blue"
        medium
      >
        mdi-eye
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import ApiService from "@/core/services/api.service";

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      quotes: [],
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Posted By', value: 'postedBy'},
        { text: 'Agent', value: 'assignedBy'},
        { text: 'Assign To', value: 'assignedTo'},
        { text: 'Date Posted', value: 'datePosted'},
        { text: 'Date Assigned', value: 'dateAssigned'},
        // { text: 'Actions', value: 'actions', sortable: false},
      ],
      item:null,
      topics: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        users: '',
        date: '',
      },
      defaultItem: {
        name: '',
        agent: '',
        assign: '',
        date: '',
      },
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },
    mounted(){
      this.retrieveQuotation()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Medicine Translation',
            descriptions: 'I cannot send quotations descriptions',
            agent: 'John Doe',
            assign: 'Increment Organization',
            date: '2020-10-12',
          },
           {
            name: 'Medicine Translation',
            descriptions: 'I cannot send quotations descriptions',
            agent: 'Will Smith',
            assign: 'Accent Organization',
            date: '2020-10-12',
          },
           {
            name: 'Medicine Translation',
            descriptions: 'I cannot send quotations descriptions',
            agent: 'Anne Will',
            assign: 'Tour Organization',
            date: '2020-10-12',
          },
           {
            name: 'Medicine Translation',
            descriptions: 'I cannot send quotations descriptions',
            agent: 'John Smith',
            assign: 'Let Organization',
            date: '2020-10-12',
          },
             {
            name: 'Medicine Translation',
            descriptions: 'I cannot send quotations descriptions',
            agent: 'Anne Doe',
            assign: 'Lengwahe Organization',
            date: '2020-10-12',
          },
        ]
      },

      viewItem (item) {
        this.item = item
        this.dialog = true
      },
      retrieveQuotation(){
        ApiService.get("getQuotation").then(res => {
          console.log("data", res.data);
          this.quotes = res.data
        })
      }
    },
  }
</script>