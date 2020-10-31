
const webSocketService  = {


    websocket: null,
    tempmessages: [],
    messages: [],


    onConnect(endpoints){
        this.websocket = new WebSocket("ws://localhost:8003/api/" + endpoints)

        this.websocket.onopen = (event) => {
        console.log("connection", event.type);
        };
    
        this.websocket.onmessage = (event) => {
            let content = event
            this.tempmessages.push(content)
            this.messages = []
            this.tempmessages.map(el => {
                let temp = JSON.parse(el.data);
                this.messages.push(temp)
            })
        };
    
        this.websocket.onclose = (event) => {
            console.log("connection", event.type);
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