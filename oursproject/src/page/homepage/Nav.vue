<template>
  <div class="foodheader">
    <div class="foodheader_line">
      <div class="foodheader_line_left" @click="back"><img src="./img/3.png" alt=""></div>
      <router-link to="/citylist" class="foodheader_line_des">{{title}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    props:["title"],
    data(){
      return{
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .foodheader_line {
    height: 1.95rem;
    background-color: #3190e8;
    position: relative;
  }

  .foodheader_line_left {
    width: 1.8rem;
    height: 1.95rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foodheader_line_left img {
    width: 1rem;
  }

  .foodheader_line_des {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 8rem;
    position: absolute;
    left: 27%;
    top:30%;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 300;
  }
</style>
