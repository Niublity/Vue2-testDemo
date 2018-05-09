<template>
  <div>
    <Header :title="title"></Header>
    <section id="setusername1">
      <section class="setusername">
        <input type="text" placeholder="请输入用户名" v-model="username" :class="justify?'normal':'warninput'">
        <p  :class="[justify?'normal':'warn']">用户名只能修改一次（5-24字符之间）</p>
      </section>
      <section>
        <div class="sure-set">
          <button class="sureset-btn">确认修改</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "setusername",
    data() {
      return {
        title: "修改用户名",
        username: "",
      }
    },
    computed:{
      justify() {
        if (this.username==''){
          return true
        } else {
          return this.username.search(/^[\w\W]{5,24}$/i) + 1;
        }
      }
    },
    components: {
      Header: header
    }
  }
</script>
<style>

</style>
<style scoped>

  #setusername1 {
    width: 15.2rem;
    margin: 0 auto;
  }

  .setusername {
    padding-top: .4rem;
  }

  .setusername input {
    width: 15.2rem;
    background: none;
    border: 1px solid #ddd;
    padding: .2rem .1rem;
    border-radius: 2px;
    font-size: .7rem;
    line-height: 1.2rem;
    box-sizing: border-box;
    font-weight: 100;
    outline: none;
  }

  .normal {
    color: #666;
  }

  .warn {
    color: #ea3106 ;
  }

  .normal:focus {
    border-color: #ddd;
  }

  .warninput:focus {
    border-color: #ea3106;

  }

  .setusername p {
    font-size: .4rem;
    padding: .4rem 0 1rem;
    font-weight: 100;
  }

  .sureset-btn {
    width: 100%;
    display: block;
    font-size: .7rem;
    color: #fff;
    line-height: 2rem;
    text-align: center;
    font-weight: 200;
    opacity: 0.6;
    background: none;
    outline: none;
  }

  .sure-set {
    width: 100%;
    background: #3199e8;
  }
</style>
