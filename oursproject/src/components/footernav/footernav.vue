<template>
  <div class="footer">
    <div class="footer_nav">
      <router-link class="footer_link" to="/home" @click.native="jumppage(1)">
        <img :src="this.icoone?this.img.one:this.img.onea" alt="">
        <span>外卖</span>
      </router-link>
      <router-link class="footer_link" to="/search" @click.native="jumppage(2)">
        <img :src="this.icotwo?this.img.two:this.img.twoa" alt="">
        <span>搜索</span>
      </router-link>
      <router-link class="footer_link" to="/order" @click.native="jumppage(3)">
        <img :src="this.icothree?this.img.three:this.img.threea" alt="">
        <span>订单</span>
      </router-link>
      <router-link class="footer_link" to="/personal" @click.native="jumppage(4)">
        <img :src="this.icofour?this.img.four:this.img.foura" alt="">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import one from "./img/1.png"
  import onea from "./img/1.1.png"
  import two from "./img/2.png"
  import twoa from "./img/2.2.png"
  import three from "./img/3.png"
  import threea from "./img/3.1.png"
  import four from "./img/4.png"
  import foura from "./img/4.1.png"


  export default {
    name: "footernav",
    data() {
      return {
        img: {
          one,
          onea,
          two,
          twoa,
          three,
          threea,
          four,
          foura
        },
        icoone: false,
        icotwo: false,
        icothree: false,
        icofour: false
      }
    },
    methods: {
      jumppage(index) {
        switch (index) {
          case 1:
            this.icoone = true;
            this.icotwo = false;
            this.icothree = false;
            this.icofour = false;
            console.log(this.icoone)
            break;
          case 2:
            console.log("2a")
            this.icoone = false;
            this.icotwo = true;
            this.icothree = false;
            this.icofour = false;
            break;
          case 3 :

            this.icoone = false;
            this.icotwo = false;
            this.icothree = true;
            this.icofour = false;
            console.log(this.icothree)
            break;
          case 4:
            console.log("4a")
            this.icoone = false;
            this.icotwo = false;
            this.icothree = false;
            this.icofour = true;
            console.log(this.icofour)
            break;
          default:
            break;
        }
      }
    }

  }
</script>

<style scoped>
  .footer {
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
  }

  .footer_nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.95rem;
    background-color: #fff;

  }

  .footer_link {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

  }

  .footer_link img {
    width: .8rem;
    height: .8rem;
  }

  .footer_link span {
    font-size: .45rem;
    color: #666;
    font-weight: 400;
    line-height: .8rem;
  }
</style>
