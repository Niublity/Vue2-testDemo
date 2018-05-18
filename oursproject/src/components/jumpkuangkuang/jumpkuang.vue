<template>
  <div>

      <div class="warn">
        <img :src="warn" alt="">
        <p>{{warnText}}</p>
        <div class="warn-sure" @click="hide111">确认</div>
      </div>

  </div>
</template>

<script>
import warn from "../User/img/警告.png";

export default {
    name: "jumpkuang",
    props: ["warnText"],
    data() {
        // alert(this.show)
        return {
            warn
        };
    },
    created() {
        // console.log(qwe);
        // this.qwe = this._props.show;
    },
    methods: {
      hide111(){
         this.$emit("hide123")
      }
    },
    computed: {
    }
};
</script>

<style scoped>
.warn {
    width: 12rem;
    background: white;
    border-radius: 0.25rem;
    text-align: center;
    padding-top: 0.6rem;
}

.warn img:nth-of-type(1) {
    width: 3rem;
    height: 3rem;
}

.warn p {
    font-size: 0.7rem;
    color: #333;
    margin: 0.8rem 0;
    font-weight: 200;
    letter-spacing: 0.02rem;
}

.warn-sure {
    background-color: #4cd964;
    font-size: 0.7rem;
    color: #fff;
    padding: 0.6rem 0;
    border: 1px;
    border-radius: 0.15rem;
    font-weight: 200;
}
</style>
