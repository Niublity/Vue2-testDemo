<template>
  <div>
    <Header :title="title"></Header>
    <section class="headportrait">
      <input type="file" class="profileinfopanel-upload">
      <h2>头像</h2>
      <div class="headportrait-div">
        <img src="../img/4.jpg" alt="">
        <img src="../img/14.png" alt="">
      </div>
    </section>
    <router-link to="/accountdetail/setusername">
      <section class="usernamedetail">
        <h2>用户名</h2>
        <div>
          <span>304733908</span>
          <img src="../img/14.png" alt="">
        </div>
      </section>
    </router-link>
    <router-link to="/accountdetail/editaddress">
      <section style="border-bottom: 1px solid #ddd;" class="usernamedetail">
        <h2>收货地址</h2>
        <div>
          <img src="../img/14.png" alt="">
        </div>
      </section>
    </router-link>
    <section class="settingtitle">
      <div>账号绑定</div>
    </section>
    <section class="acountbindphone" @click="show=!show">
      <div>
        <h2><img src="../img/17.png" alt="">手机</h2>
      </div>
      <img src="../img/14.png" alt="">
    </section>
    <section class="settingtitle">
      <div>安全设置</div>
    </section>
    <section style="border-bottom: 1px solid #ddd;" class="usernamedetail">
      <h2>登录密码</h2>
      <div>
        <span>修改</span>
        <img src="../img/14.png" alt="">
      </div>
    </section>
    <!--请在手机App中设置-->
    <transition enter-active-class="animated bounceIn">
      <section class="telephone-warn" v-if="show">
        <img src="../../../components/User/img/警告.png" alt="">
        <p>请在手机APP中设置</p>
        <div class="warn-sure" @click="hides">确认</div>
      </section>
    </transition>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <router-view class="positions11"></router-view>
    </transition>
  </div>

</template>

<script>
  import header from "../../../components/foodheader/foodheader"
  export default {
    name: "accountdetail",
    data() {
      return {
        title: "账户信息",
        show:false
      }
    },
    methods:{
      hides(){
        if (this.show==true){
          this.show=false
        }
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .positions11{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: #f2f2f2;
}
.animated {
  -webkit-animation-duration: .5s;
}

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

.acountbindphone {
  margin-top: .4rem;
  padding: .5rem .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.acountbindphone h2 {
  font-size: .6rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.acountbindphone img {
  width: 1rem;
}
  /*请在手机APP中设置弹框*/
  /*警告弹框*/
  .telephone-warn {
    width: 12rem;
    background: white;
    border-radius: .25rem;
    position: absolute;
    top: 29.6%;
    left: 2rem;
    text-align: center;
    padding-top: .6rem;
  }

  .telephone-warn img:nth-of-type(1) {
    width: 3rem;
    height: 3rem;
  }

  .telephone-warn p {
    font-size: .7rem;
    color: #333;
    margin: .8rem 0;
    font-weight: 200;
    letter-spacing: 0.02rem;
  }

  .warn-sure {
    background-color: #4cd964;
    font-size: .8rem;
    color: #fff;
    padding: .6rem 0;
    border: 1px;
    border-radius: .15rem;
    font-weight: 200;
  }

</style>
