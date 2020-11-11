<template>
    <div id = "app" class="mt-20">
        <ul>
            <li  
            v-for="(item, index) in itemList" :key="index"
            :id="index"
            @mousemove="dragging(index)"
            @mousedown="drag(index)"
            @mouseup="drop(index)"
            >{{item}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"app",
    data(){
        return{
            itemList:["work1","work2","work3","work4"],
            pickedUp:false
        };
    },
    methods: {
        drag(index){
            let doc = document.getElementById(index);
            doc.style.position ="absolute";
            this.pickedUp = true;
        },
        dragging(index){
            let doc = document.getElementById(index);
            if(this.pickedUp){
                doc.style.left = event.clientX - 250 + "px";
                doc.style.top = event.clientY - 10 + "px"; 
            }
        },
        drop(index){
            console.log(index)
            this.pickedUp = false;
        }
    }
};
</script>
<style>
*{
    padding:0;
    margin:0;
}
li{
 list-style: none;
 background-color: green;
 color: white;
 width:500px;
 text-align:center;
 padding:20px;
}
li:hover{
    cursor : pointer;
    background-color : blue;  
}
</style>