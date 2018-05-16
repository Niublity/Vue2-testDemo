<template>
  <div class="shopcarbody">
    <transition name="cover">
      <div class="specs-cover" v-show="showChoose" @click="hideShowFoodList"></div>
    </transition>
    <Header class="shopcar_line" :title="title"></Header>
    <!--购物车中心界面-->
    <div class="shopcar_center">
      <!--背景图片-->
      <img :src="'//elm.cangdu.org/img/'+restaurantInfor.image_path" alt="" class="bgimg">
    </div>
    <!--购物车顶端-->
    <div class="shopcar-center-top">
      <div class="showtitle">
        <div class="showtitle-left">
          <img :src="'//elm.cangdu.org/img/'+restaurantInfor.image_path" alt="">
        </div>
        <div class="showtitle-right">
          <div class="right-title"><span>{{restaurantInfor.name}}</span></div>
          <div>
            <p class="distribute-infor"><span>商家配送</span>/<span>分钟送达</span>/<span>配送费￥5</span></p>
          </div>
          <router-link to="/shopcar/businessinfor">
            <p>公告：{{restaurantInfor.promotion_info}}</p></router-link>
        </div>
        <router-link to="/shopcar/businessinfor"><img :src="pic.next" alt="" class="next"></router-link>
      </div>
      <a href="##" class="activity" v-if="restaurantInfor.activities!=''">
        <p class="activity-left" v-for="active in restaurantInfor.activities">
          <span>{{active.icon_name}}</span>
          <span>{{active.description}}(APP专享)</span>
        </p>
        <p class="activity-right">
          <span>1个活动</span>
          <img :src="pic.next" alt="">
        </p>
      </a>
    </div>
    <!--购物车商品评价界面-->
    <div class="wares-evaluate">
      <!--标题-->
      <div class="wares-title">
        <p @click="toWares">
          <span :class="this.showWares? 'focus-wares':'nofocus'">商品</span>
        </p>
        <p @click="toEvaluate">
          <span :class="this.showEvaluate? 'focus-wares':'nofocus'">评价</span>
        </p>
      </div>
      <div class="information">
        <!--商品界面-->
        <div class="wares" v-show="showWares">
          <!--左边分类-->
          <ul class="wares-left">
            <li v-for="(categoty,index) in categotyList" ref="nav" class="left-li"
                @click="foodclass(index,$event)">
              <img v-if="categoty.icon_url!=''"
                   :src="'https://fuss10.elemecdn.com/'+publicfunction.dealarray(categoty.icon_url)" alt=""
                   class="sales-logo">
              <span :href="'#'+categoty.name">{{categoty.name}}</span>
              <span id="countred" v-if="countss[index]"
                    v-show="countss[index].showCounts">{{countss[index].count}}</span>
            </li>
          </ul>
          <!--商品详情-->
          <ul class="wares-right" ref="aaa">
            <!--第一层循环创建  分类-->
            <li v-for="(cate,index) in categotyList" :ref="'a'+index">
              <!--标题-->
              <header style="background:#f5f5f5;" class="wares-header" @click="handleScroll(index,$event)">
                <section class="waresfood-title">
                  <h4>{{cate.name}}</h4> <span>{{cate.description}}</span>
                </section>
                <span class="title-infor">...</span>

              </header>
              <!--内容  第二层循环 食物具体信息-->
              <section class="waresr-list" v-for="(food,indextwo) in cate.foods">
                <img :src="'https://elm.cangdu.org/img/'+food.image_path" alt="" class="food-img">
                <!--食品描述：右-->
                <div class="food-describe">
                  <h3 class="food-describe-head">
                    <strong>{{food.name}}</strong>
                    <div class="food-detail" v-if="food.attributes.length!=0">
                      <div v-for="newfood in food.attributes">{{newfood.icon_name}}</div>
                    </div>
                  </h3>
                  <p class="food-describe-content">{{food.description}}</p>
                  <p class="food-describe-rating">月售{{food.month_sales}}份，好评率{{food.satisfy_rate}}%</p>
                  <p v-if="food.activity" class="activityp">
                    <span class="food-activity">{{food.activity.image_text}}</span>
                  </p>
                  <div class="food-footer">
                    <p class="food-price">
                      <span>￥</span>
                      <span>{{food.specfoods[0].price}}</span>
                      <span>起</span>
                    </p>
                    <!--添加食品-->
                    <div v-if="food.specfoods.length==1" class="reduce-plus">
                      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                        <!--减号-->
                        <div v-if="testarray.length"
                             v-show="testshowdelete(index,indextwo)"
                             class="countreduce"
                             @click="reduceFood(index,indextwo,food)"
                        >
                          -
                        </div>
                      </transition>
                      <!--显示数量-->
                      <span
                        v-if="testarray.length"
                        v-show="testshowcounts(index,indextwo)">
                        <!--{{testarray[index][indextwo].count}}-->
                        {{comparisondata(food)}}
                      </span>
                      <!--加号-->
                      <div class="countplus" :ref="'b'+index" @click="addFood(index,indextwo,food)">+</div>
                    </div>

                    <div v-else class="choose-size" :ref="'b'+index" @click="showInfor(food.specfoods)">
                      选规格
                    </div>
                    <div v-if="showchoosesize" class="choose-box">
                      <header class="specs-header">
                        <strong class="food-name">{{sizedetail[0].name}}</strong>
                        <img :src="pic.close" alt="" class="specs-close" @click="hideInfor">
                      </header>
                      <section class="specs-details">
                        <p class="specs-details-title">规格</p>
                        <ul class="activity-container">
                          <li @click="chooseclass($event)" v-for="value in sizedetail">
                            {{value.specs_name}}
                          </li>
                        </ul>
                        <footer class="specs-footer">
                          <p class="specs-price">
                            <span>￥</span><span>{{sizedetail[0].price}}</span>
                          </p>
                          <div class="addto-car">加入购物车</div>
                        </footer>
                      </section>
                    </div>
                  </div>
                </div>
              </section>

            </li>
          </ul>
        </div>
        <!--评价界面-->
        <div class="evaluate" v-show="showEvaluate">
          <header class="evaluate-header">
            <section class="evaluate-header-left">
              <p>4.7</p>
              <p>综合评价</p>
              <p>高于周边商家76.9%</p>
            </section>
            <section class="evaluate-header-right">
              <div>
                <span class="headtxt">服务态度</span>
                <el-rate
                  v-model="value1"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <div>
                <span class="headtxt">菜品评价</span>
                <el-rate
                  v-model="value2"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <p>
                <span class="headtxt">送达时间</span>
                <span class="send-minute">分钟</span></p>
            </section>
          </header>
          <section>
            <ul class="evaclassify-con">
              <li v-for="eva in evaluateClassifys" :class="eva.name=='不满意'? 'classifyUnsatisfy':''"
                  @click='myClick($event)'>
                <span>{{eva.name}}</span><span>({{eva.count}})</span>
              </li>
            </ul>
          </section>
          <ul class="evaluate-rating">
            <li class="eva-detail-con" v-for="evadetail in evaDetails">
              <section class="eva-detail-left">
                <img src="./img/default.jpg" alt="">
              </section>
              <section class="eva-detail-right">
                <p class="detail-one">
                  <span>{{evadetail.username}}</span>
                  <span>{{evadetail.rated_at}}</span>
                </p>
                <p class="detail-two">
                  <el-rate
                    v-model="evadetail.rating_star"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}" class="rating-start">
                  </el-rate>
                  <span class="send-ontime">{{evadetail.time_spent_desc
}}</span>
                </p>
                <ul class="detail-img">
                  <li v-for="fooddetail in evadetail.item_ratings">
                    <img v-if="fooddetail.image_hash!=''"
                         :src="'https://fuss10.elemecdn.com/'+publicfunction.dealarray(fooddetail.image_hash)" alt="">
                  </li>
                </ul>
                <ul class="detail-foodname">
                  <li v-for="fooddetail in evadetail.item_ratings">{{fooddetail.food_name}}</li>
                </ul>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="shopcar_footer" v-if="!showEvaluate">
      <div class="footer-con">
        <div :class="$store.state.costCount!=0? 'blue':'carico'" @click="showCarFoodList">
          <img src="./img/shopcar.png" alt="">
          <span id="countred-car" v-if="$store.state.costCount">{{$store.state.costCount}}</span>
        </div>
        <div class="car_num">
          <p>￥<span>{{$store.state.costs}}</span>.00</p>
          <p>配送费5￥</p>
        </div>
        <div :class="$store.state.costCount? 'toPays':'missingmoney'">
          <span>{{toPay}}</span>
        </div>
      </div>

    </div>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <section class="car-foodlist" v-show="showCarFood">
        <div class="foodlist-top">
          <span>购物车</span>
          <p>
            <img src="./img/detele.png" alt="">
            <span>清空</span>
          </p>
        </div>
        <ul class="foodlist-container">
          <li class="foodlist-content" v-for="list in shopCarList">
            <p>{{list.name}}</p>
            <p class="car-price"><span>￥</span><span>{{list.price}}</span></p>
            <div class="reduce-plus">
              <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <div class="countreduce" @click="shopCarDataR(list)">-</div>
              </transition>
              <span>{{list.count}}</span>
              <div class="countplus" @click="shopCarDataAdd(list)">+</div>
            </div>
          </li>
        </ul>
      </section>
    </transition>
    <router-view class="position-shopcar"></router-view>
  </div>
