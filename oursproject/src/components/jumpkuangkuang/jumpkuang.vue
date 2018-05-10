<template>
  <div>
    <transition enter-active-class="animated bounceIn">
        <div class="warn" v-if="show" >
          <img :src="warn" alt="">
          <p>{{warnText}}</p>
          <div class="warn-sure">{{sure}}</div>
        </div>
    </transition>
  </div>
</template>

<script>
  import warn from "../User/img/警告.png";

  export default {
    name: "jumpkuang",
    props: ["warnText", "sure", 'show'],
    data() {
      return {
        warn,
      }
    },
    // methods:{
    //   hides(){
    //     this.show=false
    //   }
    // }

  }
</script>

<style scoped>
  .warn {
    width: 12rem;
    background: white;
    border-radius: .25rem;
    position: fixed;
    left: 2rem;
    top: 26.4%;
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

</style>
