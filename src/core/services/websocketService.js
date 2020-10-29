
const webSocketService  = {


    websocket: null,
    tempmessages: [],
    messages: [],


    onConnect(){
        this.websocket = new WebSocket("ws://localhost:8003/api/chat")

        this.websocket.onopen = (event) => {
            console.log("connecting", event);
        };
    
        this.websocket.onmessage = (event) => {
            let content = event
            this.tempmessages.push(content)
            this.messages = []
            this.tempmessages.map(el => {
                let temp = JSON.parse(el.data);
                // console.log(temp)
                this.messages.push(temp)
            })
        };
    
        this.websocket.onclose = (event) => {
            console.log("connection is close", event);
        };
    },

    sendMessage(message){
        this.websocket.send(JSON.stringify(message))
    },

    closeSocket(){
        this.websocket.close()
    }

}

export default webSocketService