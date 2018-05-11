<template>
  <div>
    <Header :title="title"></Header>
    <section class="infor-container">
      <section class="infor-wrapper">
        <h3>Q1: 怎么获得积分？</h3>
        <ul>
          <li>在线支付的订单将获得订单积分奖励：</li>
          <li>积分将在用户完成评价后获得。</li>
          <li>可获得积分=订单金额×10（即1元=10点积分）。</li>
          <li>订单金额指实际付款金额，不包含活动优惠金额。</li>
          <li>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li>
        </ul>
      </section>
      <section class="infor-wrapper">
        <h3>Q2: 积分用来做什么？</h3>
        <ul>
          <li>可以在积分商城兑换各种礼品。。</li>
        </ul>
      </section>
      <section class="infor-wrapper">
        <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
        <ul>
          <li>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</li>
        </ul>
      </section>
      <section class="infor-wrapper">
        <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
        <ul>
          <li>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "intergraldetail",
    data() {
      return {
        title: "红包说明"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .infor-container{
    font-size: .6rem;
    height: 26.4rem;
    color: #666;
    padding: 0 .5rem .5rem;
    overflow: scroll;
  }
  .infor-container::-webkit-scrollbar{
    display: none;
  }
  h3 {
    line-height: 2rem;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  ul li {
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
  }
</style>
