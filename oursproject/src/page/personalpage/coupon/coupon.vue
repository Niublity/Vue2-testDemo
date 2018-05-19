<template>
  <div>
    <Header :title="title"></Header>
    <div class="nav">
      <div @click="hongbao"><span :class="showHongbao? 'outline':''">红包</span></div>
      <div @click="couponShow"><span :class="showCoupon? 'outline':''">商家代金券</span></div>
    </div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <section v-if="showHongbao">
        <section class="hongbao_container">
          <div class="hongbao_header">
            <div>有<span> 3 </span>个红包即将到期</div>
            <router-link to="/coupon/couponinfor" class="redinfor"><img src="../img/10.png" alt=""><span>红包说明</span>
            </router-link>
          </div>
          <ul class="hongbao_list">
            <li v-for="coupon in coupons">
              <section class="list_item">
                <div>
                  <div><span>￥</span>
                    <span>{{[...JSON.stringify(coupon.amount)][0]}}</span>
                    <span>{{[...JSON.stringify(coupon.amount)][1]}}</span>
                    <span>{{[...JSON.stringify(coupon.amount)][2]}}</span>
                  </div>
                  <p>满{{coupon.sum_condition}}元可用</p>
                </div>
                <div>
                  <p>{{coupon.name}}</p>
                  <p>{{coupon.end_date}}到期</p>
                  <p>限收获手机号为</p><span>{{coupon.phone}}</span>
                </div>
                <div>剩3日</div>
              </section>
            </li>
          </ul>
          <p>
            限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理
          </p>
          <router-link to="/coupon/hbHistory" class="historyhongbao">查看历史红包 ></router-link>
        </section>
        <footer>
          <div class="footernav">
            <div @click="exchangehongbao"><span>兑换红包</span></div>
            <div @click="recommend"><span>推荐有奖</span></div>
          </div>
        </footer>
      </section>


    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <section class="coupon-container" v-if="showCoupon">
        <p class="coupon-wratop ">
          <img src="../img/11111.png" alt="">
          <router-link to="/coupon/sellerdetail">商家代金券说明</router-link>
        </p>
        <section class="unable-use">
          <img src="../vipcenter/image/voucher.png" alt="">
          <p>无法使用代金券</p>
          <p>非客户端或客户端版本过低</p>
          <router-link to="/download">下载或升级客户端</router-link>
        </section>
      </section>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view class="children-ponsition"></router-view>
    </transition>
  </div>

</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "coupon",
    data() {
      return {
        title: "我的优惠",
        showHongbao: true,
        showCoupon: false,
        showexchangehongbao: false,
        showrecommend: false,
        coupons: [],
        amounts: [],
      }
    },
    created() {
      let userid = JSON.parse(sessionStorage.getItem("user"))
      let url = "http://cangdu.org:8001/promotion/v2/users/" + userid.user_id + "/hongbaos?limit=20&offset=0"
      this.$http.get(url).then((response) => {
        this.coupons = response.data;
      })
    },
    components: {
      Header: header
    },
    methods: {
      hongbao() {
        this.showHongbao = true;
        this.showCoupon = false;
      },
      couponShow() {
        this.showHongbao = false;
        this.showCoupon = true;
      },
      exchangehongbao() {
        this.$router.push({path: "/coupon/exchange"})
      },
      recommend() {
        this.$router.push({path: "/coupon/encourage"})
      }
    }
  }
</script>

<style scoped>
  .children-ponsition {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: white;
  }

  /*商家代金券*/
  .coupon-container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 4rem;
  }

  .coupon-wratop {
    display: flex;
    font-size: .5rem;
    justify-content: flex-end;
    line-height: 2rem;
    margin-right: .5rem;
    align-items: center;
  }

  .coupon-wratop img {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }

  .coupon-wratop a {
    color: #3190e8;
  }

  .unable-use {
    margin-top: 4rem;
  }

  .unable-use img {
    width: 6rem;
    height: 3.4rem;

  }

  .unable-use p:nth-of-type(1) {
    font-size: .7rem;
    color: #666;
    margin-top: .8rem;
    font-weight: 200;
  }

  .unable-use p:nth-of-type(2) {
    font-size: .5rem;
    color: #999;
    margin-top: .6rem;
    margin-bottom: .6rem;
    font-weight: 200;
  }

  .unable-use a {
    display: inline-block;
    background-color: #56d176;
    font-size: .65rem;
    color: #fff;
    padding: .4rem;
    border-radius: .15rem;
    font-weight: 100;
  }

  .animated {
    -webkit-animation-duration: .3s;
  }

  .nav {
    height: 2rem;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav div {
    padding-bottom: .4rem;
  }

  .nav div span {
    /*color: #3190e8;*/
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
  }

  .outline {
    border-bottom: .1rem solid #3190e8;
    color: #3190e8 !important;
  }

  .historyhongbao {
    display: block;
    color: #999;
    padding: .5rem 0 2.8rem;
    font-size: .6rem !important;
    text-align: center;
  }

  .hongbao_container {
    padding: 0 .7rem;
  }

  .hongbao_header {
    height: 2rem;
    font-weight: 400;
    color: #666;
    font-size: .55rem;
    display: flex;
    justify-content: space-between;
  }

  .hongbao_header div:nth-child(1) {
    color: #666;
    line-height: 2rem;
  }

  .hongbao_header div:nth-child(1) span {
    color: red;
  }

  .redinfor {
    display: flex;
    align-items: center;
    color: #3190e8;
  }

  .hongbao_header img {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }

  .hongbao_list li {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    /*justify-content: space-between;*/
    padding: 1rem .5rem .8rem;
  }

  .list_item > div:nth-child(1) {
    border-right: .025rem dotted #ccc;
    width: 3.2rem;
  }

  .list_item > div:nth-child(1) div span:nth-child(1) {
    font-size: .75rem;
    color: #ff5340;
    font-weight: 700;
  }

  .list_item > div:nth-child(1) div span:nth-child(2) {
    margin: 0 -.1rem 0 -.3rem;
    font-size: 1.5rem;
    color: #ff5340;
  }

  .list_item > div:nth-child(1) div span:nth-child(3), .list_item > div:nth-child(1) div span:nth-child(4) {
    margin: 0 -.1rem;
    font-size: .8rem;
    color: #ff5340;
    font-weight: 700;
  }

  .list_item p {
    line-height: 1rem;
    font-size: .4rem;
    color: #999;
    letter-spacing: 1px;
  }

  .list_item > div:nth-child(2) {
    width: 6rem;
    margin-left: 1.5rem;
  }

  .list_item > div:nth-child(2) p {
    line-height: 1.5;
    letter-spacing: 0px;
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .list_item > div:nth-child(2) p:nth-child(1) {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }

  .list_item > div:nth-child(2) span {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .list_item > div:nth-child(3) {
    margin-left: .9rem;
    font-size: .75rem;
    color: #ff5340;
  }

  .hongbao_container > p {
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
  }

  .footernav {
    position: fixed;
    bottom: 0;
    height: 2rem;
    background-color: white;
    width: 100%;
    overflow: hidden;
  }

  .footernav div {
    text-align: center;
    line-height: 1.6rem;
    float: left;
    width: 50%;
    padding-bottom: .4rem;
    box-sizing: border-box;
  }

  .footernav div span {
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
  }

  .footernav div:nth-of-type(1) {
    border-right: 1px solid rgb(245, 245, 245);
  }
</style>
