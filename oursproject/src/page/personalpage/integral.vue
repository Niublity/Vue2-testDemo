<template>
  <div class="balancebody">
    <Header :title="title"></Header>
    <div class="balancewrap">
      <div class="detail">
        <div class="balancetop">
          <div><span>当前积分</span></div>
          <div><img src="./img/10.png" alt=""><span>积分说明</span></div>
        </div>
        <div class="money">
          <span>0</span>
          <span>分</span>
        </div>
        <div class="btnsunmit" @click="showdes">
          <span>积分兑换商品</span>
        </div>
      </div>
    </div>
    <p class="dealdetail">最近30天积分记录</p>
    <div class="no_logo" >
      <img src="./img/11.png" alt="">
      <p>最近30天无积分记录</p>
      <span>快去下单赚取大量积分吧</span>
    </div>
    <transition enter-active-class="animated bounceIn">
      <div class="login-warn" v-if="show">
        <img :src="warn" alt="">
        <p>快去下单赚取大量积分吧</p>
        <div class="warn-sure" @click="hides">确认</div>
      </div>
    </transition>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"
  import warn from "./img/警告.png";

  export default {
    name: "integral",
    data() {
      return {
        warn,
        title: "我的积分",
        show:false
      }
    },
    components: {
      Header: header
    },
    methods:{
      showdes(){
        this.show = true
      },
      hides(){
        if (this.show == true){
          this.show = false;
        }
      }
    }
  }
</script>

<style scoped>
  .balancewrap {
    padding: .3rem;
    background-color: #3190e8;

  }

  .detail {
    border-radius: .15rem;
    padding: .4rem;
    background-color: white;
  }

  .balancetop {
    margin-top: .2rem;
    font-weight: 400;
    color: #666;
    font-size: .55rem;
    display: flex;
    justify-content: space-between;
  }

  .balancetop div:nth-child(2) {
    display: flex;
    align-items: center;
    color: #3190e8;
  }

  .balancetop img {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }

  .money {
    font-family: Helvetica Neue, Tahoma, Arial;
    margin-top: .4rem;
  }

  .money span:nth-child(1) {
    font-size: 1.8rem;
    color: #333;
  }

  .money span:nth-child(2) {
    font-size: .7rem;
    color: #333;
  }

  .btnsunmit {
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    margin-top: 1.1rem;
    text-align: center;
    background-color: #fe6d47;

  }

  .btnsunmit span {
    font-weight: 100;
  }

  .dealdetail {
    font-size: .6rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
  }

  .no_logo {

    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .no_logo img {
    width: 8rem;
    height: 5rem;
  }

  .no_logo p {
    margin-top: .8rem;
    font-size: .7rem;
    color: #666;
    font-weight: 200;
  }

  .no_logo span {
    margin-top: .8rem;
    font-size: .5rem;
    color: #999;
  }

  .login-warn {
    width: 12rem;
    background: white;
    border-radius: .25rem;
    position: absolute;
    top: 29.6%;
    left: 2rem;
    text-align: center;
    padding-top: .6rem;
  }

  .login-warn img:nth-of-type(1) {
    width: 3rem;
    height: 3rem;
  }

  .login-warn p {
    font-size: .7rem;
    color: #333;
    margin: .8rem 0;
    font-weight: 200;
    letter-spacing: 0.02rem;
  }

  .warn-sure {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    padding: .6rem 0;
    border: 1px;
    border-radius: .15rem;
    font-weight: 200;
  }
</style>

