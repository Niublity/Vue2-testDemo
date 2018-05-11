<template>
  <div class="goodslistbody">
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
    name: "goodslist",
    data() {
      return {
        score: 3.7,
        Infor:[]
      }
    },
    created(){

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
  .goodslist {
    /*margin-top: 3.5rem;*/
    padding-bottom: 1.95rem;
  }

  .goodslist li {
    padding: .7rem .4rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }

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
</style>
