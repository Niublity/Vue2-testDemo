<template>
  <div class="balancebody">
    <Header :title="title"></Header>
    <div class="balancewrap">
      <div class="detail">
        <div class="balancetop">
          <div><span>当前余额</span></div>
          <router-link  to="/balance/balancedetail"><img src="./img/10.png" alt=""><span>余额说明</span></router-link>
        </div>
        <div class="money">
          <span>0.00</span>
          <span>元</span>
        </div>
        <div class="btnsunmit">
          <span>提现</span>
        </div>
      </div>
    </div>
    <p class="dealdetail">交易明细</p>
    <div class="no_logo">
      <img src="./img/11.png" alt="">
      <p>暂无明细记录</p>
    </div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <router-view class="cover"></router-view>
    </transition>
  </div>


</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "balance",
    data() {
      return {
        title: "我的余额"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .cover {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: white;
    z-index: 100;
  }

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

  .balancetop a {
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
    background-color: #ccc;

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
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
  }
</style>
