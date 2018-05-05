<template>
  <div>
    <div class="home_top">
      <img :src="search" alt="" class="top_search">
      <span class="top_title">需要获取的数据eeeeeeeeee</span>
      <img :src="user" alt="" class="top_user">
    </div>
    <!--轮播图-->
    <div class=" swiper-container foods_kind">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="##">
            <img src="" alt="">
            <span>甜品饮品</span>
          </a>
        </div>
        <div class="swiper-slide">Slide 2</div>
      </div>
    </div>
    <!--分页器-->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  /*引入图片*/

  import search from "./img/搜索.png";
  import user from "./img/商户线性.png";
  import Swiper from "../../../static/js/swiper-4.2.2.min";
  import Swipercss from "../../../static/css/swiper-4.2.2.min.css";

  export default {
    name: "homepage",
    data() {
      return {
        search,
        user
      }
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
  }
  .swiper-slide {
    background: white;
  }
</style>
