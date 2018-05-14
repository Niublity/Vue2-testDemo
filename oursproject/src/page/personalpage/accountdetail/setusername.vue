<template>
  <div>
    <Header :title="title"></Header>
    <section id="setusername1">
      <section class="setusername">
        <input type="text" placeholder="请输入用户名" v-model="username" :class="justify?'normal':'warninput'" ref="redInput">
        <p :class="[justify?'normal':'warn']" ref="red">用户名只能修改一次（5-24字符之间）</p>
      </section>
      <section>
        <div class="sure-set">
          <button class="sureset-btn" @click="emptyJudge">确认修改</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "setusername",
    data() {
      return {
        title: "修改用户名",
        username: "",
      }
    },
    methods: {
      emptyJudge() {
        if (this.username == "") {
          this.$refs.red.className = "warn"
          this.$refs.redInput.className = "warninput"
        }
        // else {
        //   this.$refs.red.style.color = ""
        //   this.$refs.redInput.style.borderColor = ""
        // }
      }

    },
    computed: {
      justify() {
        if (this.username == '') {
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
    color: #666 !important;
  }

  .warn {
    color: #ea3106;
  }

  .normal{
    border-color: #ddd !important;
  }

  .warninput {
    border-color: #ea3106 !important;
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
