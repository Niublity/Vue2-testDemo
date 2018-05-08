<template>
  <div class="shopcarbody">
    <div class="specs-cover" v-show="showChoose"></div>
    <div class="shopcar_line">
      <div class="shopcar_line_left"><img src="./img/3.png" alt=""></div>
      <div class="shopcar_line_des">购物车</div>
    </div>
    <!--购物车中心界面-->
    <div class="shopcar_center">
      <!--背景图片-->
      <img :src="pic.bgimg" alt="" class="bgimg">
    </div>
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
    <!--购物车商品评价界面-->
    <div class="wares-evaluate">
      <!--标题-->
      <div class="wares-title">
        <p @click="toWares">
          <span :class="this.showWares? 'focus-wares':'nofocus'">商品</span>
        </p>
        <p @click="toEvaluate">
          <span :class="this.showEvaluate? 'focus-wares':'nofocus'">评价</span>
        </p>
      </div>
      <div class="information">
        <!--商品界面-->
        <div class="wares" v-show="showWares">
          <ul class="wares-left">
            <li v-for="categoty in categotyList" class="left-li">
              <img :src="'https://fuss10.elemecdn.com/'+publicfunction.dealarray(categoty.icon_url)" alt=""
                   class="sales-logo">
              <span>{{categoty.name}}</span>
            </li>
          </ul>
          <!--商品详情-->
          <ul class="wares-right">
            <!--第一层循环创建  分类-->
            <li v-for="cate in categotyList">
              <!--标题-->
              <header style="background:#f5f5f5;" class="wares-header">
                <section class="waresfood-title">
                  <h4>{{cate.name}}</h4> <span>{{cate.description}}</span>
                </section>
                <span class="title-infor">...</span>
              </header>
              <!--{{cate.foods[0].tips}}-->
              <!--内容  第二层循环 食物具体信息-->
              <section class="waresr-list" v-for="food in cate.foods">
                <img :src="'https://elm.cangdu.org/img/'+food.image_path" alt="" class="food-img">
                <!--食品描述：右-->
                <div class="food-describe">
                  <h3 class="food-describe-head">
                    <strong>{{food.name}}</strong>
                    <span class="new-attribute">新品</span>
                    <span class="food-unique">招牌</span>
                  </h3>
                  <p class="food-describe-content"> {{food.description}}</p>
                  <p class="food-describe-rating">月售{{food.month_sales}}份，好评率{{food.satisfy_rate}}%</p>
                  <span class="food-activity"></span>
                  <div class="food-footer">
                    <p class="food-price">
                      <span>￥</span>
                      <span>20</span>
                      <span>起</span>
                    </p>
                    <p class="choose-size" @click="showChoose=!showChoose">选规格</p>
                    <div class="choose" v-if="showChoose">
                      <header class="specs-header">
                        <strong class="food-name">{{food.name}}</strong>
                        <img :src="pic.close" alt="" class="specs-close" @click="showChoose=!showChoose">
                      </header>
                      <section class="specs-details">
                        <p class="specs-details-title">规格</p>
                        <ul class="activity-container">
                          <li class="specs-activity">默认</li>
                          <li class="specs-activity">ok</li>
                          <li class="specs-activity">12</li>
                          <li class="specs-activity">des</li>
                        </ul>
                      </section>
                      <footer class="specs-footer">
                        <p class="specs-price">
                          <span>￥</span><span>20</span>
                        </p>
                        <div class="addto-car">加入购物车</div>
                      </footer>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
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
  import close from "./img/关 闭 (1).png";

  export default {
    name: "shopcar",
    data() {
      return {
        pic: {next, bgimg, close},
        showWares: true,
        showEvaluate: false,
        showChoose: false,
        categotyList:[]
      }
    },
    created() {
      this.$http.get("http://cangdu.org:8001/shopping/getcategory/1").then((response) => {
        console.log(response.data.category_list[0].foods[0].activity.image_text);
        console.log(response.data.category_list[0].foods[0]);
        this.categotyList=response.data.category_list;
      });
    },
    methods: {
      toWares() {
        console.log("商品界面");
        this.showWares = true;
        this.showEvaluate = false;
      },
      toEvaluate() {
        console.log("评价界面");
        this.showWares = false;
        this.showEvaluate = true;
      },
      showInfor() {
        console.log("显示隐藏选规格弹框");
      }

    }
  }
