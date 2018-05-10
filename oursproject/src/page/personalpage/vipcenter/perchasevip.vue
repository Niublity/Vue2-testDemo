<template>
  <div>
    <Header :title="title"></Header>
    <section class="show-time">
      <p class="time-last">支付剩余时间</p>
      <p class="time">
        <span style="display: inline-block">00</span>
        <span>:</span>
        <span class="minute">{{minute}}</span>
        <span>:</span>
        <span class="second">{{second}}</span>
      </p>
    </section>
    <p class="pay-way">选择支付方式</p>
    <section class="pay-list">
      <section class="pay-item-container">
        <div class="pay-item">
          <img src="./image/zhifubao.png" alt="">
          <span>支付宝</span>
        </div>
        <input type="radio" name="pay" class="radio">
      </section>
      <section class="pay-item-container">
        <div class="pay-item">
          <img src="./image/weixin.png" alt="">
          <span>微信</span>
        </div>
        <input type="radio" name="pay" class="radio">
      </section>
    </section>
    <div class="determine" @click="show=!show">确认支付</div>
    <div class="vipwarn-container">
      <transition enter-active-class="animated bounceIn">
        <div class="warn" v-if="show">
          <img src="../../../components/User/img/警告.png" alt="">
          <p>{{warnText}}</p>
          <div class="warn-sure" @click="show=!show">确认</div>
        </div>
      </transition>
    </div>
    <!--<div class="vipwarn-container">-->
      <!--<transition enter-active-class="animated bounceIn">-->
        <!--<div class="warn" v-if="payOvertime.show">-->
          <!--<img src="../../../components/User/img/警告.png" alt="">-->
          <!--<p>{{payOvertime.text}}</p>-->
          <!--<div class="warn-sure" @click="payOvertime.show=!payOvertime.show">确认</div>-->
        <!--</div>-->
      <!--</transition>-->
    <!--</div>-->
    <!--<Jumpkuang :warnText="warnText"></Jumpkuang>-->
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"
// import jumpkuang from "../../../components/jumpkuangkuang/jumpkuang";
  export default {
    name: "perchasevip",
    data() {
      return {
        title: "在线支付",
        minute: "15",
        second: "00",
        timer:null,
        warnText:"当前环境无法支付，请打开官方APP进行付款",
        sure:"确认" ,
        show:false,
        payOvertime:{text:"支付超时",show:false}
      }
    },
    components: {
      Header: header,
      // Jumpkuang: jumpkuang
    },
    mounted() {
      var minute = 14;
      var second = 60;
      this.timer = setInterval(()=>{
        if (second == '00') {
          second = 59;
          minute--;
          if (minute<10){
            minute="0"+minute
          }
        }second--;
        if (second<10){
          second="0"+second
        }
        if (minute=='00'&&second=='00') {
          clearInterval(this.timer)
          this.payOvertime.show=true
        }
        this.minute=minute
        this.second=second
      }, 1000);
    }

  }
</script>

<style scoped>
  /*单选框*/
  /*input[type='radio'].radio {*/
    /*opacity:0;*/
    /*display:inline-block;*/
    /*height:20px;*/
  /*}*/
  /*input[type='radio'].radio:checked + .radio {*/
    /*background:url('./image/weixin.png') no-repeat;*/
  /*}*/
  /*input*/
  /*弹框*/
  .vipwarn-container{
    /*position: relative;*/
  }
  .warn {
    width: 12rem;
    background: white;
    border-radius: .25rem;
    position: fixed;
    left: 2rem;
    top: 28%;
    text-align: center;
    padding-top: .6rem;
  }

  .warn img:nth-of-type(1) {
    width: 3rem;
    height: 3rem;
  }

  .warn p {
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

  /*时间*/
  .second,.minute {
    display: inline-block;
    width: 2rem;
    /*letter-spacing: ;*/
  }

  .show-time {
    background: #fff;
    padding: .7rem;
    text-align: center;
  }

  .time-last {
    font-size: .6rem;
    color: #666;
    margin-top: 1rem;
    margin-bottom: .6rem;
    font-weight: 200;
  }

  .time {
    font-size: 1.5rem;
    color: #333;
    margin: .3rem 0 1rem;
    display: flex;
    justify-content: center;
  }
  .time span:nth-of-type(2),.time span:nth-of-type(4){
    margin: 0 .4rem;
    line-height: 1.3rem;
  }

  .pay-way {
    background: #f1f1f1;
    padding: 0 .7rem;
    font-size: .7rem;
    color: #666;
    line-height: 1.8rem;
  }

  .pay-list {
    background: #fff;
    position: relative;
  }

  .pay-item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .025rem solid #f5f5f5;
    padding: .4rem .7rem;
    line-height: 2.6rem;
  }

  .pay-list .pay-item {
    display: flex;
    align-items: center;
  }

  .pay-list .pay-item img {
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
  }

  .pay-list .pay-item span {
    font-size: .7rem;
    color: #666;
    font-weight: 200;
  }

  .determine {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: .5rem .7rem 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    font-weight: 300;
  }
</style>