</template>

<script>
  /*引入图片*/
  import next from "./img/下一级.png";
  import bgimg from './img/elmlogo.jpeg';
  import close from "./img/关 闭 (1).png";
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "shopcar",
    data() {
      return {
        showCarFood: false,
        countss: [],
        counts: [],
        toPay: "还差￥20起送",
        rating: 5,
        value1: null,
        value2: null,
        title: "店家详情",
        pic: {next, bgimg, close},
        showWares: true,
        showEvaluate: false,
        showChoose: false,
        categotyList: [],
        sizedetail: [],
        showchoosesize: false,
        isActive: "",
        classifys: 'classifyNormal',
        evaluateClassifys: [],
        evaDetails: [],
        shopCarList: [],
        ccc: null,
        restaurantInfor: {},
        testarray: []
      }
    },
    components: {
      Header: header
    },
    created() {

      //评价信息
      this.$http.get("http://cangdu.org:8001/ugc/v2/restaurants/" + this.$route.query.id + "/ratings?offset=0&limit=10").then((response) => {
        this.evaDetails = response.data;
      })
      //评价分数
      this.$http.get("http://cangdu.org:8001/ugc/v2/restaurants/" + this.$route.query.id + "/ratings/scores").then((response) => {
        //console.log(typeof parseInt(response.data.service_score.toFixed(1;
        this.value1 = Number(response.data.service_score.toFixed(1))
        this.value2 = Number(response.data.food_score.toFixed(1))
      })
      //评价分类
      this.$http.get("http://cangdu.org:8001/ugc/v2/restaurants/" + this.$route.query.id + "/ratings/tags").then((response) => {
        this.evaluateClassifys = response.data
      })
      //购物车
      this.$http.get("http://cangdu.org:8001/shopping/getcategory/" + this.$route.query.id).then((response) => {
        this.categotyList = response.data.category_list;
        this.$nextTick(() => {
          // for(var x in this.$refs){
          //   console.log(x)
          //   console.log(this.$refs[x])
          // }
          if (this.$refs.aaa.childNodes[0].offsetTop == this.$refs.aaa.scrollTop) {
            this.$refs.nav[0].classList.add("active")
          }
          for (var i = 0; i < this.categotyList.length; i++) {
            this.countss.push({count: 0, showCounts: false})
            this.testarray[i] = new Array()
            for (var j = 0; j < this.categotyList[i].foods.length; j++) {
              this.testarray[i][j] = {count: 0, showCounts: false, index: i, indextwo: j}
            }
          }
        });
        // console.log(this.testarray)
        this.shopCarList = this.$store.state.shopCarList
      });
      // console.log(this.countss)
      //餐馆详情
      this.$http.get("http://cangdu.org:8001/shopping/restaurant/" + this.$route.query.id).then((response) => {
        this.restaurantInfor = response.data;
      })

    },
    mounted() {
      this.$refs.aaa.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      test(index, indextwo) {
        // console.log("---------")
        // console.log(index)
        // console.log(indextwo)
        // if(this.testarray[index][indextwo].length)
        return true
      },
      toWares() {
        console.log("商品界面");
        this.showWares = true;
        this.showEvaluate = false;
      },
      toEvaluate() {
        console.log("评价界面");
        this.showWares = false;
        this.showEvaluate = true;
      },
      showInfor(array) {
        this.showChoose = !this.showChoose
        this.showchoosesize = true
        this.sizedetail = array
      },
      hideInfor() {
        this.showchoosesize = !this.showchoosesize
        this.showChoose = !this.showChoose
      },
      chooseclass($event) {
        for (var i = 0; i < $event.target.parentNode.childNodes.length; i++) {
          $event.target.parentNode.childNodes[i].className = ""
        }
        $event.target.className = "specs-activity"
      },
      foodclass(index, $event) {
        console.log(this.$refs.aaa.scrollTop)
        this.publicfunction.jump(index, this.$refs.aaa)
      },
      handleScroll(index, $event) {
        for (var i = 1; i <= this.$refs.aaa.childNodes.length; i++) {
          if (this.$refs.aaa.childNodes[i - 1].offsetTop <= this.$refs.aaa.scrollTop && this.$refs.aaa.scrollTop < this.$refs.aaa.childNodes[i].offsetTop) {
            this.$refs.nav[i - 1].classList.add("active")
          }
          else {
            this.$refs.nav[i - 1].classList.remove("active")
          }
        }
      },
      myClick($event) {
        var bgs = $event.currentTarget
        for (var i = 0; i < bgs.parentNode.childNodes.length; i++) {
          bgs.parentNode.childNodes[i].style.background = ""
          bgs.parentNode.childNodes[i].style.color = ""
        }
        $event.currentTarget.style.background = "#3190e8"
        $event.currentTarget.style.color = "#fff"
      },
      testshowdelete(index, indextwo) {
        return this.testarray[index][indextwo].showCounts
      },
      testshowcounts(index, indextwo) {
        if (this.testarray[index][indextwo].count > 0) {
          return true
        } else {
          return false
        }
      },
      //购物车操作
      addFood(index, indextwo, food) {
        for (var i = 0; i < this.$store.state.shopCarList.length; i++) {
          if (this.$store.state.shopCarList[i].name == food.name) {
            this.testarray[index][indextwo].count = this.$store.state.shopCarList[i].count
          }
        }
        // console.log(food)
        this.testarray[index][indextwo].showCounts = true
        this.testarray[index][indextwo].count++
        // {
        //   // this.counts[indextwo].showCounts = true
        //   // this.counts[indextwo].count++;
        //   // this.countss[index].showCounts = true
        //   // this.countss[index].count++;
        this.toPay = "去结算"
        this.$store.commit('costsSum', {
          name: food.name,
          count: this.testarray[index][indextwo].count,
          price: food.specfoods[0].price,
        });
        // }
        this.$forceUpdate();
      },
      reduceFood(index, indextwo, food) {
        for (var i = 0; i < this.$store.state.shopCarList.length; i++) {
          if (this.$store.state.shopCarList[i].name == food.name) {
            this.testarray[index][indextwo].count = this.$store.state.shopCarList[i].count
          }
        }
        this.testarray[index][indextwo].count--
        if (this.testarray[index][indextwo].count == 0) {
          this.testarray[index][indextwo].showCounts = false
        }
        // console.log(food.name);
        //购物车
        if (this.$store.state.costCount == 1) {
          this.countShow = false
          this.$store.state.costCount = 0
          this.$store.state.costs = 0
          this.toPay = "还差￥20起送"
        } else {
          this.$store.commit('costsSumReduce', {
            name: food.name,
            price: food.specfoods[0].price
          })
        }
        console.log(this.$store.state.shopCarList)
        console.log(this.testarray[index][indextwo])
        this.$forceUpdate();
      },
      showCarFoodList() {
        this.showCarFood = !this.showCarFood
        this.showChoose = !this.showChoose
      },
      hideShowFoodList() {
        this.showCarFood = false
        this.showChoose = false
      },
      shopCarDataAdd(list) {
        this.$store.commit("shopCarDataAdd", list)
        console.log(this.$store.state.shopCarList)
      },
      shopCarDataR(list) {
        console.log(list);
        this.$store.commit("shopCarDataR", list)
      }
    },
    watch: {

      "testarray": {
        handler: function (newval, oldval) {
          for (var i = 0; i < this.testarray.length; i++) {
            for (var j = 0; j < this.testarray[i].length; j++) {
              if (newval[i][j].count != oldval[i][j].count) {
                alert("asdasdasd")
              }
            }
          }
        },
        deep: true
      }

    },
    computed: {
      comparisondata() {
        return function (data) {
          for (var i = 0; i < this.$store.state.shopCarList.length; i++) {
            if (this.$store.state.shopCarList[i].name == data.name) {
              return this.$store.state.shopCarList[i].count
            }
          }

        }
      }
    }

  }
