<template>
  <div class="shopcarbody">
    <div class="shopcar_line">
      <div class="shopcar_line_left"><img src="./img/3.png" alt=""></div>
      <div class="shopcar_line_des">购物车</div>
    </div>
    <!--购物车中心界面-->
    <div class="shopcar_center">
      <!--背景图片-->
      <img :src="pic.bgimg" alt="" class="bgimg">
      <!--购物车顶端-->
      <div class="shopcar-center-top">
        <div class="showtitle">
          <div class="showtitle-left">
            <img src="./img/elmlogo.jpeg" alt="">
          </div>
          <div class="showtitle-right">
            <div class="right-title"><span>效果演示</span></div>
            <div>
              <p class="distribute-infor"><span>商家配送</span>/<span>分钟送达</span>/<span>配送费￥5</span></p>
            </div>
            <p>公告：欢迎光临，用餐高峰请提前下单，如您对我们的美食味道，配送时效和我们的服务有任何不满，请直接致电1111111111，直接致电！</p>
          </div>
          <a href="##"><img :src="pic.next" alt="" class="next"></a>
        </div>
        <a href="##" class="activity">
          <p class="activity-left">
            <span>减</span>
            <span>满30减5，满60减8(APP专享)</span>
          </p>
          <p class="activity-right">
            <span>1个活动</span>
            <img :src="pic.next" alt="">
          </p>
        </a>
      </div>
    </div>
    <!--购物车商品评价界面-->
    <div class="wares-evaluate">
      <!--标题-->
      <div class="wares-title">
        <p @click="toWares" >
          <span :class="this.showWares? 'focus-wares':'nofocus'">商品</span>
        </p>
        <p @click="toEvaluate">
          <span :class="this.showEvaluate? 'focus-wares':'nofocus'">评价</span>
        </p>
      </div>

      <div class="information">
        <!--商品界面-->
        <div class="wares" v-show="showWares">
          <section class="wares-left">
            <ul>
              <li v-for="leftli in leftLi" class="left-li">
                <span>{{leftli}}</span>
              </li>
            </ul>
          </section>
          <section class="wares-right">

          </section>
        </div>
        <!--评价界面-->
        <div class="evaluate" v-show="showEvaluate">
          评价列表
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
  /*引入图片*/
  import next from "./img/下一级.png";
  import bgimg from './img/elmlogo.jpeg';

  export default {
    name: "shopcar",
    data() {
      return {
        pic: {next, bgimg},
        showWares:true,
        showEvaluate:false,
        leftLi:["热销榜","热销榜","热销榜","热销榜","热销榜","热销榜","热销榜"]
      }
    },
    created(){
      this.$http.get("http://cangdu.org:8001/shopping/v2/menu/1").then((response)=>{
        //console.log(response.data);
      });
    },
    methods:{
      toWares(){
        console.log("商品界面");
        this.showWares=true;
        this.showEvaluate=false;
      },
      toEvaluate(){
        console.log("评价界面");
        this.showWares=false;
        this.showEvaluate=true;
      }

    }
  }
</script>

<style scoped>
  .shopcarbody{
    position: relative;
  }
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
  .shopcar_center {
    height: 6.6rem;
    overflow: hidden;
    position: relative;
  }

  /*背景*/
  .bgimg {
    width: 100%;
    /*margin-top: 1.9rem;*/
    filter: blur(10px);
  }
  /*---购物中心上半边---*/
  .shopcar-center-top{
    position: fixed;
    left: 0;
    right: 0;
    top: 1.91rem;
  }
  .showtitle {
    height: 3.4rem;
    padding: .4rem 0 .4rem .4rem;
    display: flex;
    background-color: rgba(119, 103, 137, .43);
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
  .showtitle-right .right-title {
    margin-bottom: .5rem;
  }

  /*右边商铺名字*/
  .showtitle-right .right-title span {
    color: white;
    font-size: .8rem;
    font-weight: 200;
  }

  /*商家配送*/
  .showtitle-right .distribute-infor {
    font-size: .5rem;
    color: #fff;
    margin-bottom: .6rem;
  }

  .distribute-infor span {
    font-weight: 100;
  }

  .next {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 34%;
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

  /*--活动--*/
  .activity {
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem .4rem .4rem;
    background-color: rgba(119, 103, 137, .43);
  }

  /*箭头*/
  .activity-right img {
    width: .45rem;
    height: .45rem;
  }

  .activity > p span {
    color: white;
    font-size: .4rem;
    font-weight: 100;
  }

  /*左*/
  .activity-left span:nth-of-type(1) {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;

    background-color: rgb(240, 115, 115);
    border-radius: .1rem;
    font-size: .4rem;
  }


  /*----购物车商品评价界面-----*/
  .wares-evaluate{
    position: absolute;
    left: 0;
    top: 9.5rem;
    background: white;
    /*z-index: 100;*/
  }
  /*标题*/
  .wares-title{
    display: flex;
    background: white;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 7.4rem;
    padding: .65rem 0 .8rem 0;
  }
  .wares-title p{
    width: 50%;
    font-size: .65rem;
    text-align: center;
  }
  .wares-title p span{
    padding: .2rem .1rem;
    font-weight: 200;
  }
  .focus-wares{
    color: #3190e8;
    border-bottom: 0.12rem solid #3190e8;
  }
  .nofocus{
    color: #666;
    border: 0;
  }
  /*商品左*/
  .wares-left{
    width:3.8rem;
    /*background:white;*/
  }

  .wares-left li{
    text-align: center;
    padding: .7rem .3rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
    border-left: .15rem solid #f8f8f8;
  }
  .wares-left .left-li{
    font-size: .6rem;
    color: #666;
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
