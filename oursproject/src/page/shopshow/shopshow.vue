<template>
  <div>
    <Foodheader class="foodheader"></Foodheader>
    <Foodshowlist class="shopshowcenter"></Foodshowlist>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import foodheader from "../../components/foodheader/foodheader";
  import footer from "../../components/footernav/footernav";
  import foodshowlist from "../../components/foodshowlist/foodshowlist"

  export default {
    name: "shopshow",
    components: {
      Foodheader: foodheader,
      Footer: footer,
      Foodshowlist:foodshowlist
    }
  }
</script>

<style scoped>
  .foodheader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .shopshowcenter{
    margin-top: 1.95rem;
  }
</style>
