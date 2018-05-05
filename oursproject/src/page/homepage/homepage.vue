<template>
  <div>

    <div class="home_top">
      <img :src="img.search" alt="" class="top_search">
      <span class="top_title">需要获取的数据eeeeeeeeee</span>
      <img :src="img.user" alt="" class="top_user">
    </div>
    <!--轮播图-->
    <div class=" swiper-container foods_kind">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="##" class="link_to_food" v-for="one in lunboOne">
            <img :src="one.pic" alt="">
            <span>{{one.name}}</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="##" class="link_to_food" v-for="one in lunboOne">
            <img :src="one.pic" alt="">
            <span>{{one.name}}</span>
          </a>
        </div>

      </div>
      <!--分页器-->
      <div class="swiper-pagination"></div>
    </div>
    <!--附近商家-->
    <div class="business">
      <img :src="img.business" alt="" style="width: .6rem;">
      <span>附近商家</span>
    </div>

    <!--导航栏-->
    <footernav class="footernav"></footernav>

  </div>


</template>

<script>
  /*引入图片*/
  import search from "./img/搜索.png";
  import user from "./img/商户线性.png";
  import drink from "./img/drink.jpeg";
  import scbl from "./img/chsd.jpeg";
  import ms from "./img/ms.jpeg";
  import jc from "./img/js.jpeg";
  import xdth from "./img/xpth.jpeg";
  import business from "./img/商家 (3).png";

  import Swiper from "../../../static/js/swiper-4.2.2.min";
  import Swipercss from "../../../static/css/swiper-4.2.2.min.css";

  import footernav from "../../components/footernav/footernav";
  export default {
    name: "homepage",
    data() {
      return {
        img:{business, search, user},
        lunboOne: [
          {pic: drink, name: "甜品饮品"},
          {pic: scbl, name: "商超便利"},
          {pic: ms, name: "美食"},
          {pic: jc, name: "简餐"},
          {pic: xdth, name: "新店特惠"},
          {pic: drink, name: "准时达"},
          {pic: drink, name: "预定早餐"},
          {pic: drink, name: "土豪推荐"},
        ]
      }
    },
    components:{
      footernav
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>
<style>
  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 0.25rem ;
  }
</style>
<style scoped>
  /*top*/
  .home_top {
    width: 100%;
    height: 1.97rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .8rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
  }

  .home_top .top_title {
    display: inline-block;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8rem;
    color: #fff;
    font-weight: 100;
  }

  .home_top .top_search {
    width: .9rem;
    height: .9rem;
  }

  .home_top .top_user {
    width: .9rem;
    height: .9rem;
  }

  /*---轮播图----*/
  .swiper-container {
    margin-top: 1.96rem;
    padding-bottom: .6rem;
    background: white;
  }

  .swiper-slide {
    width: 100%;
  }

  /*单个*/
  .swiper-slide .link_to_food {
    width: 25%;
    display: inline-block;
    text-align: center;
    padding: .3rem 0;
  }

  .swiper-slide .link_to_food img {
    margin-bottom: .6rem;
    width: 1.8rem;
  }

  .swiper-slide .link_to_food span {
    font-size: .55rem;
    color: #666;
    display: block;
    font-weight: 200;
  }

  /*分页器*/
  .swiper-pagination {
    width: 100%;
    background: transparent;
  }
  .footernav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  /*附近商家*/
  .business{
    background: white;
    margin-top: .4rem;
  }
</style>
