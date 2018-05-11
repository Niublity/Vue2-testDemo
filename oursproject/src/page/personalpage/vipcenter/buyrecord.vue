<template>
  <div style="background: white;text-align: center">
    <Header :title="title"></Header>
    <img src="./image/voucher.png" alt="" class="buyrecord-voucher">
    <p class="buyrecord">没有购买记录</p>
  </div>

</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "buyrecord",
    data() {
      return {
        title: "购买记录"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .buyrecord-voucher{
    width: 8rem;
    height: 5rem;
    margin-top: 5rem;
    font-size: 0;
  }
  .buyrecord{
    font-size: .6rem;
    color: #999;
    margin-top: .8rem;
    font-weight: 200;
  }
</style>
