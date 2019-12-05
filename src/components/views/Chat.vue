<template>
  <div>
    {{msg}}
    <button @click="send">发消息</button>
  </div>
</template>

<script>
  export default {
    name: "Chat",
    data(){
      return {
        path:"ws://localhost:8080/websocket/1",
        socket:"",
        msg:""
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      init:function () {
        if(typeof(WebSocket)==undefined ){
            alert("您的浏览器不支持socket");
        }else{
          this.socket = new WebSocket(this.path);
          this.socket.onopen = this.open;
          this.socket.onerror = this.error;
          this.socket.onmessage = this.getMessage;
        }
      },
      open:function(){
        console.log("socket连接成功");
      },
      error:function(){
        console.log("连接错误");
      },
      getMessage:function(msg){
        this.msg+=msg.data;
        console.log(msg.data);
      },
      send:function(){
        this.socket.send(params);
      },
      close:function(){
        console.log("socket已经关闭");
      }
    },
    destroyed() {
      this.socket.onclose = this.close;
    }
  }
</script>
