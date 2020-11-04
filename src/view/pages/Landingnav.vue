<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="navbar-horizontal" style="background-color:rgb(51, 188, 247)" fixed="top">
        <b-navbar-brand href="#" style="color:white" @click="$router.push('/banner')">
            <h1>LTP</h1>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->

            <b-navbar-nav class="ml-auto">
                <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn icon @click.stop="dialog = true" style="color:#1a75ff;background-color:#1a75ff">
                        <v-icon color="white">mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn color="white" style="color:#1a75ff" @click="quotation">
                        <strong>Instant Quote</strong>
                    </v-btn>
                    <v-btn color="white" style="color:#1a75ff" @click="goToForum">
                        <strong>Forum</strong>
                    </v-btn>
                    <v-btn color="white" style="color:#1a75ff" @click="$router.push('login')">
                        <strong>Login</strong>
                    </v-btn>
                    <v-btn color="white" style="color:#1a75ff" @click="$router.push('register')">
                        <strong>Register</strong>
                    </v-btn>
                </v-btn-toggle>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <!-- </v-card> -->
    <v-dialog v-model="dialog" persistent max-width="590">
        <v-card>
            <v-card-title class="headline">Search Translators/Jobs</v-card-title>
            <div class="p-5">
                <form>
                    <v-select :items="searchCategory" outlined label="Select Category"></v-select>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="languages" outlined label="From:"></v-select>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="languages" outlined label="To:"></v-select>
                        </v-col>
                    </v-row>
                    <v-btn color="primary">Search</v-btn>
                </form>
            </div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            toggle_exclusive: undefined,
            searchCategory: ["Job", "Translator"],
            languages: [
                "Chines",
                "Japanes",
                "English",
                "Filipino",
                "Turkish",
                "French",
                "Spanish",
            ],
        };
    },
    methods: {
        quotation() {
            this.$router.push('/instant-quote')
            sessionStorage.setItem('method', 'quotation')
        },
        goToForum() {
            this.$router.push('/forums')
        }
    }
};
</script>

<style>
</style>
