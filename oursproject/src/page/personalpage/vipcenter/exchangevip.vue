<template>
  <div>
    <Header :title="title"></Header>
    <p class="buy-for">
      <span>成功兑换后将关联到当前账号：</span>
      <span class="buy-for1">{{username}}</span>
    </p>
    <section class="vip-infor">
      <input type="text" placeholder="请输入10位卡号">
      <input type="text" placeholder="请输入6位卡密">
    </section>
    <div class="exchange">兑换</div>
    <footer class="warm-hint">
      <h4>——温馨提示——</h4>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：30次减免配送费</p>
      <p>季卡：90次减免配送费</p>
      <p>年卡：360次减免配送费</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </footer>
  </div>

</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "exchangevip",
    data() {
      return {
        title: "兑换会员",
        username:""
      }
    },
    components: {
      Header: header
    },
    created(){
      this.username=JSON.parse(sessionStorage.getItem("user")).username
    }

  }
</script>

<style scoped>
  .buy-for {
    padding-left: .7rem;

  }

  .buy-for span {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
  }

  .buy-for span:nth-of-type(2) {
    font-weight: 700;
    /*color: #000;*/
  }

  .vip-infor input {
    width: 100%;
    background: white;
    border:0;
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .65rem;
    color: #999;
    padding-left: .7rem;
    font-weight: 200;
  }
  .exchange{
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 200;
  }
  .warm-hint{
    margin-top: 1rem;
  }
  .warm-hint h4{
    text-align: center;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
    font-weight: 100;
  }
  .warm-hint>p{
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
    font-weight: 100;
    padding-left: 2rem;

  }
</style>
