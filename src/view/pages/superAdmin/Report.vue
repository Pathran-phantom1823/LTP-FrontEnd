<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>REPORTS</v-toolbar-title>
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
                  <p>{{ item.users }}</p>
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
        Resolve
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
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'TOPICS',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Users', value: 'users'},
        { text: 'Date', value: 'date'},
        { text: 'Status', value: 'status', sortable: false ,align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false},
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
        users: '',
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

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'I cannot send quotations',
            descriptions: 'I cannot send quotations descriptions',
            users: '41',
            date: '2020-10-12',
          },
         {
            name: 'I cannot send quotations',
            descriptions: 'I cannot send quotations',
            users: 'John Doe',
            date: '2020-10-12',
          },
          {
            name: 'I cannot send quotations',
            descriptions: 'I cannot send quotations',
            users: 'John Doe',
            date: '2020-10-12',
          },
          {
            name: 'I cannot send quotations',
            descriptions: 'I cannot send quotations', 
            users: 'John Doe',
            date: '2020-10-12',
          },
          {
            name: 'I cannot send quotations',
            descriptions: 'I cannot send quotations', 
            users: 'John Doe',
            date: '2020-10-12',
          },
        ]
      },

      viewItem (item) {
        this.item = item
        this.dialog = true
      },
    },
  }
</script>