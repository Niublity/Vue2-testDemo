
<template>
  <div>
      <Header :title="title"></Header>
      <section class="choose-bill">
          <span>不需要开发票</span>
          <img :src="choose" alt="" @click="sure">
      </section>
      <section class="sure-choose">
          <div @click="goBack">确定</div>
      </section>
  </div>
</template>

<script>
import header from "../../../components/foodheader/foodheader";
import sureChoose from "../../personalpage/vipcenter/image/green.png";
import choose from "../img/choose.png";
export default {
    name:"orderBill",
  data () {
    return {
        title:"选择发票抬头",
        choose:choose,
        sureChoose:sureChoose
    };
  },
  components:{
      Header:header
  },
  methods:{
      sure(){
        if ( this.choose==sureChoose) {
            this.choose=choose
        } else{
             this.choose=sureChoose
        }
      },
      goBack(){
          this.$router.push({path:"/orderforgoods"});
      }
  }
}

</script>
<style lang='scss' scoped>
.choose-bill{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    line-height: 2.5rem;
    margin-top: .5rem;
    padding: 0 .7rem;
}
.choose-bill span{
    font-size: .75rem;
    color: #333;
}
.sure-choose{
    margin-top: .5rem;
}
.choose-bill img{
    width: 0.8rem;
    height: 0.8rem;
}
</style>