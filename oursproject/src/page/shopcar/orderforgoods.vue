<template>
  <div class="sure-orderforgoods">
    <Header :title="title" class="sure-orderforgoods-header"></Header>
    <img src="./img/商户线性.png" alt="" class="orderfg-top">
    <!--个人信息-->
    <section class="ouser-Infor">
      <section class="ouser-Infor-left">
        <img src="./img/定位.png" alt="" class="olocation">
        <div class="left-username">
          <p>
            <span>111</span>
            <span>先生</span>
            <span>15037136545</span>
          </p>
          <p>
            <span>公司</span>
            <span>帝湖花园22栋</span>
          </p>
        </div>
      </section>
      <a href="##">
        <img src="../personalpage/img/14.png" alt="" class="tochoose-address">
      </a>
    </section>
    <!--送达时间-->
    <section class="osend-time">
      <p>送达时间</p>
      <div class="osend-time-right">
        <p>尽快送达|预计16:08</p>
        <p>蜂鸟转送</p>
      </div>
    </section>
    <!--支付方式-->
    <section class="opay-way">
      <div class="opay-way-one">
        <span>支付方式</span>
        <p>
          <a href="##">
            <span>在线支付</span>
            <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
          </a>
        </p>
      </div>
      <div class="opay-way-two">
        <span>红包</span>
        <span>暂时只在饿了吗APP中支持</span>
      </div>
    </section>
    <!--购物车食品列表-->
    <section class="ofood-List">
      <header class="ofood-List-header">
        <img src="./img/test.jpeg" alt="">
        <h4>效果演示</h4>
      </header>
      <section class="ofood-List-container">
        <ul>
          <li class="ofood-List-wrapper">
            <p>食品名称</p>
            <span class="wrapper-count">X <span>3</span></span>
            <span class="wrapper-price">￥<span>20</span></span>
          </li>
        </ul>
        <footer class="ofood-List-footer">
          <p>订单￥<span>11111</span></p>
          <p>
            <span>待支付</span>
            <span>￥<span>11111</span></span>
          </p>
        </footer>
      </section>
    </section>
    <section class="oremark">
      <section class="oremark-wrapper">
        <span>订单备注</span>
        <a href="##" class="oremark-tochoose">
          <span>备注信息</span>
          <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
        </a>
      </section>
      <section class="oremark-wrapper border">
        <span>发票抬头</span>
        <a href="##" class="oremark-tochoose">
          <span>不需要开发票</span>
          <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
        </a>
      </section>
    </section>
    <footer class="confirm-order">
      <div>
        <span>待支付 <span>￥</span><span>1111</span></span>
      </div>
      <div>确认下单</div>
    </footer>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "orderforgoods",
    data() {
      return {
        title: "确认订单"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
.sure-orderforgoods{
  overflow-y: scroll;
  padding-bottom: 10rem;
}
.sure-orderforgoods-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.sure-orderforgoods::-webkit-scrollbar{
  display: none;
}
  /*导航栏*/
  .orderfg-top {
    width: .9rem;
    height: .9rem;
    position: fixed;
    top: .5rem;
    right: .4rem;
  }

  /*用户信息 地址等*/
  .ouser-Infor {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 .6rem;
    align-items: center;
    min-height: 3.5rem;
    margin-top: 2.5rem;

  }

  .ouser-Infor-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .ouser-Infor .olocation {
    width: .8rem;
    height: .8rem;
    margin-right: .4rem;
  }

  .left-username p:nth-of-type(1) {
    font-size: .65rem;
    color: #333;
    margin-bottom: .1rem;
  }

  .left-username p:nth-of-type(1) span:nth-of-type(1) {
    font-size: .8rem;
    font-weight: 700;
  }

  .left-username p:nth-of-type(2) span:nth-of-type(1) {
    font-size: .5rem;
    font-weight: 700;
    color: #fff;
    background-color: rgb(76, 217, 100);
    line-height: .6rem;
    height: .6rem;
    border-radius: .15rem;
    margin-right: .3rem;
    padding: 0 .2rem;
  }

  .left-username p:nth-of-type(2) span:nth-of-type(2) {
    font-size: .55rem;
    color: #777;
    font-weight: 200;
  }

  .tochoose-address {
    width: 1rem;
    height: 1rem;
  }

  /*送达时间*/
  .sure-orderforgoods .osend-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin: .4rem 0;
    padding: 0 .7rem;
    border-left: .2rem solid #3190e8;
    min-height: 4rem;
    box-sizing: border-box;
  }

  .osend-time p:nth-of-type(1) {
    font-size: .8rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
  }

  .osend-time-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .osend-time-right p:nth-of-type(1) {
    font-size: .7rem;
    color: #3190e8;
    font-weight: 200;

  }

  .osend-time-right p:nth-of-type(2) {
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    margin-top: .5rem;
    border-radius: .12rem;
    padding: .1rem;
    font-weight: 100;

  }

  /*支付方式*/
  .opay-way {
    background-color: #fff;
    padding: 0 .7rem;
  }

  .opay-way > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tochoose-pay {
    width: .5rem;
    height: .5rem;
  }

  .sure-orderforgoods .opay-way .opay-way-one {
    font-size: .7rem;
    color: #666;
    border-bottom: .025rem solid #f5f5f5;
    line-height: 2rem;
  }

  .opay-way .opay-way-one p:nth-of-type(1) span {
    font-size: .6rem;
    color: #aaa;
  }

  .opay-way .opay-way-two span {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
    font-weight: 200;
  }

  /*购物车食品列表*/
  .ofood-List {
    background-color: #fff;
    margin: .4rem 0;
  }

  .ofood-List-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .ofood-List-header img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .3rem;

  }

  .ofood-List-header h4 {
    font-size: .8rem;
    color: #333;

  }

  .ofood-List p, .ofood-List span {
    font-size: .65rem;
    font-weight: 200;
  }

  .wrapper-count, .ofood-List-footer p:nth-of-type(2) {
    color: #f60;
  }

  .ofood-List-wrapper p:nth-of-type(1) {
    width: 11rem;
  }

  .ofood-List-wrapper {
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }

  .ofood-List-footer {
    display: flex;
    justify-content: flex-start;
    border-top: .025rem solid #f5f5f5;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }

  .ofood-List-footer p:nth-of-type(1) {
    width: 11rem;
  }

  .ofood-List-footer p:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*备注信息*/
  .oremark {
    background-color: #fff;
    padding: 0 .7rem;
  }

  .oremark-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2rem;
  }

  .oremark .border {
    border-top: .025rem solid #f5f5f5;
  }

  .oremark-wrapper span:nth-of-type(1) {
    font-size: .7rem;
    color: #666;
    font-weight: 100;
  }

  .oremark .oremark-tochoose span {
    font-size: .6rem;
    line-height: 2rem;
    color: #aaa;
    font-weight: 100;
  }
  /*footer*/
  .confirm-order{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    /*justify-content: space-between;*/
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
  }
  .confirm-order div{
    line-height: 2rem;
    color: white;
    font-weight: 100;
  }
  .confirm-order div:nth-of-type(1){
    flex: 5;
    background-color: #3c3c3c;
    padding-left: .7rem;
    font-size: .7rem;
  }

  .confirm-order div:nth-of-type(2){
    background-color: #56d176;
    font-size: .75rem;
    text-align: center;
    flex: 2;
  }
</style>
