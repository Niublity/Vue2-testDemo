<template>
  <div>
    <Header :title="title"></Header>
    <section class="descriptions">
      <section class="infor-con">
        <h3>Q1: 什么是商家代金券？</h3>
        <ul>
          <li>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</li>
        </ul>
      </section>
      <section  class="infor-con">
        <h3>Q2: 怎么获得商家代金券？</h3>
        <ul>
          <li>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li>
          <li>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
        </ul>
      </section>
      <section  class="infor-con">
        <h3>Q3: 商家代金券使用条件</h3>
        <ul>
          <li>商家代金券仅限在指定商家使用</li>
          <li>商家代金券仅限在线支付使用</li>
          <li>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
        </ul>
      </section>
    </section>
  </div>

</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "sellerdetail",
    data() {
      return {
        title: "代金券说明"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .descriptions{
    background: white;
    font-size: .6rem;
    height: 26.4rem;
    padding: 0rem .7rem 0;
    overflow:scroll;
    text-overflow: ellipsis;
  }
  .descriptions::-webkit-scrollbar{
    display: none;
  }
  .infomation {
    /*font-size: .6rem;*/
    color: #333;
    margin: 0 2rem;
    padding-top:1rem;
    letter-spacing: 0.06rem;
  }

  .descriptions ul li {
    color: #666;
    margin-bottom: .2rem;
    font-weight: 200;
    line-height: 0.9rem;
  }

  .descriptions h3 {
    margin-top: .666667rem;
    margin-bottom: .3rem;
    font-size: .7rem;
    font-weight: 300;
    color: #333;
  }
  ol{
    display: block;
    margin-left: 2rem;
    margin: 0.8rem 0 1rem 2rem;
  }
  ol li{
    line-height: 0.9rem;

  }
</style>

