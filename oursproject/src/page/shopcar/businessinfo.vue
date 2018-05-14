<template>
  <div>
    <Header :title="title"></Header>
    <section class="activities_container">
      <header>活动与属性</header>
      <ul class="actibities_ul">
        <li><span
          style="background-color: rgb(153, 153, 153);color: white">保</span><span>已加入“外卖保”计划，食品安全有保障(APP专享)</span></li>
        <li><span style="background-color: rgb(87, 169, 255);color: white">准</span><span>准时必达，超时秒赔(APP专享)</span></li>
        <li><span
          style="background-color: rgb(153, 153, 153);color: white">票</span><span>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
        </li>
      </ul>
    </section>
    <section class="shop_status_container">
      <router-link to="" class="shop_status_header">
        <span class="shop_detail_title">食品监督安全公示</span>
        <div>
          <span class="identification_detail">企业认证详情</span>
          <img class="description_arrow" src="./img/14.png" alt="">
        </div>
      </router-link>
      <section class="shop_statu_detail">
        <div><img src="./img/4.png" alt=""></div>
        <div class="check_date">
          <p>
            <span>监督检查结果：</span>
            <span>良好</span>
          </p>
          <p>
            <span>检查日期：</span>
            <span></span>
          </p>
        </div>
      </section>
    </section>
    <section class="shop_status_info">
      <header>商家信息</header>
      <p>效果演示</p>
      <p>地址：广东省广州市越秀区中山五路219号华联购物中心F1</p>
      <p>营业时间：[8:30/20:30]</p>
      <p class="shop_status_infop">
        <span>营业执照</span>
        <img src="./img/14.png" alt="">
      </p>
      <p class="shop_status_infop">
        <span>餐饮服务许可证</span>
        <img src="./img/14.png" alt="">
      </p>
    </section>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "businessinfo",
    data() {
      return {
        title: "商家详情"
      }
    },
    components: {
      Header: header
    },
  }
</script>

<style scoped>


  .activities_container {
    background-color: #fff;
    margin: .4rem 0;
    padding-bottom: .1rem;
  }

  .activities_container header {
    font-size: .75rem;
    color: #333;
    line-height: 1.8rem;
    padding-left: .6rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }

  .activities_container ul {
    padding: 0 .6rem;
  }

  .activities_container ul li {
    margin-bottom: .8rem;
  }

  .activities_container ul li span {
    line-height: 1.1rem;
    font-size: .55rem;
    color: #666;
    padding: .1rem;
    border: 1px;
    border-radius: .1rem;
    margin-right: .2rem;

  }

  .shop_status_container {
    background-color: #fff;
    margin-bottom: .4rem;
  }

  .shop_status_container .shop_status_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
  }

  .shop_detail_title {
    font-size: .75rem;
    color: #333;
  }

  .identification_detail {
    font-size: .7rem;
    color: #bbb;
  }

  .shop_statu_detail {
    display: flex;
    padding: .6rem;
  }

  .shop_status_container .shop_status_header > div img {
    width: .7rem;
    vertical-align: middle;
  }

  .shop_statu_detail > div:nth-child(1) img {
    width: 2rem;
    height: 2rem;
    margin-right: .6rem;
  }

  .shop_statu_detail > div:nth-child(2) p {
    font-size: .55rem;
    line-height: 1.5rem;
    color: #666;
  }

  .shop_statu_detail > div:nth-child(2) p:nth-child(1) span:nth-child(2) {
    color: #7ed321;
  }

  .shop_status_info {
    background-color: #fff;
    margin-bottom: .4rem;
  }

  .shop_status_info img {
    width: .7rem;
    height: .7rem;
  }

  .shop_status_info header {
    line-height: 1.8rem;
    padding: 0 .6rem;
    font-size: .75rem;
    color: #333;
    border-bottom: .025rem solid #f1f1f1;
  }

  .shop_status_info p {
    font-size: .6rem;
    color: #666;
    padding: .7rem .6rem .7rem 0;
    margin-left: .6rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .shop_status_infop {
    display: flex;
    justify-content: space-between;
  }
</style>
