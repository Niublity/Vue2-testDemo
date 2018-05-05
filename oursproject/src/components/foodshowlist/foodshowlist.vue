<template>
  <div class="select_top">
    <div class="select_body">
      <div class="select_menu">
        <div @click="listmenuleft"><span>{{title}}</span><img src="./img/1.png" alt=""></div>
        <div @click="listmenucenter" class="borderline"><span>排序</span><img src="./img/1.png" alt=""></div>
        <div @click="listmenuright"><span>筛选</span><img src="./img/1.png" alt=""></div>
      </div>
      <transition name="el-zoom-in-top">
        <div v-show="listmenuleftshow" class="transition-box transition-box_1">
          <div class="leftshowulL">
            <div>
              <div>异国料理</div>
              <div><span>471</span></div>
            </div>
            <ul>
              <li>
                <div><img src="./img/3.1.png" alt=""><span>快餐便当</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.2.png" alt=""><span>小吃夜宵</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.3.png" alt=""><span>果蔬生鲜</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.4.png" alt=""><span>特色菜系</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.5.png" alt=""><span>商店超市</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.6.png" alt=""><span>鲜花蛋糕</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.7.png" alt=""><span>全部商家</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
              <li>
                <div><img src="./img/3.8.png" alt=""><span>甜品饮品</span></div>
                <div><span>383</span><img src="./img/4.png" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="leftshowulR">
            <ul class="leftshowulR_inner">
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
              <li><span>简餐</span><span>355</span></li>
            </ul>
          </div>
        </div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="listmenucentershow" class="transition-box transition-box_2">
          <ul>
            <li><img src="./img/5.png" alt="">
              <p>智能排序</p></li>
            <li><img src="./img/6.png" alt="">
              <p>距离最近</p></li>
            <li><img src="./img/9.png" alt="">
              <p>销量最高</p></li>
            <li><img src="./img/8.png" alt="">
              <p>起送价最低</p></li>
            <li><img src="./img/7.png" alt="">
              <p>配送速度更快</p></li>
            <li><img src="./img/10.png" alt="">
              <p>评分最高</p></li>
          </ul>
        </div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="listmenurightshow" class="transition-box transition-box_3">
          <div>
            <p>配送方式</p>
            <div><img src="./img/5.png" alt=""><span>蜂鸟专送</span></div>
          </div>
          <div>
            <p>商家属性（可以多选）</p>
            <ul>
              <li><span>品</span><span>品牌商家</span></li>
              <li><span>保</span><span>外卖保</span></li>
              <li><span>准</span><span>准时达</span></li>
              <li><span>新</span><span>新店</span></li>
              <li><span>付</span><span>在线支付</span></li>
              <li><span>票</span><span>开发票</span></li>
            </ul>
          </div>
          <div>
            <div>清空</div>
            <div>确定</div>
          </div>
        </div>
      </transition>
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
        title:"准时达",
        listmenuleftshow: false,
        listmenucentershow: false,
        listmenurightshow: false,
        score: 3.7
      }
    },
    methods: {
      listmenuleft() {
        this.listmenuleftshow = !this.listmenuleftshow
        this.listmenucentershow = false
        this.listmenurightshow = false
      },
      listmenucenter() {
        this.listmenucentershow = !this.listmenucentershow
        this.listmenuleftshow = false
        this.listmenurightshow = false
      },
      listmenuright() {
        this.listmenurightshow = !this.listmenurightshow
        this.listmenucentershow = false
        this.listmenuleftshow = false
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
    border-bottom: .025rem solid #f1f1f1;
    padding-bottom: .4rem;
    background-color: white;
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

  .select_body {
    position: relative;
  }

  .transition-box_1 {
    position: absolute;
    left: 0;
    display: flex;
    width: 100%;
    z-index: 3;
  }

  .leftshowulL {
    background-color: #f5f5f5;
    width: 50%;
    font-size: .5rem;
    color: #666;
    line-height: 1.8rem;
  }

  .leftshowulL > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    height: 1.8rem;
  }

  .leftshowulL > div span {
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    vertical-align: middle;
    margin-right: .25rem;
  }

  .leftshowulL li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    height: 1.8rem;
  }

  .leftshowulL li div:nth-child(1) img {
    width: .8rem;
    /*height: .8rem;*/
    vertical-align: middle;
    margin-right: .2rem;
  }

  .leftshowulL li div:nth-child(2) span {
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    vertical-align: middle;
    margin-right: .25rem;
  }

  .leftshowulL li div:nth-child(2) img {
    width: .7rem;
    vertical-align: middle;
  }

  .leftshowulR {
    background-color: white;
    width: 50%;
    height: 16rem;
    padding-left: .5rem;
    overflow-y: scroll;
  }

  .leftshowulR::-webkit-scrollbar {
    display: none;
  }

  .leftshowulR li {
    display: flex;
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-right: .5rem;
    border-bottom: .025rem solid #e4e4e4;
    font-size: .4rem;
    color: #666;
  }

  .transition-box_2 {
    position: absolute;
    left: 0;
    z-index: 3;
  }

  .transition-box_2 ul {
    background-color: white;
    font-size: .55rem;
    width: 100%;
  }

  .transition-box_2 ul li {
    height: 2.5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  .transition-box_2 ul li img {
    width: .7rem;
    height: .7rem;
    margin: 0 .3rem 0 .8rem;
  }

  .transition-box_2 ul li p {
    width: 14.2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: .025rem solid #e4e4e4;
  }

  .transition-box_3 {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 3;
    background-color: white;
    font-size: .4rem;
    color: #333;
  }

  .transition-box_3 div:nth-child(1) {
    padding-left: .5rem;

  }

  .transition-box_3 div:nth-child(1) p {
    height: 1.5rem;
    line-height: 1.5rem;
  }

  .transition-box_3 div:nth-child(1) img {
    width: .8rem;
    height: .8rem;
    margin-right: .125rem;
  }

  .transition-box_3 div:nth-child(1) div {
    display: flex;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.7rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }

  .transition-box_3 div:nth-child(2) {
    padding-left: .5rem;
  }

  .transition-box_3 div:nth-child(2) p {
    height: 1.5rem;
    line-height: 1.5rem;
  }

  .transition-box_3 div:nth-child(2) ul {
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: wrap;

  }

  .transition-box_3 div:nth-child(2) ul li {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.2rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }

  .transition-box_3 div:nth-child(2) ul li:nth-child(1) span:nth-child(1), .transition-box_3 div:nth-child(2) ul li:nth-child(3) span:nth-child(1) {
    color: rgb(63, 189, 230);
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid rgb(63, 189, 230);
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }

  .transition-box_3 div:nth-child(2) ul li:nth-child(2) span:nth-child(1), .transition-box_3 div:nth-child(2) ul li:nth-child(6) span:nth-child(1) {
    color: rgb(153, 153, 153);
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid rgb(153, 153, 153);
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }

  .transition-box_3 div:nth-child(2) ul li:nth-child(4) span:nth-child(1) {
    color: rgb(232, 132, 45);
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid rgb(232, 132, 45);
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }

  .transition-box_3 div:nth-child(2) ul li:nth-child(5) span:nth-child(1) {
    color: rgb(255, 78, 0);
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid rgb(255, 78, 0);
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }

  .transition-box_3 div:nth-child(3) {
    display: flex;
    background-color: #f1f1f1;
    padding: .3rem .2rem;
  }

  .transition-box_3 div:nth-child(3) div {
    width: 50%;
    height: 1.8rem;
    font-size: .8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    text-align: center;
  }

  .transition-box_3 div:nth-child(3) div:nth-child(1) {
    background-color: #fff;
    margin-right: .5rem;
    border: .025rem solid #fff;
  }

  .transition-box_3 div:nth-child(3) div:nth-child(2) {
    background-color: #56d176;
    color: #fff;
    border: .025rem solid #56d176;
  }
</style>
