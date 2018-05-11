<template>
  <div class="exbody">
    <Header :title="title"></Header>
    <div class="fistline">
      <input type="text" placeholder="请输入兑换码">
    </div>
    <div class="checkmask">
      <input type="text" placeholder="验证码" maxlength="4">
      <div class="checkimg"><img :src=this.code alt="">
        <div><p>看不清</p>
          <p @click="update">换一张</p></div>
      </div>
    </div>
    <div class="submit"><span>兑换</span></div>
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "exchangehongbao",
    data() {
      return {
        title: "兑换红包",
        code: ""
      }
    },
    components: {
      Header: header
    },
    created() {
      this.$http.post("http://cangdu.org:8001/v1/captchas").then((response) => {
        this.code= response.data.code
      })
    },
    methods:{
      update(){
        this.$http.post("http://cangdu.org:8001/v1/captchas").then((response) => {
          this.code= response.data.code
        })
      }
    }
  }
</script>

<style scoped>
  .exbody {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  .fistline {
    margin-top: .7rem;
    padding: 0 .5rem;
  }

  .fistline input {
    box-sizing: border-box;
    width: 100%;
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
  }

  .checkmask {
    height: 2.2rem;
    display: -ms-flexbox;
    display: flex;
    margin-top: .7rem;
    padding: 0 .5rem;
    justify-content: space-between;
  }

  .checkmask input {
    box-sizing: content-box;
    font-size: .7rem;
    color: #666;
    padding: .4rem;
    border-radius: .15rem;
    -ms-flex: 3;
    flex: 3;
  }

  .checkmask p:nth-child(1) {
    font-size: .55rem;
    color: #666;
  }

  .checkmask p:nth-child(2) {
    font-size: .55rem;
    color: #3b95e9;
    margin-top: .2rem;
  }

  .checkimg {
    margin-left: .3rem;
    padding-left: .2rem;
    display: flex;
    /*text-align: center;*/
    align-items: center;
    background-color: white;
  }

  .submit {
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }
</style>
