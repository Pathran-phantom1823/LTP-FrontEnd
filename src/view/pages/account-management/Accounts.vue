<template>
<v-data-table :headers="headers" :items="members" sort-by="calories" class="elevation-1">
    <template v-slot:top>
        <v-toolbar flat>
            <v-toolbar-title>My Members</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px" persistent>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <span v-if="isExist" style="color: red">Username is Unavailable.</span>
                            <v-text-field v-model="editedItem.username" label="Username" @input="checkUsername"></v-text-field>
                            <span v-if="emailexist" style="color: red">Email is Unavailable.</span>
                            <v-text-field v-model="editedItem.email" label="Email" @input="checkEmail"></v-text-field>
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
                    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
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
        <v-btn small color="info" class="mr-2" @click="editItem(item)">
            edit
        </v-btn>
        <v-btn small color="orange" @click="deleteItem(item)">
            delete
        </v-btn>
    </template>
    <template v-slot:no-data>
            No Data
    </template>
</v-data-table>
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [{
                text: 'Email',
                align: 'start',
                sortable: false,
                value: 'email',
            },
            {
                text: 'Useraname',
                value: 'username'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
        desserts: [],
        members: [],
        itemId: null,
        editedIndex: -1,
        isExist: false,
        emailexist: false,
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

    methods: {
        checkUsername(e) {
            ApiService.post("checkUsernameExistence", {
                username: e
            }).then((res) => {
                console.log(res.data);
                if (res.data === "Username is Unavailable") {
                    this.isExist = true;
                } else {
                    this.isExist = false;
                }
            });
        },
        checkEmail(e) {
            ApiService.post("checkEmailExistence", {
                email: e
            }).then((res) => {
                console.log(res.data);
                if (res.data === "Email is Unavailable") {
                    this.emailexist = true;
                } else {
                    this.emailexist = false;
                }
            });
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
                this.$router.push('/organization/add_account')
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
                    this.members.push(el)
                })
            })
        }
    },
}
</script>
