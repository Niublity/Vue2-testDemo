<template>
  <div>
    <Header :title="title"></Header>
    <router-link to="/accountdetail" class="simpledes">
      <div><img src="./img/4.jpg" alt=""></div>
      <div>
        <p>304733908</p>
        <p><img src="./img/16.png" alt="">暂无绑定手机号</p>
      </div>
      <div><img src="./img/15.png" alt=""></div>
    </router-link>
    <div class="count_num">
      <div @click="balance">
        <div><span>0.00</span><span>元</span></div>
        <p>我的余额</p>
      </div>
      <div @click="coupon">
        <div><span>3</span><span>个</span></div>
        <p>我的优惠</p>
      </div>
      <div @click="integral">
        <div><span>0</span><span>分</span></div>
        <p>我的积分</p>
      </div>
    </div>
    <div class="middle">
      <ul>
        <li>
          <div><img src="./img/5.png" alt=""></div>
          <p><span>订单详情</span><img src="./img/3.png" alt=""></p>
        </li>
        <li>
          <div><img src="./img/6.png" alt=""></div>
          <p><span>积分商城</span><img src="./img/3.png" alt=""></p>
        </li>
        <li @click="vipcenter">
          <div><img src="./img/7.png" alt=""></div>
          <p><span>饿了么会员卡</span><img src="./img/3.png" alt=""></p>
        </li>
      </ul>

    </div>
    <div class="middle">
      <ul>
        <li @click="servercenter">
          <div><img src="./img/8.png" alt=""></div>
          <p><span>服务中心</span><img src="./img/3.png" alt=""></p>
        </li>
        <li @click="download">
          <div><img src="./img/9.png" alt=""></div>
          <p><span>下载饿了么</span><img src="./img/3.png" alt=""></p>
        </li>
      </ul>

    </div>
    <Footernav class="footernav"></Footernav>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"
  import footernav from "../../components/footernav/footernav"

  export default {
    name: "personalpage",
    data() {
      return {
        title: "个人中心"
      }
    },
    components: {
      Footernav: footernav,
      Header: header
    },
    created(){
      let url = "http://cangdu.org:8001/v1/user"
      this.$http.get(url).then((response)=>{
        console.log(response)
      })
    },
    methods: {
      balance() {
        this.$router.push("/balance")
      },
      coupon() {
        this.$router.push("/coupon")
      },
      integral() {
        this.$router.push("/integral")
      },
      download() {
        this.$router.push("/download")
      },
      servercenter() {
        this.$router.push("/servercenter")
      },
      vipcenter() {
        this.$router.push("/vipcenter")
      }
    }
  }
</script>

<style scoped>

  .simpledes {
    display: block;
    align-items: center;
    background: #3190e8;
    padding: .666667rem .6rem;
  }

  .simpledes > div {
    display: inline-block;
    vertical-align: middle;
  }

  .simpledes div:nth-child(2) {
    margin-left: .3rem;
  }

  .simpledes div:nth-child(2) p:nth-child(1) {
    font-weight: 700;
    font-size: .8rem;
    color: #fff;
  }

  .simpledes div:nth-child(2) p:nth-child(2) {
    margin-top: .5rem;
    font-size: .57333rem;
    font-family: Helvetica Neue, Tahoma, Arial;
    color: #fff;
  }

  .simpledes div:nth-child(2) p:nth-child(2) img {
    width: .5rem;
    vertical-align: middle;
  }

  .simpledes div:nth-child(1) img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .simpledes div:nth-child(3) {
    margin-left: 5rem;
  }

  .simpledes div:nth-child(3) img {
    width: .9rem;
  }

  .count_num {
    display: flex;
  }

  .count_num > div {
    background-color: white;
    height: 3.8rem;
    width: 33.3333%;
  }

  .count_num > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .count_num > div div {
    margin-bottom: .75rem;
  }

  .count_num > div div span:nth-child(1) {
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
  }

  .count_num > div div span:nth-child(2) {
    font-size: .57333rem;
  }

  .count_num p {
    font-size: .57333rem;

    font-weight: 400;
  }

  .count_num div:nth-child(2) {
    border-left: .05rem solid #f1f1f1;
    border-right: .05rem solid #f1f1f1;
  }

  .count_num > div:nth-child(2) span:nth-child(1) {
    color: red;
  }

  .count_num > div:nth-child(3) span:nth-child(1) {
    color: green;
  }

  .middle {
    margin-top: .3rem;
    background-color: white;
  }

  .middle ul li {
    padding-left: .8rem;
    height: 1.8rem;
    display: flex;
    font-size: .7rem;
    align-items: center;
  }

  .middle ul p {
    color: #948b8a;
    font-weight: 400;
    height: 100%;
    width: 100%;
    display: flex;
    font-size: .7rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: .05rem solid #f1f1f1;
  }

  .middle ul li img {
    margin-right: .3rem;
    width: .8rem;
    vertical-align: bottom;
  }

  .footernav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
</style>
