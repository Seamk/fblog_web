<template>
  <div class="menu">
      {{msg}}
      <confirm text="注册"  @message="getMessage"></confirm>
  </div>
</template>

<script>
  import Confirm from '../sub/Confirm'
  export default{
    name:"Menu",
    Components:{
      Confirm
    },
    data(){
      return{
        msg:"lalalal"
      }
    },
    methods:{
      getMessage(val){
        alert(val);
      }
    }
  }
</script>

<style>

</style>
