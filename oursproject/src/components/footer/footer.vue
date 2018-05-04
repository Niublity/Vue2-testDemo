<template>
    <div class="footer">
      <div class="footer_nav">
       <router-link class="footer_nav" to="">
         <img src="" alt="">
         <span>外卖</span>
       </router-link>
        <router-link class="footer_nav" to="">
          <img src="" alt="">
          <span>外卖</span>
        </router-link>
        <router-link class="footer_nav" to="">
          <img src="" alt="">
          <span>外卖</span>
        </router-link>
        <router-link class="footer_nav" to="">
          <img src="" alt="">
          <span>外卖</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .footer_nav{
    display: flex;
  }
</style>
