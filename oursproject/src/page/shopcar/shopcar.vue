<template>
  <div class="shopcarbody">
    <div class="shopcar_line">
      <div class="shopcar_line_left"><img src="./img/3.png" alt=""></div>
      <div class="shopcar_line_des">购物车</div>
    </div>
    <img :src="pic.bgimg" alt="" class="bgimg">
    <div class="shopcar_center">
      <div class="showtitle">
        <div class="showtitle-left">
          <img src="./img/2.jpeg" alt="">
        </div>
        <div class="showtitle-right">
          <div class="right-title"><span>效果演示</span></div>
          <div>
            <p class="distribute-infor"><span>商家配送</span>/<span>分钟送达</span>/<span>配送费￥5</span></p>
          </div>
          <p>公告：欢迎光临，用餐高峰请提前下单，如您对我们的美食味道，配送时效和我们的服务有任何不满，请直接致电1111111111，直接致电！</p>
        </div>
        <img :src="pic.next" alt="" class="next">
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
  /*引入图片*/
  import next from "./img/下一级.png";
  import bgimg from './img/elmlogo.jpeg';
  export default {
    name: "shopcar",
    data() {
      return {
        pic: {next,bgimg}
      }
    }
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
    font-weight: 200;
  }


  /*shopcar_center*/
  .shopcar_center{
    z-index: 100;
    position: absolute;
    left: 0;
    top: 1.8rem;
    right: 0;
  }
  .bgimg{
    width: 100%;
    filter: blur(15px);
  }
  .showtitle {
    height: 3.4rem;
    padding: .4rem 0 .4rem .4rem;
    display: flex;
    /*justify-content: start;*/
  }

  /*左边*/
  .showtitle div:nth-child(1) img {
    width: 2.9rem;
    height: 2.9rem;
    margin-right: .3rem;
    border-radius: .15rem;
  }
  /*右边*/
  .showtitle-right .right-title{
    margin-bottom: .5rem;
  }
  /*商家配送*/
  .showtitle-right .distribute-infor{
    font-size: .5rem;
    color: #fff;
    margin-bottom: .6rem;
  }
  .distribute-infor span{
    font-weight: 100;
  }
  .next {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 40%;
    right: .3rem;
  }
  /*公告部分*/
  .showtitle-right p:nth-of-type(1) {
    width: 11.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .5rem;
    color: #fff;
    font-weight: 100;
  }
  /*右边商铺名字*/
  .showtitle-right .right-title span{
    color: white;
    font-size: .8rem;
    font-weight: 200;
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
    font-weight: 200;
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

    width: 5rem;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #535356 !important;
    /*z-index: 1001;*/
  }

  .missingmoney span {
    font-size: .62rem;
    color: #fff;
    font-weight: 200;
  }
</style>
