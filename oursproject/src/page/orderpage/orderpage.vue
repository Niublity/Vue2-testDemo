<template>
  <div>
    <Header :title="title"></Header>
    <Footernav class="footernav"></Footernav>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"
  import footernav from "../../components/footernav/footernav";

  export default {
    name: "orderpage",
    data() {
      return {
        title: "订单列表"
      }
    },
    components: {
      Header: header,
      Footernav:footernav
    }
  }
</script>

<style scoped>
.footernav{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
