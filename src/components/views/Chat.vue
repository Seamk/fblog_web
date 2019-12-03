<template>
  <div>
    <button @click="send">发消息</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        path:"ws://localhost:8080/",
        socket:""
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      init:function () {
        if(typeof(Websocket)==undefined ){

        }
      }
    }
  }
</script>
