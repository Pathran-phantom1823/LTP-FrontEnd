<template>
<v-container class="mt-30 jumbotron" style="height: 80vh">
    <!-- <v-row no-gutters> -->
    <!-- <v-col cols="12" sm="6" :md="md1"> -->
    <v-btn color="primary" id="showContact" @click="drawer = !drawer">See Contacts</v-btn>
    <b-card border-variant="primary"  header-tag="header" footer-tag="footer" align="center" class="messageContainer p-0" id="messageContainer">
        <template v-slot:header>
            <h6 class="mb-0">{{contactName}}</h6>
        </template>
        <v-sheet class="messageContent" id="messageContent" style="overflow-y: auto; overflow-x: hidden">
            <div v-if="chats.length <= 0"><h1>Please select your contact</h1></div>
            <div v-else v-for="message in chats" :key="message.mid">
                <span style="color:grey">11:00</span><br><br><br>
                <b-row>
                    <div class="messages">
                        <img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" alt="Avatar" />
                        <b-card bg-variant="primary" text-variant="white" no-body border-variant="primary" class="pt-3 pb-3" v-for="(chat, index) in message.messages" :key="index">
                            <b-card-text>{{chat}}</b-card-text>
                        </b-card>
                    </div>
                </b-row><br>
                <b-row>
                    <div class="darker">
                        <img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" alt="Avatar" class="right" />
                        <b-card bg-variant="warning" text-variant="white" no-body border-variant="warning" class="pt-3 pb-3" v-for="(reply, index) in message.reply" :key="index">
                            <b-card-text>{{reply}}</b-card-text>
                        </b-card>
                    </div>
                </b-row>
            </div>
            <br />
        </v-sheet>
        <v-text-field outlined rounded clear-icon="mdi-close-circle" clearable label="Message" append-icon="mdi-send" color="blue lighten-1" class="inputMessage" style="padding-top: 10px">
        </v-text-field>
    </b-card>

    <!-- </v-col> -->
    <!-- <v-col cols="6" :md="md2"> -->
    <v-navigation-drawer v-model="drawer" :permanent="permanent" right absolute id="drawer" height="500">
        <v-list dense nav shaped class="py-0">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-icon style="color: rgb(51, 188, 247)">mdi-forum</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        <h3>Contacts</h3>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-text-field v-model="search" outlined label="Search" append-icon="mdi-magnify" dense clearable rounded color="blue lighten-1"></v-text-field>

            <v-list-item-group v-model="item" color="primary">
                <v-list-item v-for="item in filteredContacts" :key="item.id" link @click="showMessages(item.id)">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name">
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- <v-fab-transition>
          <v-btn class="mt-10" color="pink" @click="actionNow" dark absolute top left fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition> -->
    <!-- </v-col> -->
    <!-- </v-row> -->
</v-container>
</template>

<script>
import Messages from "./messages.js";
export default {
    data() {
        return {
            item: 1,
            drawer: false,
            messages: Messages,
            connection: null,
            search: '',
            // items: [],
            tempMessage: [],
            contactName: null,
            permanent: false,
            message: [],
            window: {
                width: 0,
                height: 0,
            },
        };
    },
    computed: {
        chats() {
            return this.message
        },
        filteredContacts(){
            return this.tempMessage.filter(el => {
                return el.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            // console.log(this.window.width);
            
            if (this.window.width < 700) {
                this.drawer = !this.drawer;
                document.getElementById("showContact").setAttribute('style', 'display:block')
            } else if (this.window.width < 900 && this.window.width > 700) {
                this.drawer = !this.drawer;
                document.getElementById("showContact").setAttribute('style', 'display:block')
                document.getElementById("messageContainer").setAttribute('style', 'width: 100%')
            } else {
                this.drawer = true;
                document.getElementById("showContact").setAttribute('style', 'display:none')
                document.getElementById("messageContainer").setAttribute('style', 'width: 75%')
            }
        },
        showMessages(data) {
            console.log("data", data);
            this.messages.map((el) => {
                if (el.id === data) {
                    this.contactName = el.name
                    this.message = el.message;
                }
            });
            // console.log(this.message);
        },
    },
    mounted() { 
        // console.log(this.messages)
        this.tempMessage = this.messages
        // this.items = this.messages;
        console.log(this.tempMessage);
    },
};
</script>

<style>
.messageContent {
    height: 70vh;
}

.messageContainer {
    width: 75%;
    height: 95vh;
}

#drawer {
    margin-right: 8%;
    margin-top: 10%;
    display: block;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;
}

#showContact {
    display: none;
}

.darker {
    border-color: white;
    /* background-color: #ddd; */
    width: 50%;
    margin-left: 40%;
}

.messages::after {
    content: "";
    clear: both;
    display: table;
}

.messages img {
    float: left;
    width: 100%;
    border: solid black;
    margin-right: 10px;
    max-width: 40px;
    max-height: 50px;
    border-radius: 25px;
    margin-top: 10px;
}

.darker img.right {
    float: right;
    margin-left: 10px;
    margin-right: 0;
    border: solid black;
    margin-top: 10px;
    max-width: 40px;
    max-height: 50px;
    border-radius: 25px;
}

.time-right {
    float: right;
    color: #aaa;
}

.time-left {
    float: left;
    color: #999;
}

.messages {
    width: 50%;
    margin-left: 10%;
    border: white;
}

::-webkit-scrollbar {
    width: 5px;
}


::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px lightblue;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: lightblue;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0a0af8;
}

@media screen and (max-width: 700px) {
    .messageContainer {
        width: 100%;
        height: auto;
        position: relative;
    }

    #showContact {
        display: block;
    }

    #drawer {
        margin-top: 30%;
    }

    .darker {
        width: 200px !important;
        /* margin-right:30px */
        margin-left: 80px;
    }

    .messages {
        width: 200px !important;
    }
}
</style>
