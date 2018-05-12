<template>
  <div class="contianer">
    <Header :title="title"></Header>
    <div class="imagehongbao">
      <img src="./img/activity.png" alt="">
    </div>
    <section class="div-contianer">
      <div class="middle">
        <img src="./img/qq.png" alt="">
        <p>邀请微信好友</p>
      </div>
      <div class="middle">
        <img src="./img/qq.png" alt="">
        <p>邀请QQ好友</p>
      </div>
      <div class="middle">
        <img src="./img/qq.png" alt="">
        <p>面对面邀请</p>
      </div>
    </section>
    <section class="bottom-container">
      <div>
        <p>累计收益</p>
        <p><span>0</span>元</p>
      </div>
      <div>
        <p>成功邀请</p>
        <p><span>0</span>人</p>
      </div>
    </section>
    <p class="centerP">-收益明细-</p>
    <section class="footer">
      <img src="./img/qianbao.png" alt="">
      <p>还不赶紧去邀请好友</p>
    </section>
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "encourage",
    data() {
      return {
        title: "推荐有奖"
      }

    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .contianer {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  .imagehongbao img {
    width: 100%;
    height: 100%;
  }

  .div-contianer {
    background-color: white;
    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .middle img {
    width: 2.5rem;
    height: 2.5rem;
  }

  .middle p {
    margin-top: .4rem;
    font-size: .5rem;
    color: #333;
  }

  .bottom-container {
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
    justify-content: space-around;
    align-items: center;
  }

  .bottom-container div {
    width: 50%;
    text-align: center;
  }
  .bottom-container div:nth-child(2){
    border-left: .025rem solid #ddd;
  }
  .bottom-container div:nth-child(1) span{
    font-size: .8rem;
    color: #ff5633;
    font-weight: 700;
  }
  .bottom-container div:nth-child(3) span{
    font-size: .8rem;
    color: #666;
    font-weight: 700;
  }
  .centerP{
    text-align: center;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .footer{
    margin-top: 1rem;
    text-align: center;
    font-size: .5rem;
    color: #999;
  }
  .footer p{
    margin-top: .5rem;
  }
  .footer img{
    width: 1.3rem;
    height: 1.6rem;
  }
</style>
