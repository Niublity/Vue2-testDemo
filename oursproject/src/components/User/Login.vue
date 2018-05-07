<template>
  <div id="login">
    <div class="login">
      <router-link to="/CityList">
        <img :src="back" alt="" class="arrow-left">
      </router-link>
      <span class="login-title">密码登录</span>
    </div>
    <form class="lform">
      <section class="form-input">
        <input type="text" placeholder="账号">
      </section>
      <section class="form-input">
        <input type="password" placeholder="密码">
        <div class="psd-visible">
          <div class="circle_button"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="form-verify">
        <input type="text" placeholder="验证码">
        <div class="verify">
        </div>
      </section>
    </form>
    <p class="login-tip">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login-tip">注册过的用户可凭账号密码登录</p>
    <div class="login-to">登录</div>
    <a href="##" class="replace-psd">重置密码？</a>
  </div>
</template>

<script>
  import back from "../Locations/img/返回 (1).png";

  export default {
    name: "Login",
    data() {
      return {
        back,
        value1: true,
        value2: true
      }
    }
  }
</script>

<style scoped>
  #login{
    box-sizing: border-box;
  }
  /*头部*/
  .login {
    width: 100%;
    height: 1.97rem;
    background: #3190e8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .4rem;
    box-sizing: border-box;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
  }

  .login a {
    display: inline-block;
    width: 7%;
  }

  .login .arrow-left {
    width: 1rem;
    height: 1rem;
  }

  .login-title {
    display: inline-block;
    width: 93%;
    font-size: .8rem;
    color: #fff;
    font-weight: 200;
    text-align: center;
  }

  /*form表单*/
  #login .lform {
    background: white;
    margin-top: .6rem;
  }

  .lform .form-input input, .form-verify input {
    font-size: .7rem;
    color: #666;
    font-weight: 100;
  }

  .lform .form-input, .form-verify {
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
  }

  /*密码是否可见*/
  .psd-visible{
    width: 2rem;
    height: .7rem;
    background-color: #ccc;
    border-radius: .5rem;
  }
  /*文字*/
  .psd-visible span{
    display: block;
    float: left;
    font-size: .45rem;
    color: #fff;
    letter-spacing: 0.04rem;
    margin-left: 0.08rem;
    font-weight: 100;
     line-height: .6rem;
  }
  .psd-visible span:nth-of-type(2){
    transform: translateY(-0.08rem);
  }
  /*按钮*/

  /*温馨提示*/
  .login-tip {
    font-size: .5rem;
    color: red;
    padding: .4rem .6rem;
  }

  /*登录*/
  .login-to {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    padding: .6rem 0;
    border: 1px;
    border-radius: .15rem;
    font-weight: 100;
    text-align: center;
    margin: 0 .5rem 1rem;
  }

  /*重置密码*/
  .replace-psd {
    display: block;
    text-align: right;
    font-size: .6rem;
    font-weight: 100;
    color: #3b95e9;
    padding-right: .3rem;
  }
</style>
