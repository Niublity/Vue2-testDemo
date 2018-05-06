<template>
  <div class="select_top">
    <div class="select_body">
      <div class="select_menu">
        <div @click="listmenuleft">
          <span :style="[listmenuleftshow?{color:'#3190e8'}:{color:'#333'}]">{{title}}</span>
          <img src="./img/1.png" alt="" :class="[listmenuleftshow?'rotatetriangleA':'rotatetriangleB']">
        </div>
        <div @click="listmenucenter" class="borderline">
          <span :style="[listmenucentershow?{color:'#3190e8'}:{color:'#333'}]">排序</span>
          <img src="./img/1.png" alt="" :class="[listmenucentershow?'rotatetriangleA':'rotatetriangleB']">
        </div>
        <div @click="listmenuright">
          <span :style="[listmenurightshow?{color:'#3190e8'}:{color:'#333'}]">筛选</span>
          <img src="./img/1.png" alt="" :class="[listmenurightshow?'rotatetriangleA':'rotatetriangleB']">
        </div>
      </div>
      <transition name="el-zoom-in-top">
        <div v-show="listmenuleftshow" class="transition-box transition-box_1">
          <div class="leftshowulL">
            <ul>
              <li v-for="value in listdatamenu" @click="detail(value)">
                <div><img :src="value.image_url" alt=""><span>{{value.name}}</span></div>
                <div><span>{{value.count}}</span><img src="./img/4.png" alt=""></div>
              </li>
            </ul>
          </div>
          <div class="leftshowulR">
            <ul class="leftshowulR_inner">
              <li v-for="details in detaillist"><span>{{details.name}}</span><span>{{details.count}}</span></li>
            </ul>
          </div>
        </div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="listmenucentershow" class="transition-box transition-box_2">
          <ul>
            <li @click.self="rightmark=!rightmark">
              <img src="./img/5.png" alt="">
              <p>
                智能排序
                <img v-show="rightmark" src="./img/11.png" alt="">
              </p>
            </li>
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
    <Goodslist class="Goodslist"></Goodslist>
    <div v-bind:class="{covermask:iscovermask}"></div>
  </div>
</template>
<script>
  import goodslist from "@/components/goodslist/goodslist"

  export default {
    name: "foodshowlist",
    data() {
      return {
        title: "准时达",
        listmenuleftshow: false,
        listmenucentershow: false,
        listmenurightshow: false,
        rightmark: false,
        iscovermask: false,
        listdatamenu: "",
        detaillist: ""

      }
    },
    components: {
      Goodslist: goodslist
    },
    created() {
      let api = "http://cangdu.org:8001/shopping/v2/restaurant/category"
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.listdatamenu = response.data
      })
    },
    methods: {
      listmenuleft() {
        if (this.listmenuleftshow) {
          this.title = "准时达"
        }
        else {
          this.title = "分类"
        }
        this.listmenuleftshow = !this.listmenuleftshow
        this.listmenucentershow = false
        this.listmenurightshow = false
        this.iscovermask = true
        if (this.listmenuleftshow) {
          this.iscovermask = true
        }
        else {
          this.iscovermask = false
        }

      },
      listmenucenter() {
        this.listmenucentershow = !this.listmenucentershow
        this.listmenuleftshow = false
        this.listmenurightshow = false
        if (this.listmenucentershow) {
          this.iscovermask = true
        }
        else {
          this.iscovermask = false
        }
      },
      listmenuright() {
        this.listmenurightshow = !this.listmenurightshow
        this.listmenucentershow = false
        this.listmenuleftshow = false
        this.iscovermask = true
        if (this.listmenurightshow) {
          this.iscovermask = true
        }
        else {
          this.iscovermask = false
        }
      },
      detail(x) {
        this.detaillist = x.sub_categories
      }
    }
  }
</script>
<style>

</style>
<style scoped>
  /*最外层div*/
  .select_top {
    position: relative;
  }

  /*最大选择框*/
  .select_body {
    position: fixed;
    top: 1.95rem;
    left: 0;
    right: 0;
    z-index: 100;
  }

  /*下拉菜单选项部分*/
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
    width: 0.6rem;
    height: 0.6rem;
    margin-left: .3rem;

  }

  /*激发状态三角形动画*/
  .rotatetriangleA {
    transform: rotateZ(180deg);
    transition: all .3s;
  }

  .rotatetriangleB {
    transform: rotateZ(0deg);
    transition: all .3s;
  }

  /*第一部分下拉菜单动画*/
  .transition-box_1 {
    position: fixed;
    left: 0;
    top: 3.3rem;
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

  .leftshowulL li:hover {
    background-color: white;
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
    height: 16.2rem;
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

  /*第二部分下拉菜单动画*/
  .transition-box_2 {
    position: fixed;
    left: 0;
    top: 3.3rem;
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

  .transition-box_2 ul li > img {
    width: .7rem;
    height: .7rem;
    margin: 0 .3rem 0 .8rem;
  }

  .transition-box_2 ul li p {
    width: 14.2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .025rem solid #e4e4e4;
  }

  .transition-box_2 ul li p img {
    width: .7rem;
    height: .4315rem;
    margin-right: .8rem;
  }

  /*第三部分下拉菜单动画*/
  .transition-box_3 {
    position: fixed;
    left: 0;
    top: 3.3rem;
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
  .Goodslist {
    margin-top: 3.5rem;
    padding-bottom: 1.95rem;
  }

  /*黑色蒙版*/
  .covermask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
