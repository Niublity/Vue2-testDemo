<template>
  <div class="footer">
    <div class="footer_nav">
      <router-link class="footer_link" to="">
        <img src="./img/qianbao.png" alt="">
        <span>外卖</span>
      </router-link>
      <router-link class="footer_link" to="">
        <img src="./img/qianbao.png" alt="">
        <span>搜索</span>
      </router-link>
      <router-link class="footer_link" to="">
        <img src="./img/qianbao.png" alt="">
        <span>订单</span>
      </router-link>
      <router-link class="footer_link" to="">
        <img src="./img/qianbao.png" alt="">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footernav"
  }
</script>

<style scoped>
  .footer {
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }

  .footer_nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.95rem;
    background-color: #fff;

  }

  .footer_link {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

  }

  .footer_link img {
    width: .8rem;
    height: .8rem;
  }

  .footer_link span {
    font-size: .45rem;
    color: #666;
    font-weight: 400;
    line-height: .8rem;
  }
</style>
