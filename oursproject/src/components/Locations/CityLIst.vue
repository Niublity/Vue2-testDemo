<template>
  <div>
    <div class="city_header">
      <span class="head_logo">ele.me</span>
      <a href="##" class="head_user">
        <img :src="user" alt="">
      </a>
    </div>
  </div>

</template>

<script>
  /*引入图片*/
  import user from './img/user.jpg';
    export default {
        name: "CityLIst",
      data(){
          return {
            user
          }
      }
    }
</script>

<style scoped>
.city_header{
  background: #3190e8;
}
</style>
