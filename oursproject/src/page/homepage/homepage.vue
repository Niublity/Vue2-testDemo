<template>
    <div>
      <div class="home_top">
        <img :src="search" alt="" class="top_search">
        <span class="top_title">需要获取的数据eeeeeeeeee</span>
        <img :src="user" alt="" class="top_user">
      </div>
      <div class="foods_kind">

      </div>
    </div>
</template>

<script>
  /*引入图片*/
  import search from "./img/搜索.png";
  import user from "./img/商户线性.png";
    export default {
        name: "homepage",
      data(){
          return{
            search,
            user
          }
      }
    }
</script>

<style scoped>
  /*top*/
  .home_top{
    width: 100%;
    height: 1.97rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .8rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;

  }
  .home_top .top_title{
    display: inline-block;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8rem;
    color: #fff;
    font-weight: 100;
  }
  .home_top .top_search{
     width: .9rem;
     height: .9rem;
   }
  .home_top .top_user{
    width: .9rem;
    height: .9rem;
  }
</style>
