<template>
<div>
    <v-btn 
    color="blue darken-1" 
    class="text-white" 
    @click.stop="dialog = true"
    >
    Add Agent
</v-btn>
<v-dialog max-width="500" v-model="dialog">
    <v-container>
        <center>
            <v-card max-width="600" class="form p-4">
                <div style="height:150px;width:150px;background-color:blue;border-radius:50%;" class="pt-2">
                    <span class="svg-icon svg-icon-success svg-icon-10x">
                        <inline-svg src="media/svg/avatars/007-boy-2.svg" />
                    </span>
                </div><br>
                <p style="color:red">{{errorMessage}}</p>
                <v-form>
                    <v-text-field type="email" v-model="email" label="Email" outlined required></v-text-field>
                    <v-text-field type="text" v-model="username" label="Username" outlined required></v-text-field>
                    <v-text-field :type="showPass ? 'password' : 'text'" v-model="password" label="Password" outlined required :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPass = !showPass"></v-text-field>
                </v-form>
                <b-btn variant="primary" block @click="submit">Add Agent</b-btn>
            </v-card>
        </center>
    </v-container>

  </v-dialog>  
</div>
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";

export default {
    data() {
        return {
            email: null,
            password: null,
            username: null,
            errorMessage: null,
            userID: null,
            showPass: true,
            dialog:false
        }
    },
    mounted(){
        const id = localStorage.getItem('value')
        this.userID = id.substr(id.lastIndexOf('*') + 1)
    },
    computed: {
        presentError() {
            return this.errorMessage
        }
    },
    methods: {
        submit() {
            if (this.email === null || this.password === null || this.username === null) {
                this.errorMessage = "Fields are required"
            } else {
                ApiService.post('member/create', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    orgId: this.userID,
                    roleType: "AGENT"
                }).then(() => {
                    this.errorMessage = null
                    Swal.fire({
                        title: "",
                        text: "Member is Successfully added",
                        icon: "success",
                        confirmButtonClass: "btn btn-secondary",
                    })
                    this.username = null
                    this.email = null
                    this.password = null
                }).catch(err => {
                    Swal.fire({
                        title: "",
                        text: `${err.message}`,
                        icon: "error",
                        confirmButtonClass: "btn btn-secondary",
                    })
                })
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.form {
    margin-top: 20px
}
</style>
