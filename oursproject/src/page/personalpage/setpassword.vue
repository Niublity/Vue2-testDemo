<template>
  <div>
    <Header :title="title"></Header>
    <form class="restForm">
      <section class="input_container phone_number"><input placeholder="账号" type="text"  v-model="userInfo.acount"></section>
      <section class="input_container"><input placeholder="旧密码" type="text" v-model="userInfo.oldpsd"></section>
      <section class="input_container"><input placeholder="请输入新密码" type="text" v-model="userInfo.newpsd"></section>
      <section class="input_container"><input placeholder="请确认密码" type="text" v-model="userInfo.checkpsd"></section>
      <section class="input_container">
        <input placeholder="验证码" v-model="userInfo.verify" type="text">
        <div class="verify">
          <img :src="verifyPic" alt="">
          <div class="change-img">
            <p>看不清</p>
            <p @click="exchangephoto">换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="sub">确认修改</div>
    <transition enter-active-class="animated bounceIn">
      <Warn class="warn" :warnText="warnText"></Warn>
    </transition>
  </div>
</template>

<script>
  import Vue from "vue"
  import header from "../../components/foodheader/foodheader"
  import warn from  "@/components/jumpkuangkuang/jumpkuang"
  export default {
    name: "setpassword",
    data() {
      return {
        title: "修改密码",
        userInfo: {
          acount:"",
          oldpsd:"",
          newpsd:"",
          checkpsd:"",
          verify:""
        },
        verifyPic:"",
        warnText:"输入有误"
      }
    },
    components: {
      Header: header,
      Warn:warn
    },
    created(){
      let url = "http://cangdu.org:8001/v1/captchas";
      var data = {};
      Vue.postLogin(url, data, res => {
        this.verifyPic = res.code;
      })
    },
    methods:{
      exchangephoto() {
        let url = "http://cangdu.org:8001/v1/captchas";
        var data = {};
        Vue.postLogin(url, data, res => {
          this.verifyPic = res.code;
        })
      },
      sub(){
        if(this.userInfo.newpsd==this.userInfo.checkpsd){
          let url="http://cangdu.org:8001/v2/changepassword"
          var data = {
            username:this.userInfo.acount,
            oldpassWord:this.userInfo.oldpsd,
            newpassword:this.userInfo.newpsd,
            confirmpassword:this.userInfo.checkpsd,
            captcha_code:this.userInfo.verify
          };
          Vue.postLogin(url, data, res => {
            console.log(res)

          })
        }
      }

    }
  }
</script>

<style scoped>
  .restForm{
    background-color: #fff;
    margin-top: .6rem;
    display: block;
  }
  .phone_number{
    padding: .3rem .8rem
  }
  .input_container {
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .input_container input{
    font-size: .7rem;
    color: #666;
  }
  .login_container{
    margin: 1rem .5rem;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
  }
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
  .warn{
    position: fixed;
    top: 45%;
  }
</style>
