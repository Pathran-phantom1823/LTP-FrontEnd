<template>
  <div class="container-fluid mt-20">
    <div class="row justify-content-center">
      <div class="col-md-8 col-xl-6 chat">
        <v-card style="height: 520px" class="overflow-y-auto">
          <v-banner style="background-color: blue" sticky>
            <div class="d-flex bd-highlight">
              <div class="user_info">
                <h1 style="color: white">{{ roomname }}</h1>
              </div>
            </div>
          </v-banner>
          <v-container>
            <div v-for="(chat, index) in chats.messages" :key="index ">
              <center><v-btn v-if="chats.messages.length === 1" @click="retrieveMessages()">View Previous Messages</v-btn></center>
              <!-- <div
                class="chat-status text-center"
                v-if="chat.type === 'join' || chat.type === 'exit'"
              >
                <span class="chat-date">{{ chat.sendDate }}</span>
                <span class="chat-content-center">{{ chat.content }}</span>
              </div> -->
              <div>
                <div
                  class="d-flex justify-content-end mb-4"
                  v-if="chat.senderId.toString() === userID"
                >
                  <div>
                    <div class="msg_cotainer_send">
                      {{ chat.message }}
                    </div>
                    <!-- <span>{{ chat.sendDate }}</span> -->
                  </div>
                  <div class="img_cont_msg">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="rounded-circle user_img_msg"
                          v-bind="attrs"
                          v-on="on"
                          >mdi-account-circle</v-icon
                        >
                      </template>
                      <span>{{ chat.username }}</span>
                    </v-tooltip>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-start mb-4"
                  v-if="chat.senderId.toString() !== userID"
                >
                  <div class="img_cont_msg">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="rounded-circle user_img_msg"
                          v-bind="attrs"
                          v-on="on"
                          >mdi-account-circle-outline</v-icon
                        >
                      </template>
                      <span>{{ chat.username }}</span>
                    </v-tooltip>
                  </div>
                  <div>
                    <div class="msg_cotainer">{{ chat.message }} <br /></div>
                    <!-- <span>{{ chat.sendDate }}</span> -->
                  </div>
                </div>
              </div>
            </div>
          </v-container>
        </v-card>
        <v-card>
          <div class="pl-3 pr-3">
            <v-text-field
              v-model="data.message"
              :append-outer-icon="'mdi-send'"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Message"
              type="text"
              @click:append-outer="sendMessage"
              v-on:keyup.enter="sendMessage"
            ></v-text-field>
          </div>
        </v-card>
      </div>
      <div class="col-md-4 col-xl-3 chat">
        <v-card style="height: 600px">
          <div>
            <v-system-bar></v-system-bar>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    <h3>Created Rooms</h3>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list shaped>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="room in rooms" :key="room.id">
                  <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content @click="roomConnect(room.id)">
                    <v-list-item-title>
                      <h3>{{ room.name }}</h3>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service"; 
import webSocketService from "@/core/services/websocketService.js";