</script>

<style scoped>
  .shopcarbody {
    position: relative;
  }
  /*蒙板*/
  .specs-cover{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.4);
    z-index: 103;
  }
  /*nav*/
  .shopcar_line {
    width: 100%;
    height: 1.95rem;
    background-color: #3190e8;
    /*position: relative;*/
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
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
    width: 100%;
    height: 8rem;
    overflow: hidden;
    /*position: relative;*/
    position: fixed;
    left: 0;
    top: 1rem;
    z-index: 99;
  }

  /*背景*/
  .bgimg {
    width: 100%;
    /*margin-top: 1.9rem;*/
    filter: blur(10px);
  }

  /*---购物中心上半边---*/
  .shopcar-center-top {
    position: fixed;
    left: 0;
    right: 0;
    top: 1.91rem;
    z-index: 100;
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
  .wares-evaluate {
    position: absolute;
    left: 0;
    top: 9.5rem;
    background: white;
    /*z-index: 100;*/
    /*overflow: hidden;*/
  }

  /*标题*/
  .wares-title {
    display: flex;
    background: white;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 7.4rem;
    z-index: 100;
    padding: .65rem 0 .8rem 0;
    border-bottom: 1px solid #ebebeb;
  }

  .wares-title p {
    width: 50%;
    font-size: .65rem;
    text-align: center;
  }

  .wares-title p span {
    padding: .2rem .1rem;
    font-weight: 200;
  }

  .focus-wares {
    color: #3190e8;
    border-bottom: 0.12rem solid #3190e8;
  }

  .nofocus {
    color: #666;
    border: 0;
  }

  /*商品*/
  .wares {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /*商品左*/
  .wares-left {
    width: 3.8rem;
    background-color: #f5f5f5;
    height: 17rem;
    overflow: scroll;
  }

  .wares-left::-webkit-scrollbar {
    display: none;
  }

  .wares-left li {
    text-align: center;
    padding: .8rem .3rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
  }

  .sales-logo {
    width: .5rem;
    height: .6rem;
    margin-right: .1rem;
  }

  .wares-left .left-li {
    font-size: .6rem;
    color: #666;
  }

  /*商品右*/
  .wares-right {
    position: relative;
    height: 18rem;
    overflow: scroll;
  }

  .wares-right::-webkit-scrollbar {
    display: none;
  }

  .wares-right li {
    box-sizing: border-box;
  }

  .wares-header {
    width: 100%;
    padding: .6rem .4rem .6rem .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }

  /*标题*/
  .waresfood-title {
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    /*align-items: center;*/
  }

  .waresfood-title h4 {
    font-size: .7rem;
    color: #666;
    font-weight: 700;
    margin-right: 0.4rem;
  }

  .waresfood-title span {
    font-size: .5rem;
    color: #999;
    overflow: hidden;
    font-weight: 200;
    line-height: 0.8rem;
  }

  .wares-header .title-infor {
    display: inline-block;
    width: .5rem;
    height: 1rem;
  }

  /*------内容详情-----*/
  .waresr-list {
    width: 12.2rem;
    display: flex;
    justify-content: space-between;
    padding: .6rem .4rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .food-describe {
    margin-left: 0.45rem;
  }

  /*右一*/
  .food-describe .food-describe-head strong {
    font-size: .7rem;
    color: #333;
    font-weight: 700;
  }

  .food-describe-head {
    margin-bottom: .2rem;
    line-height: .75rem;
    display: flex;
    justify-content: space-between;
  }

  /*新品*/
  .new-attribute {
    display: flex;
    width: 2rem;
    height: 2rem;
    background: #4cd964;
    position: absolute;
    left: 0;
    top: 0;
    font-size: .4rem;
    color: white;
    font-weight: 200;
    align-items: flex-end;
    justify-content: center;
    transform: rotateZ(-45deg) translateY(-1.4rem);
  }

  /*招牌*/
  .food-unique {
    display: inline-block;
    color: rgb(240, 115, 115);
    border: 1px solid currentColor;
    border-radius: .3rem;
    font-weight: 200;
    font-size: .3rem;
    transform: scale(.8);
    box-sizing: border-box;
    padding: .1rem;
    height: .6rem;
    line-height: .35rem;
  }

  /*右二*/
  .food-describe .food-describe-content {
    font-size: .5rem;
    color: #999;
    line-height: .76rem;
  }

  /*右三*/
  .food-describe-rating {
    font-size: .5rem;
    color: #333;
    line-height: .8rem;
  }

  /*右四*/
  .food-activity {
    display: inline-block;
    /*border: 1px solid currentColor;*/
    border-radius: .3rem;
    font-size: .3rem;
    color: rgb(241, 136, 79);
    border: 1px solid rgb(240, 115, 115);
    font-weight: 200;
    transform: scale(.8);
  }

  /*右五*/
  .food-footer {
    width: 8rem;
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
  }

  .food-price {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .food-price > span {
    display: block;
  }

  .food-price span:nth-of-type(1),
  .specs-price span:nth-of-type(1) {
    font-size: .5rem;
    color: #f60;
  }

  .food-price span:nth-of-type(2),
  .specs-price span:nth-of-type(2) {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin-right: .3rem;
  }

  .food-price span:nth-of-type(3) {
    font-size: .5rem;
    color: #666;
    font-weight: 200;
  }

  /*右五右*/
  .choose-size {
    display: block;
    font-size: .55rem;
    color: #fff;
    background: #3190e8;
    font-weight: 100;
    padding: .2rem .25rem;
    border: 1px solid #3190e8;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    border-radius: .2rem;
    /*margin-left: 4rem;*/
  }

  /*--选规格弹框--*/
  .choose {
    width: 70%;
    background: white;
    position: fixed;
    left: 15%;
    top: 35%;
    border: 1px;
    border-radius: .2rem;
    z-index: 105;
  }

  /*弹框header*/
  .specs-header {
    text-align: center;
    padding: .6rem .5rem;
    box-sizing: border-box;
    position: relative;
  }

  .food-name {
    color: #222;
    font-size: .7rem;
    font-weight: 400;
  }

  .specs-close {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: .5rem;
    top: .55rem;
  }

  /*弹框section*/
  .specs-details {
    padding: .5rem;
  }

  .specs-details-title {
    font-size: .6rem;
    color: #666;
    margin-bottom: 0.1rem;
    font-weight: 200;
  }

  .activity-container {
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;
  }

  .choose .specs-details .activity-container > li {
    padding: .35rem .5rem;
    font-size: .6rem;
    border: .025rem solid #ddd;
    margin-right: .5rem;
    border-radius: .2rem;
  }

  .specs-activity {
    border-color: #3199e8 !important;
    color: #3199e8;
  }

  /*弹框footer*/
  .specs-footer {
    padding: .5rem;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .addto-car {
    width: 4rem;
    height: 1.3rem;
    background: #3199e8;
    border: 1px;
    -webkit-border-radius: .15rem;
    -moz-border-radius: .15rem;
    border-radius: .15rem;
    font-size: .6rem;
    color: #fff;
    font-weight: 200;
    text-align: center;
    line-height: 1.3rem;
  }

  /*图片*/
  .waresr-list .food-img {
    width: 2rem;
    height: 2rem;
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
