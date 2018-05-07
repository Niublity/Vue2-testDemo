<template>
  <div class="shopcarbody">
    <div class="shopcar_line">
      <div class="shopcar_line_left"><img src="./img/3.png" alt=""></div>
      <div class="shopcar_line_des">购物车</div>
    </div>
    <div class="shopcar_center">
      <div class="showtitle">
        <div>
          <img src="./img/2.jpeg" alt="">
        </div>
        <div>
          <div><span>效果演示</span></div>
          <div><span>商家配送</span>/<span>分钟送达</span>/<span>配送费￥5</span></div>
        </div>
      </div>
    </div>
    <div class="shopcar_footer">
      <div>
        <div class="carico">
          <img src="./img/shopcar.png" alt="">
        </div>
        <div class="car_num">
          <p>￥0.00</p>
          <p>配送费5￥</p>
        </div>
        <div class="missingmoney">
          <span>还差￥20起送</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopcar"
  }
</script>

<style scoped>
  /*nav*/
  .shopcar_line {
    height: 1.95rem;
    background-color: #3190e8;
    position: relative;
  }

  .shopcar_line_left {
    width: 1.8rem;
    height: 1.95rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopcar_line_left img {
    width: 1rem;
  }

  .shopcar_line_des {
    width: 8rem;
    position: absolute;
    left: 27%;
    top: 25%;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;

  }

  /*shopcar_center*/
  .showtitle {
    height: 3.4rem;
    padding: .4rem 0 .4rem .4rem;
    background-color: red;
    display: flex;
    /*justify-content: start;*/
  }

  .showtitle div:nth-child(1) img {
    width: 2.9rem;
    height: 2.9rem;
  }

  /*footer*/
  .shopcar_footer {
    color: white;
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 2rem;
    background-color: #3d3d3f;

  }

  .shopcar_footer > div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carico {
    background-color: #3d3d3f;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    position: absolute;
    left: .5rem;
    bottom: .5rem;
  }

  .carico > img {
    width: 1.2rem;
  }

  .car_num {
    position: absolute;
    left: 3.4rem;
    top: .2rem;
  }

  .car_num p:nth-child(1) {
    font-size: .8rem;
    font-weight: 700;
    margin-bottom: .3rem;
  }

  .car_num p:nth-child(2) {
    font-size: .4rem;
    color: #fff;
    font-weight: 100;
  }

  .missingmoney {
    position: absolute;
    right: 0;
    top: 0;
    font-size: .7rem;
    color: #fff;
    font-weight: 700;
    width: 5rem;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #535356 !important;
    /*z-index: 1001;*/
  }

</style>
