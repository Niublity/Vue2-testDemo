<template>
  <div>
    <Header :title="title"></Header>
    <section class="headportrait">
      <input type="file" class="profileinfopanel-upload">
      <h2>头像</h2>
      <div class="headportrait-div">
        <img src="./img/4.jpg" alt="">
        <img src="./img/14.png" alt="">
      </div>
    </section>
    <section class="usernamedetail">
      <h2>用户名</h2>
      <div>
        <span>304733908</span>
        <img src="./img/14.png" alt="">
      </div>
    </section>
    <section style="border-bottom: 1px solid #ddd;" class="usernamedetail">
      <h2>收货地址</h2>
      <div>
        <img src="./img/14.png" alt="">
      </div>
    </section>
    <section class="settingtitle">
      <div>账号绑定</div>
    </section>
    <section class="acountbindphone">
      <div>
        <h2><img src="./img/17.png" alt="">手机</h2>
      </div>
      <img src="./img/14.png" alt="">
    </section>
    <section class="settingtitle">
      <div>安全设置</div>
    </section>
    <section style="border-bottom: 1px solid #ddd;" class="usernamedetail">
      <h2>登录密码</h2>
      <div>
        <span>修改</span>
        <img src="./img/14.png" alt="">
      </div>
    </section>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "accountdetail",
    data() {
      return {
        title: "账户信息"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .headportrait {
    margin-top: .4rem;
    padding: .5rem .4rem;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
  }

  .headportrait h2 {
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .profileinfopanel-upload {
    display: block;
    position: absolute;
    opacity: 0;
    top: 2.35rem;
    left: 0;
    width: 100%;
    height: 3.1rem;
  }

  .headportrait-div {
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
  }

  .headportrait-div > img:nth-child(1) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .headportrait-div > img:nth-child(2) {
    width: .7rem;
    vertical-align: middle;
  }

  .usernamedetail {
    height: 1.5rem;
    margin-top: 0;
    padding: .3rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;

    background: #fff;

  }

  .usernamedetail h2 {
    font-size: .6rem;
    color: #333;
    font-weight: 500;
  }

  .usernamedetail > div span {
    text-align: left;
    line-height: 1.39rem;
    font-size: .6rem;
    color: #999;
    margin-right: .2rem;
    font-weight: 100;
  }

  .usernamedetail > div img {
    width: .7rem;
    vertical-align: middle;
  }

  .settingtitle {
    padding: .4rem;
    font-size: .5rem;
    color: #666;
  }
  .acountbindphone{
    margin-top: .4rem;
    padding: .5rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    border-bottom:1px solid #ddd ;
    background: #fff;
  }
  .acountbindphone h2{
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .acountbindphone img{
    width: 1rem;
  }
</style>
