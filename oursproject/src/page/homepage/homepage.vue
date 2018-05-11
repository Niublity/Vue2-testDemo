<template>
  <div>
    <Header :title="title"></Header>

      <img :src="img.user" alt="" class="top_user">
    <!--轮播图-->
    <div class=" swiper-container foods_kind">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link v-for="kind1 in kindOne" :to="{name:'Shopshow',query:{title:kind1.title}}" :key="kind1.id" class="link_to_food" >
          <img :src="'https://fuss10.elemecdn.com'+kind1.image_url" alt="">
          <span>{{kind1.title}}</span>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link class="link_to_food" v-for="kind2 in kindTwo" :to="{name:'Shopshow',query:{title:kind2.title}}" :key="kind2.id">
            <img :src="'https://fuss10.elemecdn.com'+kind2.image_url" alt="">
            <span>{{kind2.title}}</span>
          </router-link>
        </div>
      </div>
      <!--分页器-->
      <div class="swiper-pagination"></div>
    </div>
    <!--附近商家-->
    <div class="business">
      <img :src="img.business" alt="" style="width: .6rem;vertical-align: middle">
      <span>附近商家</span>
    </div>
    <goodlist></goodlist>
    <!--导航栏-->
    <footernav class="footernav"></footernav>
  </div>
</template>

<script>

  import search from "./img/搜索.png";
  import user from "./img/商户线性.png";
  import business from "./img/商家 (3).png";

  import Swiper from "../../../static/js/swiper-4.2.2.min";
  import Swipercss from "../../../static/css/swiper-4.2.2.min.css";

  import footernav from "../../components/footernav/footernav";
  import goodlist from "../../components/goodslist/goodslist";
  import header from "../../components/foodheader/foodheader"
  export default {
    name: "homepage",
    data() {
      return {
        title:"111",
        img:{business, search, user},
        foodkinds:[],
        kindOne:[],
        kindTwo:[],
      }
    },
    created(){
      this.$http.get("http://cangdu.org:8001/v2/index_entry").then((response)=>{
        //console.log(response.data);
        // this.foodkinds = this.publicfunction(response.data,8);
        this.foodkinds = this.publicfunction.sliceArray(response.data,8)
        this.kindOne = this.foodkinds[0];
        this.kindTwo = this.foodkinds[1];
        setTimeout(function(){
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        },200)
      })
    },
    components:{
      footernav,
      goodlist,
      Header:header
    },
    mounted() {
      console.log(this.$el); //已被初始化
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
  .top_user {
    width: .9rem;
    height: .9rem;
    position: fixed;
    top: .5rem;
    right: .4rem;
  }

  /*---轮播图----*/
  .swiper-container {
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
    padding-left: .6rem;
    padding-top: 0.4rem;
  }
  .business span{
    color: #999;
    font-size: 0.55rem;
  }
</style>
