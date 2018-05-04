<template>
  <div class="foodheader">
    <div class="foodheader_line">
      <div class="foodheader_line_left"><img src="./img/3.png" alt=""></div>
      <div class="foodheader_line_des">预定早餐</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foodheader"
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
    width: 8rem;
    position: absolute;
    left: 27%;
    top:25%;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
</style>
