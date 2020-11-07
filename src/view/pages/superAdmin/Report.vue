<template>
  <v-data-table
    :headers="headers"
    :items="topics"
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
          <v-card-title>
              <span class="headline">{{ item.topic }}</span>
            </v-card-title>
                <v-divider></v-divider>
              <v-card-text>
                  <span>{{ item.username }}</span>
                  <p>{{ item.email }}</p>
                  <p>{{ item.reportTimestamp }}</p>
                  <v-divider></v-divider>
                  <p>{{ item.description }}</p>
              </v-card-text>  
              <v-card-actions>
              <v-spacer></v-spacer>
                  <v-btn
                    color="blue"
                    large
                    class="text-white"
                    text
                    @click.prevent="getNotification(item.email)"
                  >
                  Resolve
                  </v-btn>
                  <v-btn
                    @click="dialog = false"
                    color="red"
                    class="text-red"
                    text
                  >Close
                  </v-btn> 
          </v-card-actions>   
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
        large
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
      headers: [
        {
          text: 'TOPICS',
          align: 'start',
          sortable: false,
          value: 'topic',
        },
        { text: 'Users', value: 'username'},
        { text: 'Date', value: 'reportTimestamp'},
        { text: 'Status', value: 'status', sortable: false ,align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false},
      ],
      item:null,
      topics: [],
      accountId:null,
    }),
     computed: {
        isResolve() {
            return this.resolve
        }
    },
    // mounted(){
      
    // },

    

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.retrieveReport()
    },

    methods: {
       changeResolveColor(reportId) {       // let status = null;
            ApiService.post("resolve", {
                id: reportId,
                resolve: "true",
            }).then(() => {
                this.resolved = !this.resolved
                this.retrieveComment()
            })
       },

      viewItem (item) {
        console.log(item)
        this.item = item
        this.dialog = true
      },
  
     retrieveReport() {
      ApiService.get("getReports").then((res) => {
        console.log(res.data);
        this.topics = res.data;
      });
    },

    getNotification(email){
      ApiService.post("send-notification",{
        to: email,
        subject: "Your report has been resolved",
        })
      .then((res) => {
        console.log(res)
      })
    },
  }
}
</script>