export default {
  data() {
    return {
      drawer: false,
      userID: null,
      toID: null,
      messages: webSocketService,
      selectedItem: 0,
      connection: null,
      search: "",
      contacts: [],
      receiveMessages: [],
      connected: false,
      rooms: [],
      tempMessage: [],
      contactName: null,
      permanent: false,
      message: [],
      window: {
        width: 0,
        height: 0,
      },
      roomid: null,
      roomname: null,
      username: null,
      data: {
        type: "",
        nickname: "",
        message: "",
      },
      websocket: null,
    };
  },
  computed: {
    chats() {
      return this.messages;
    },
  },
  created() {},
  methods: {
    showMessages(id, username) {
      this.contactName = username;
      this.toID = id;
      // console.log(id);
    },
    sendMessage(){ 
        let message = {
            message: this.data.message,
            roomId: this.roomid,
            senderId: this.userID,
        }
        webSocketService.sendMessage(message)
        this.data.message = ''; 
        // this.retrieveMessages() 
        // this.messages.messages.map(el => {
        //   console.log(el)
        // })
        
    },
    retrieveRooms(){
      // console.log(this.userID)
      ApiService.post("getMyRooms", {id: this.userID}).then((res) => {
        // console.log(res.data);
        this.rooms = res.data
      })
    },
    roomConnect(roomId){
      this.roomid = roomId
      ApiService.post("getRoomById", {id: roomId}).then((res) => {
        this.messages.messages = res.data[0]
        webSocketService.onConnect(res.data[1])
      })
    },
    retrieveMessages(){
      ApiService.post("getRoomById", {id: this.roomid}).then((res) => {
        this.messages.messages = res.data[0]
      })
    }
  },
  mounted() {
    // let date = new Date();
    // console.log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).replace('0.', ''));
    this.tempMessage = this.messages;
    ApiService.get("getUsers").then((res) => {
      this.contacts = res.data;
      //   console.log(this.contacts);
    });

    const id = localStorage.getItem("value");
    this.userID = id.substr(id.lastIndexOf("*") + 1);
    ApiService.post("getCurrentUser", {
      id: this.userID,
    }).then((res) => {
      this.currentUser = res.data[0];
      this.username = res.data[0];
    });

    this.retrieveRooms()
    
    
    // this.websocket = new WebSocket("ws://localhost:8003/api/chat");

    // this.websocket.onopen = (event) => {
    //   console.log("connecting", event);
    // };

    // this.websocket.onmessage = (event) => {
    //   console.log("message", event);
    //   let message = JSON.parse(event)
    //   this.messages = message
    // };

    // this.websocket.onclose = (event) => {
    //   console.log("connection is close", event);
    // };
  },
};
</script>

<style lang="scss" scoped>
.chat {
  margin-top: auto;
  margin-bottom: auto;
}

.card {
  height: 500px;
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
}

.contacts_body {
  padding: 0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
}

.msg_card_body {
  overflow-y: scroll;
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}

.card-footer {
  border-radius: 0 0 15px 15px !important;
  border-top: 0 !important;
}

.container {
  align-content: center;
}

.search {
  border-radius: 15px 0 0 15px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
}

.search:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.type_msg {
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  height: 60px !important;
  overflow-y: auto;
}

.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.attach_btn {
  border-radius: 15px 0 0 15px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}

.send_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}

.search_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}

.contacts {
  list-style: none;
  padding: 0;
}

.contacts li {
  width: 100% !important;
  padding: 5px 10px;
  margin-bottom: 15px !important;
}

.active {
  background-color: rgba(0, 0, 0, 0.3);
}

.user_img {
  height: 70px;
  width: 70px;
  border: 1.5px solid #f5f6fa;
}

.user_img_msg {
  height: 40px;
  width: 40px;
  border: 1.5px solid #0636f7;
}

.img_cont {
  position: relative;
  height: 70px;
  width: 70px;
}

.img_cont_msg {
  height: 40px;
  width: 40px;
}

.online_icon {
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border: 1.5px solid white;
}

.offline {
  background-color: #c23616 !important;
}

.user_info {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}

.user_info span {
  font-size: 20px;
  color: white;
}

.user_info p {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
}

.video_cam {
  margin-left: 50px;
  margin-top: 5px;
}

.video_cam span {
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}

.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}

.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}

.msg_time {
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(0, 0, 0, 0.911);
  font-size: 10px;
}

.msg_time_send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}

.msg_head {
  position: relative;
  height: 90px;
}

#action_menu_btn {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.action_menu {
  z-index: 1;
  position: absolute;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 15px;
  top: 30px;
  right: 15px;
  display: none;
}

.action_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.action_menu ul li {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
}

.action_menu ul li i {
  padding-right: 10px;
}

.action_menu ul li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 576px) {
  .contacts_card {
    margin-bottom: 15px !important;
  }
}
</style>>
