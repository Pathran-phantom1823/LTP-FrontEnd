<template>
<v-data-table :headers="headers" :items="agents" sort-by="calories" class="elevation-1">
    <template v-slot:top>
        <v-toolbar flat>
            <v-toolbar-title>My Agents</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
             <AddAgent/>
            <v-dialog v-model="dialog" max-width="500px" persistent>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                            <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                            <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                            <!-- <v-text-field v-model="editedItem.password" label="Password"></v-text-field> -->
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                            Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="headline">Are you sure you want to remove this agent?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
    </template>
    <!-- <template v-slot:item.status="{ item }">
        <v-chip class="ma-2" :color="item.status === 'assigned' ? 'success' : null " style="cursor:pointer" @click="updateStatus(item.email)">
            {{item.status}}
        </v-chip>
    </template> -->
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
        color="blue"
        medium
      >
        mdi-pencil
      </v-icon>
       <v-icon
        small
        class="mr-2"
        @click="deleteItem(item)"
        color="red"
        medium
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
            Reset
        </v-btn>
    </template>
</v-data-table>

</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
import AddAgent from "@/view/pages/superAdmin/AddAgent.vue"

export default {
  components:{
    AddAgent,
  },
    data: () => ({
        dialog: false,
        dialogDelete: false,
        agents: [],
        headers: [{
                text: 'Email',
                align: 'start',
                sortable: false,
                value: 'email',
            },
            {
                text: 'Username',
                value: 'username'
            },
            // {
            //     text: 'Password',
            //     value: 'password'
            // },
            // {
            //     text: 'Status',
            //     value: 'status',
            //     sortable: false
            // },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
        members: [],
        itemId: null,
        editedIndex: -1,
        editedItem: {
            username: '',
            email: '',
            // password: '',
        },
        defaultItem: {
            username: '',
            email: 0,
            // password: 0,
        },
    }),

    mounted() {
        this.retrieve()
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.members = [{
                    username: 'Gingerbread',
                    email: 'gingerbread@gmail.com',
                    password: 'pass6',
                    status: 'assigned'
                },
                {
                    username: 'Jelly bean',
                    email: 'jellybean@gmail.com',
                    password: 'pass5',
                    status: 'no assignment'
                },
                {
                    username: 'Lollipop',
                    email: 'lolipop@gmail.com',
                    password: 'pass4',
                    status: 'no assignment'
                },
                {
                    username: 'Honeycomb',
                    email: 'Honeycomb@gmail.com',
                    password: 'pass3',
                    status: 'no assignment'
                },
                {
                    username: 'Donut',
                    email: 'Donut@gmail.com',
                    password: 'pass2',
                    status: 'assigned'
                },
                {
                    username: 'KitKat',
                    email: 'kitkat@gmail.com',
                    password: 'pass1',
                    status: 'no assignment'
                },
            ]
        },

        editItem(item) {
            // console.log(item.id);
            this.itemId = item.id
            this.editedIndex = this.members.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.itemId = item.id
            this.editedIndex = this.members.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            ApiService.put("deleteMember", {
                id: this.editedItem.id,
                username: this.editedItem.username,
                email: this.editedItem.email,
                expired: this.editedItem.expired,
                password: this.editedItem.password,
                isMember: this.editedItem.isMember,
                isDisabled: "true",
                roleId: this.editedItem.roleId,
                createdAt: this.editedItem.createdAt
            }).then(() => {
                this.retrieve()
                this.$router.push('/add-accounts')
            })
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            // console.log(this.itemId)
            console.log("data", this.editedItem)
            this.members.map(el => {
                if (el.id === this.itemId) {
                    this.members.splice(this.itemId, 1);
                    ApiService.put("updateMember", {
                        id: this.itemId,
                        username: this.editedItem.username,
                        email: this.editedItem.email,
                        accountType: this.editedItem.accountType,
                        expired: this.editedItem.expired,
                        password: this.editedItem.password,
                        isMember: false,

                    }).then(() => {
                        // console.log(res)
                        this.$router.push('/add-accounts')
                        Swal.fire({
                            title: "",
                            text: `${this.itemId} is Successfully Update`,
                            icon: "success",
                            confirmButtonClass: "btn btn-secondary",
                        })
                    })
                }
            })
            this.close()
        },

        retrieve() {
            const id = localStorage.getItem('value')
            const userID = id.substr(id.lastIndexOf('*') + 1)
            ApiService.post('getmembers', {
                id: userID
            }).then(res => {
                // console.log(res.data);
                res.data.map(el => {
                    this.agents.push(el)
                })
                // this.members = res
                // console.log(this.members);
            })
        }
    },
}
</script>
