<template>
<div>
    <v-container>
        <center>
            <v-card max-width="500" class="form p-5">
                <div style="height:150px;width:150px;background-color:blue;border-radius:50%;" class="pt-2">
                    <span class="svg-icon svg-icon-success svg-icon-10x">
                        <inline-svg src="media/svg/avatars/007-boy-2.svg" />
                    </span>
                </div><br>
                <p style="color:red">{{errorMessage}}</p>
                <v-form>
                    <span v-if="emailexist" style="color: red">Email is Unavailable.</span>
                    <v-text-field type="email" v-model="email" label="Email" outlined required @input="checkEmail"></v-text-field>
                    <span v-if="isExist" style="color: red">Username is Unavailable.</span>
                    <v-text-field type="text" v-model="username" label="Username" outlined required @input="checkUsername"></v-text-field>
                    <v-text-field :type="showPass ? 'password' : 'text'" v-model="password" label="Password" outlined required :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPass = !showPass"></v-text-field>
                </v-form>
                <b-btn variant="primary" block @click="submit">Add Member</b-btn>
            </v-card>
        </center>
    </v-container>
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
            isExist: false,
            emailexist: false
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
        checkUsername(e) {
            ApiService.post("checkUsernameExistence", {
                username: e
            }).then((res) => {
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
                if (res.data === "Email is Unavailable") {
                    this.emailexist = true;
                } else {
                    this.emailexist = false;
                }
            });
        },
        submit() {
            if (this.email === null || this.password === null || this.username === null ||  this.isExist === true || this.emailexist === true) {
                this.errorMessage = "Fields are required"
            } else {
                ApiService.post('member/create', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    orgId: this.userID,
                    roleType: 'AGENCY-MEMBER'
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
