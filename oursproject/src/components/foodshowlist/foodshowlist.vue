<template>
  <div class="select_top">
    <div class="select_menu">
      <div @click="listmenuleft">
        <span>准时到达</span><img src="./img/1.png" alt="">
        <div class="listmenu_left">
          <transition name="el-zoom-in-top">
            <div v-show="listmenuleftshow" class="transition-box">
              <ul class="leftshowulL">
                <li>
                  <div>异国料理</div>
                  <div><span>471</span></div>
                </li>
              </ul>
              <ul class="leftshowulR"></ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="borderline"><span>排序</span><img src="./img/1.png" alt=""></div>
      <div><span>筛选</span><img src="./img/1.png" alt=""></div>
    </div>
    <ul class="goodslist">
      <li>
        <div class="goodslist_left">
          <img src="./img/2.jpeg" alt="">
        </div>
        <div class="goodslist_right">
          <div class="goodslist_right_first">
            <div><span>品牌</span><span>黄焖鸡米饭</span></div>
            <div><span>保准票</span></div>
          </div>
          <div class="goodslist_right_second">
            <div class="ratescore">
              <el-rate
                v-model="score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <span>月销售106单</span>
            </div>
            <div>
              <div class="trs">蜂鸟转送</div>
              <div class="ontime">准时达</div>
            </div>
          </div>
          <div class="goodslist_right_third">
            <div>
              <span>￥20起送</span>
              <span>/</span>
              <span>配送费约￥5</span>
            </div>
            <div>
              <span>1453.8公里</span>
              <span>/</span>
              <span class="trstime">1小时5分钟</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "foodshowlist",
    data() {
      return {
        listmenuleftshow: false,
        score: 3.7
      }
    },
    methods: {
      listmenuleft() {
        console.log("asdasd")
        this.listmenuleftshow = !this.listmenuleftshow
      }
    }
  }
</script>
<style>
  .ratescore .el-rate {
    /*height: 0.4rem;*/
  }

  .ratescore .el-rate span i {
    font-size: .4rem;
    margin-right: 0rem;
  }

  .ratescore .el-rate .el-rate__text {
    font-size: .4rem;
  }
</style>
<style scoped>
  .select_menu {
    padding-top: .3rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .select_menu span {
    font-size: .55rem;
  }

  .select_menu div {
    width: 33.3%;
  }

  .borderline {
    border-right: .025rem solid #e4e4e4;
    border-left: .025rem solid #e4e4e4;

  }

  .select_menu img {
    width: 0.5rem;
    height: 0.5rem;
    margin-left: .3rem;

  }

  .goodslist {
    padding-bottom: 1.95rem;
  }

  .goodslist li {
    padding: .7rem .4rem;
    display: flex;
    justify-content: space-between;
  }

  /*.goodslist li div{*/
  /*padding: .7rem .4rem;*/

  /*}*/
  .goodslist_left img {
    width: 2.7rem;
    height: 2.7rem;
    display: block;
    margin-right: .4rem;
  }

  .goodslist_right {
    width: 12.1rem;
  }

  .goodslist_right_first {
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 700;
    font-stretch: normal;
    font-size: 0.65rem;
    line-height: 0.65rem;
    font-family: PingFangSC-Regular;
  }

  .goodslist_right_second {
    /*width: 100%;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ratescore {
    margin-top: .52rem;
    display: flex;
    align-items: center;
  }

  .ratescore span {
    font-size: 0.4rem;
    vertical-align: baseline;
    color: #666;
    transform: scale(.8)
  }

  .goodslist_right_second > div:nth-child(2) {
    margin-top: .52rem;
    display: flex;
    /*transform: scale(.8);*/
    font-size: .4rem;
  }

  .trs {
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
  }

  .ontime {
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
    color: #3190e8;
    border: .025rem solid #3190e8;
  }

  .goodslist_right_third {
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    margin-top: .52rem;
    color: #999;
  }

  .trstime {
    color: #3190e8;
  }

  .listmenu_left {
    position: absolute;
  }
  .transition-box{

    display: flex;
  }
  .leftshowulL{
    /*width: 50%;*/
  }
</style>
