<template>
  <div>
    <Header :title="title"></Header>
    <section class="descriptions">
      <section class="infor-con">
        <h3>Q1: 使用余额的条件</h3>
        <ul>
          <li>为了保护账户安全，使用余额前必须先绑定手机号。</li>
        </ul>
      </section>
      <section  class="infor-con">
        <h3>Q2: 余额可以怎么用？</h3>
        <ul>
          <li>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</li>
        </ul>
      </section>
      <section  class="infor-con">
        <h3>Q3:我要如何提现？</h3>
        <ul>
          <li>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</li>
        </ul>
      </section>
      <section  class="infor-con">
        <h3>Q4:为什么会提现失败？</h3>
        <ul>
          <li>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</li>
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
        title: "余额问题"
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
    /*height: 26.4rem;*/
    padding: 0rem .7rem 0;
    text-overflow: ellipsis;
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
