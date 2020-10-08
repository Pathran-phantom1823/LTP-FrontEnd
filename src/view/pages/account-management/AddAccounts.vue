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
                    <v-text-field v-model="email" label="Email" outlined></v-text-field>
                    <v-text-field v-model="username" label="Username" outlined></v-text-field>
                    <v-text-field v-model="password" label="Password" outlined></v-text-field>
                    <v-select v-model="role" :items="roleList" outlined label="Select User Role"></v-select>
                </v-form>
                <b-btn variant="primary" block @click="submit">Add Member</b-btn>
            </v-card>
        </center>
    </v-container>
</div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    data() {
        return {
            roleList: ["Member", "Admin"],
            role: null,
            email: null,
            password: null,
            username: null,
            errorMessage: null
        }
    },
    computed: {
        presentError() {
            return this.errorMessage
        }
    },
    methods: {
        submit() {
            if (this.role === null || this.email === null || this.password === null || this.username === null) {
                this.errorMessage = "Fields are required"
            } else {
                this.errorMessage = null
                Swal.fire({
                    title: "",
                    text: "Member is Successfully added",
                    icon: "success",
                    confirmButtonClass: "btn btn-secondary",
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