</script>
<style>
  .el-rate__text {
    font-size: .55rem;
    font-weight: 200;
    color: #f60 !important;
    margin-left: .5rem;
  }

  .el-rate__item .el-rate__icon {
    width: 4px;
    font-size: 10px;
  }

  .rating-start .el-rate__icon {
    width: 3px;
    font-size: 9px;
  }
</style>
<style scope>
  .position-shopcar {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: #ebebeb;
  }

  /*添加购物车动画*/

  .fadeInRight {
    -webkit-animation-delay: .01s;
    -webkit-animation-duration: .6s;
  }

  .fadeInUp, .fadeOutDown {
    -webkit-animation-duration: .5s;
  }

  /*红色count*/
  #countred-car {
    position: absolute;
    top: .13rem;
    left: 1.8rem;
  }

  #countred {
    position: absolute;
    top: .1rem;
    left: 3rem;
  }

  #countred-car, #countred {
    display: block;
    min-width: .6rem;
    height: .6rem;
    line-height: .55rem;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background-color: red;
    font-size: .5rem;
    font-weight: 200;
    box-sizing: border-box;
    border: .025rem solid #ff461d;
  }

  /*蒙板*/
  .specs-cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 103;
  }

  /*.cover-enter-active, .cover-leave-active{*/
  /*opacity: 0.5;*/
  /*}*/

  /*评价界面*/
  .evaluate {
    width: 16rem;
    box-sizing: border-box;
    background: #f5f5f5;
    overflow: scroll;
  }

  .evaluate::-webkit-scrollbar {
    display: none;
  }

  .evaluate-header {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
    box-sizing: border-box;
    background: white;
  }

  /*header左*/
  .evaluate-header-left {
    text-align: center;
    margin-right: .4rem;
  }

  .evaluate-header p, .evaluate-header span {
    font-weight: 200;
  }

  .evaluate-header .evaluate-header-left p:first-of-type {
    font-size: 1.2rem;
    color: #f60;
  }

  .evaluate-header .evaluate-header-left p:nth-of-type(2) {
    font-size: .65rem;
    color: #666;
    margin: .3rem 0;
  }

  .evaluate-header .evaluate-header-left p:nth-of-type(3) {
    font-size: .4rem;
    color: #999;
  }

  /*header右*/
  .evaluate-header-right .headtxt {
    color: #666;
    font-size: .65rem;
    line-height: 1rem;
    margin-right: .5rem;
  }

  .evaluate-header-right div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .send-minute {
    font-size: .4rem !important;
    color: #999 !important;
  }

  /*评价分类*/
  .evaclassify-con {
    background: white;
    display: flex;
    flex-wrap: wrap;
    padding: .5rem;
  }

  .evaclassify-con li {
    padding: .3rem;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
    color: #6d7885;
    background: #ebf5ff;

  }

  .evaclassify-con li span {
    font-size: .6rem;
    font-weight: 200;

  }

  /*正常*/
  .classifyClick {
    color: #fff !important;
  }

  .evaclassify-con .classifyUnsatisfy {
    background-color: #f5f5f5;
    color: #aaa;
  }

  /*评价信息*/
  .evaluate-rating {
    padding: 0 .5rem;
    background: white;
  }

  .eva-detail-con {
    display: flex;
    justify-content: flex-start;
    background: white;
    border-top: 1px solid #f1f1f1;
    padding: .6rem 0;
  }

  /*评价信息左*/
  .eva-detail-left img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: .025rem;
    margin-right: .8rem;
  }

  /*评价信息右一*/
  .eva-detail-right {
    width: 12.9rem;
  }

  .detail-one {
    display: flex;
    justify-content: space-between;
  }

  .detail-one span:nth-of-type(1) {
    font-size: .55rem;
    color: #666;
  }

  .detail-one span:nth-of-type(2) {
    font-size: .4rem;
    color: #999;
    font-weight: 200;
  }

  /*评价信息右二*/
  .detail-two {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: .17rem;
  }

  .detail-two .send-ontime {
    font-size: .55rem;
    color: #666;
    font-weight: 200;
    margin-left: .2rem;

  }

  /*评价信息右三图片*/
  .detail-img {
    display: flex;
  }

  .detail-img li img {
    width: 3rem;
    height: 3rem;
    margin: .3rem .4rem .4rem 0;
  }

  /*评价信息右四图片*/
  .detail-foodname {
    display: flex;
  }

  .detail-foodname li {
    width: 1.79rem;
    color: #999;
    font-size: .55rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: .2rem;
    margin-right: .4rem;
    font-weight: 200;

  }

  .shopcarbody {
    position: relative;
  }

  /*nav*/
  .shopcar_line {
    width: 100%;
    height: 1.95rem;
    background-color: #3190e8;
    /*position: relative;*/
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }

  .shopcar_line_left {
    width: 1.8rem;
    height: 1.95rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopcar_line_left img {
    width: 1rem;
  }

  .shopcar_line_des {
    width: 8rem;
    position: absolute;
    left: 27%;
    top: 25%;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 200;
  }

  /*shopcar_center*/
  .shopcar_center {
    width: 100%;
    height: 8rem;
    overflow: hidden;
    /*position: relative;*/
    position: fixed;
    left: 0;
    top: 1rem;
    z-index: 99;
  }

  /*背景*/
  .bgimg {
    width: 100%;
    /*margin-top: 1.9rem;*/
    filter: blur(10px);
  }

  /*---购物中心上半边---*/
  .shopcar-center-top {
    position: fixed;
    left: 0;
    right: 0;
    top: 1.91rem;
    z-index: 100;
  }

  .showtitle {
    height: 3.4rem;
    padding: .4rem 0 .4rem .4rem;
    display: flex;
    background-color: rgba(119, 103, 137, .43);
    /*justify-content: start;*/
  }

  /*左边*/
  .showtitle div:nth-child(1) img {
    width: 2.9rem;
    height: 2.9rem;
    margin-right: .3rem;
    border-radius: .15rem;
  }

  /*右边*/
  .showtitle-right .right-title {
    margin-bottom: .5rem;
  }

  /*右边商铺名字*/
  .showtitle-right .right-title span {
    color: white;
    font-size: .8rem;
    font-weight: 200;
  }

  /*商家配送*/
  .showtitle-right .distribute-infor {
    font-size: .5rem;
    color: #fff;
    margin-bottom: .6rem;
  }

  .distribute-infor span {
    font-weight: 100;
  }

  .next {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 34%;
    right: .3rem;
  }

  /*公告部分*/
  .showtitle-right p:nth-of-type(1) {
    width: 11.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .5rem;
    color: #fff;
    font-weight: 100;
  }

  /*--活动--*/
  .activity {
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem .4rem .4rem;
    background-color: rgba(119, 103, 137, .43);
  }

  /*箭头*/
  .activity-right img {
    width: .45rem;
    height: .45rem;
  }

  .activity > p span {
    color: white;
    font-size: .4rem;
    font-weight: 100;
  }

  /*左*/
  .activity-left span:nth-of-type(1) {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;

    background-color: rgb(240, 115, 115);
    border-radius: .1rem;
    font-size: .4rem;
  }

  /*----购物车商品评价界面-----*/
  .wares-evaluate {
    position: absolute;
    left: 0;
    top: 9.5rem;
    background: white;
    /*z-index: 100;*/
    /*overflow: hidden;*/
  }

  /*标题*/
  .wares-title {
    display: flex;
    background: white;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 7.4rem;
    z-index: 100;
    padding: .65rem 0 .8rem 0;
    border-bottom: 1px solid #ebebeb;
  }

  .wares-title p {
    width: 50%;
    font-size: .65rem;
    text-align: center;
  }

  .wares-title p span {
    padding: .2rem .1rem;
    font-weight: 200;
  }

  .focus-wares {
    color: #3190e8;
    border-bottom: 0.12rem solid #3190e8;
  }

  .nofocus {
    color: #666;
    border: 0;
  }

  /*商品*/
  .wares {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /*商品左*/
  .wares-left {
    width: 3.8rem;
    background-color: #f5f5f5;
    height: 17rem;
    overflow: scroll;
  }

  .wares-left::-webkit-scrollbar {
    display: none;
  }

  .wares-left li {
    text-align: center;
    padding: 0rem .3rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
  }

  .sales-logo {
    width: .5rem;
    height: .6rem;
    margin-right: .1rem;
  }

  .wares-left .left-li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    border-left: .15rem solid #3190e8;
    background-color: #fff;
  }

  .wares-left .left-li span {
    line-height: 2.35rem;
    display: block;
    font-size: .6rem;
    color: #666;
  }

  /*商品右*/
  .wares-right {
    position: relative;
    /*position: fixed;*/
    right: 0;
    height: 17rem;
    background-color: white;
    overflow: scroll;
    /*z-index: 1200;*/
  }

  .wares-right::-webkit-scrollbar {
    display: none;
  }

  .wares-right li {
    box-sizing: border-box;
  }

  .wares-header {
    width: 100%;
    padding: .65rem .4rem .65rem .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }

  /*标题*/
  .waresfood-title {
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    /*align-items: center;*/
  }

  .waresfood-title h4 {
    font-size: .7rem;
    color: #666;
    font-weight: 700;
    margin-right: 0.4rem;
  }

  .waresfood-title span {
    font-size: .5rem;
    color: #999;
    overflow: hidden;
    font-weight: 200;
    line-height: 0.8rem;
  }

  .wares-header .title-infor {
    display: inline-block;
    width: .5rem;
    height: 1rem;
  }

  /*------内容详情-----*/
  .waresr-list {
    width: 12.2rem;
    display: flex;
    justify-content: space-between;
    padding: .6rem .4rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .food-describe {
    margin-left: 0.45rem;
  }

  /*右一*/
  .food-describe .food-describe-head strong {
    font-size: .7rem;
    color: #333;
    font-weight: 700;
  }

  .food-describe-head {
    margin-bottom: .2rem;
    line-height: .75rem;
    display: flex;
    justify-content: space-between;
  }

  /*新品*/
  .food-detail {
    /*width: 100%;*/
    position: relative;
  }

  .food-detail div:nth-child(1) {
    display: flex;
    width: 2rem;
    height: 2rem;
    background: #4cd964;
    position: absolute;
    left: -11.8rem;
    top: -0.5rem;
    font-size: .4rem;
    color: white;
    font-weight: 200;
    align-items: flex-end;
    justify-content: center;
    transform: rotateZ(-45deg) translateY(-1.4rem);
  }

  /*招牌*/
  .food-detail div:nth-child(2) {
    display: block;
    position: absolute;
    text-align: center;
    width: 1.6rem;
    right: 0;
    color: rgb(240, 115, 115);
    border: 1px solid currentColor;
    border-radius: .3rem;
    font-weight: 200;
    font-size: .3rem;
    transform: scale(.8);
    box-sizing: border-box;
    padding: .1rem;
    height: .6rem;
    line-height: .35rem;
  }

  /*右二*/
  .food-describe .food-describe-content {
    font-size: .5rem;
    color: #999;
    line-height: .76rem;
  }

  /*右三*/
  .food-describe-rating {
    font-size: .5rem;
    color: #333;
    line-height: .8rem;
  }

  /*右四*/
  .activityp {
  }

  .food-activity {
    display: inline-block;
    /*border: 1px solid currentColor;*/
    border-radius: .3rem;
    font-size: .3rem;
    color: rgb(241, 136, 79);
    border: 1px solid rgb(240, 115, 115);
    font-weight: 200;
    transform: scale(.8);
    padding: .08rem;
    margin-left: -.15rem;
  }

  /*右五*/
  .food-footer {
    width: 8rem;
    height: 1.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: .1rem;
  }

  .food-price {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .food-price > span {
    display: block;
  }

  .food-price span:nth-of-type(1),
  .specs-price span:nth-of-type(1),
  .car-price span:nth-of-type(1) {
    font-size: .5rem;
    color: #f60;
  }

  .food-price span:nth-of-type(2),
  .specs-price span:nth-of-type(2),
  .car-price span:nth-of-type(2) {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin-right: .3rem;
  }

  .food-price span:nth-of-type(3) {
    font-size: .5rem;
    color: #666;
    font-weight: 200;
  }

  /*右五右*/
  .choose-size {
    position: relative;
    display: block;
    font-size: .55rem;
    color: #fff;
    background: #3190e8;
    font-weight: 100;
    padding: .3rem .2rem;
    line-height: .6rem;
    border: 1px solid #3190e8;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    border-radius: .2rem;
    /*margin-left: 4rem;*/
  }

  .reduce-plus {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .reduce-plus span {
    min-width: 1.4rem;
    text-align: center;
    font-size: .65rem;
    color: #666;
  }

  .countreduce {
    display: block;
    border: 1px solid #3190e8;
    color: #3190e8;
    width: .78rem;
    height: .78rem;
  }

  .countplus {
    background-color: #3190e8;
    color: white;
    width: .8rem;
    height: .8rem;
  }

  .countplus, .countreduce {

    border-radius: 50%;
    line-height: .65rem;
    font-size: .8rem;
    text-align: center;
  }

  /*--选规格弹框--*/
  .choose-box {
    position: fixed;
    left: 15%;
    top: 35%;
    background: white;
    width: 70%;
    border: 1px;
    border-radius: .2rem;
    z-index: 105;
  }

  /*弹框header*/
  .specs-header {
    text-align: center;
    padding: .6rem .5rem;
    box-sizing: border-box;
    position: relative;
  }

  .food-name {
    color: #222;
    font-size: .7rem;
    font-weight: 400;
  }

  .specs-close {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: .5rem;
    top: .55rem;
  }

  /*弹框section*/
  .specs-details {
    padding: .5rem;
  }

  .specs-details-title {
    font-size: .6rem;
    color: #666;
    margin-bottom: 0.1rem;
    font-weight: 200;
  }

  .activity-container {
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;
  }

  .activity-container > li {
    border: .025rem solid #ddd;
    border-radius: .2rem;
    color: #3199e8;
    padding: .35rem .5rem;
    font-size: .6rem;
    margin-right: .5rem;
  }

  .specs-activity {
    border-color: #3199e8 !important;
  }

  /*弹框footer*/
  .specs-footer {
    padding: .5rem;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .addto-car {
    width: 4rem;
    height: 1.3rem;
    background: #3199e8;
    border: 1px;
    -webkit-border-radius: .15rem;
    -moz-border-radius: .15rem;
    border-radius: .15rem;
    font-size: .6rem;
    color: #fff;
    font-weight: 200;
    text-align: center;
    line-height: 1.3rem;
  }

  /*图片*/
  .waresr-list .food-img {
    width: 2rem;
    height: 2rem;
  }

  /*footer*/
  .footerlist {
    height: 2rem;
    position: relative;
  }

  .shopcar_footer {
    color: white;
    position: fixed;
    bottom: 0;
    z-index: 120;
    width: 100%;
    height: 2rem;
    background-color: #3d3d3f;
  }

  /*.shopcar_footer > div {*/
  /**/
  /*}*/

  .footer-con {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 300;
  }

  .footer-con div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    position: absolute;
    left: .5rem;
    bottom: .5rem;
    border: .18rem solid #444;
    box-sizing: border-box;
  }

  .carico {
    background-color: #3d3d3f;
  }

  .blue {
    background-color: #3190e8;
  }

  .footer-con div:nth-of-type(1) > img {
    width: 1.2rem;
  }

  .car_num {
    position: absolute;
    left: 3.4rem;
    top: .2rem;
  }

  .car_num p:nth-child(1) {
    font-size: .8rem;
    font-weight: 200;
    margin-bottom: .3rem;
  }

  .car_num p:nth-child(2) {
    font-size: .4rem;
    color: #fff;
    font-weight: 100;
  }

  .footer-con div:nth-of-type(3) {
    position: absolute;
    right: 0;
    top: 0;
    width: 5rem;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .missingmoney {
    background-color: #535356 !important;
  }

  .toPays {
    background-color: #4cd964 !important;
  }

  .footer-con div:nth-of-type(3) span {
    font-size: .62rem;
    color: #fff;
    font-weight: 200;
  }

  .car-foodlist {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2rem;
    z-index: 104;
    background-color: #fff;
    color: #666;
    padding-bottom: .4rem;
  }

  .foodlist-container {
    max-height: 16.85rem;
    overflow: scroll;
  }

  .foodlist-container::-webkit-scrollbar {
    display: none;
  }

  .foodlist-top {
    background-color: #eceff1;
    display: flex;
    justify-content: space-between;
    padding: .3rem .6rem;
  }

  .foodlist-top span {
    color: #666;
    font-weight: 200;
  }

  .foodlist-top span:nth-of-type(1) {
    font-size: .7rem;
  }

  .foodlist-top p:nth-of-type(1) span {
    font-size: .6rem;
  }

  .foodlist-top p:nth-of-type(1) img {
    width: .7rem;
    height: .7rem;
    vertical-align: middle;
  }

  .foodlist-content {
    display: flex;
    justify-content: space-between;
    padding: .6rem .5rem;
  }

  .foodlist-content p:nth-of-type(1) {
    width: 55%;
    font-size: .7rem;
    color: #666;
    /*font-weight: 200;*/
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
