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
        <input type="text" placeholder="账号" v-model="warntxts.usertxt">
        {{warntxts.usertxt}}
      </section>
      <section class="form-input">
        <input :type="this.changeClass? 'text':'password'" placeholder="密码" v-model="warntxts.psdtxt">
        <div class="psd-visible" @click="tran" v-bind:style="this.changeClass?'background:#4cd964':'background:#ccc'">
          <div class="circle_button"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="form-verify">
        <input type="text" placeholder="验证码" v-model="warntxts.verifytxt">
        <div class="verify">
          <img :src="verifyPic" alt="">
          <div class="change-img">
            <p>看不清</p>
            <p @click="exchangephoto">换一张</p>
          </div>
        </div>
      </section>
    </form>
    <p class="login-tip">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login-tip">注册过的用户可凭账号密码登录</p>
    <div class="login-to" @click="warnHide">登录</div>
    <!--弹框-->
    <transition enter-active-class="animated bounceIn">
      <div class="login-warn" v-if="show">
        <img :src="warn" alt="">
        <p>{{warnTxt}}</p>
        <div class="warn-sure" @click="hides">确认</div>
      </div>
    </transition>
    <a href="##" class="replace-psd">重置密码？</a>
  </div>

</template>

<script>
  import back from "../Locations/img/返回 (1).png";
  import warn from "./img/警告.png";
  import Vue from 'vue'

  export default {
    name: "Login",
    data() {
      return {
        back,
        warn,
        show: false,
        changeClass: false,
        verifyPic: null,
        warntxts: {usertxt: '', psdtxt: '', verifytxt: ''},
        warnTxt: '请输入手机号/邮箱/用户名'
      }
    },
    created() {
      let url = "http://cangdu.org:8001/v1/captchas";
      var data = {};
      Vue.postLogin(url, data, res => {
        this.verifyPic = res.code;
      })
    },
    methods: {
      exchangephoto() {
        let url = "http://cangdu.org:8001/v1/captchas";
        var data = {};
        Vue.postLogin(url, data, res => {
          this.verifyPic = res.code;
        })
      },
      tran($event) {
        // $event.currentTarget：绑定事件的标签返回的是一个对象
        var el = $event.currentTarget
        //console.log(el.children[0])
        this.changeClass = !this.changeClass
        if (this.changeClass == false) {
          el.children[0].className = "righttoleft";
        } else {
          el.children[0].className = "lefttoright";
        }

      },
      warnHide() {
        if (this.warntxts.psdtxt == '' && this.warntxts.usertxt != '') {
          this.warnTxt = "请输入密码";
          this.show = true;
          console.log(this.warntxts);
        } else if (this.warntxts.usertxt != '' && this.warntxts.psdtxt != '' && this.warntxts.verifytxt == '') {
          this.warnTxt = "请输入验证码";
          this.show = true;
        } else {
          let url = "http://cangdu.org:8001/v2/login";
          var data = {
            username: this.warntxts.usertxt,
            password: this.warntxts.psdtxt,
            captcha_code: this.warntxts.verifytxt
          };
          console.log(data)
          Vue.postLogin(url, data, res => {
            console.log(res);
            if (res.message) {
              this.show = true;
              this.warnTxt = res.message
              this.exchangephoto()
            } else {
              this.$store.commit("setUserId", data.username)
              this.$store.commit("setUserInfo", res)
              sessionStorage.setItem("user",JSON.stringify(res))
              this.$router.push({name: 'CityList'})
            }
          })
        }

      },
      hides() {
        //console.log("触发隐藏事件");
        if (this.show == true) {
          this.show = false;
        }
      }
    }
  }
</script>

<style scoped>

  input {
    outline: none;
  }

  #login {
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
    height: 2.2rem;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*密码是否可见*/
  .psd-visible {
    width: 2rem;
    height: .7rem;
    border-radius: .5rem;
    position: relative;
  }

  /*文字*/
  .psd-visible span {
    display: block;
    float: left;
    font-size: .45rem;
    color: #fff;
    letter-spacing: 0.04rem;
    margin-left: 0.08rem;
    font-weight: 100;
    line-height: .6rem;
  }

  .psd-visible span:nth-of-type(2) {
    transform: translateY(-0.08rem);
  }

  /*按钮*/
  .psd-visible div:nth-of-type(1) {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    position: absolute;
    top: -.3rem;
    z-index: 1;
    left: -.3rem;
    background-color: #f1f1f1;
    box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, .1);
  }

  .lefttoright {
    transition: all .3s;
    transform: translateX(1.3rem);
  }

  .righttoleft {
    transition: all .3s;
    transform: translateX(0rem);
  }

  /*验证码*/
  .verify {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .verify img {
    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }

  .verify p {
    font-size: .55rem;
    color: #666;
    font-weight: 100;
  }

  .verify p:nth-of-type(2) {
    margin-top: .5rem;
    color: #3b95e9;
  }

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

  /*警告弹框*/
  .login-warn {
    width: 12rem;
    background: white;
    border-radius: .25rem;
    position: absolute;
    top: 29.6%;
    left: 2rem;
    text-align: center;
    padding-top: .6rem;
  }

  .login-warn img:nth-of-type(1) {
    width: 3rem;
    height: 3rem;
  }

  .login-warn p {
    font-size: .7rem;
    color: #333;
    margin: .8rem 0;
    font-weight: 200;
    letter-spacing: 0.02rem;
  }

  .warn-sure {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    padding: .6rem 0;
    border: 1px;
    border-radius: .15rem;
    font-weight: 200;
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
