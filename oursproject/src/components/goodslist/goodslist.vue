<template>
  <div class="goodslistbody">
    <ul class="goodslist">
      <li v-for="value in Infor">
        <div class="goodslist_left">
          <img :src="'https://elm.cangdu.org/img/'+value.image_path" alt="">
        </div>
        <div class="goodslist_right">
          <div class="goodslist_right_first">
            <div><span>品牌</span><span>{{value.name}}</span></div>
            <div v-if="value.supports"><span v-for="mode in value.supports">{{mode.icon_name}}</span></div>
          </div>
          <div class="goodslist_right_second">
            <div class="ratescore">
              <el-rate
                v-model="value.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <div><span>月销售{{value.recent_order_num}}单</span></div>
            </div>
            <div>
              <div v-if="value.delivery_mode" class="trs">{{value.delivery_mode.text}}</div>
              <div class="ontime">准时达</div>
            </div>
          </div>
          <div class="goodslist_right_third">
            <div>
              <span>￥20起送</span>
              <span>/</span>
              <span>{{value.piecewise_agent_fee.tips}}</span>
            </div>
            <div>
              <span>{{value.distance}}</span>
              <span>/</span>
              <span class="trstime">{{value.order_lead_time}}</span>
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
        Infor: []
      }
    },
    created() {
      // console.log(this.$route.query.restaurant_category_id )
      this.$http.get("http://cangdu.org:8001/shopping/restaurants?latitude=" + this.$store.state.city.latitude + "&longitude=" + this.$store.state.city.longitude+"?restaurant_category_id="+this.$route.query.restaurant_category_id ).then((response) => {
        console.log("http://cangdu.org:8001/shopping/restaurants?latitude=" + this.$store.state.city.latitude + "&longitude=" + this.$store.state.city.longitude+"?restaurant_category_id="+this.$route.query.restaurant_category_id )
        this.Infor = response.data
      })
    }
  }
</script>
<style>

  .ratescore .el-rate {
    /*height: 1rem;*/
    /*line-height: 0;*/
  }

  .ratescore .el-rate span i {
    font-size: .4rem;
    margin-right: -.1rem;
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

  .goodslist_right_first > div:nth-child(1) span:nth-child(1) {
    content: "\54C1\724C";
    display: inline-block;
    font-size: .5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }

  .goodslist_right_second {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ratescore {
    margin-top: .52rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ratescore>div:nth-child(2){
  }
  .ratescore>div:nth-child(2) span {
    margin-left: .2rem;
    font-size: 0.4rem;
    color: #666;
  }

  .goodslist_right_second > div:nth-child(2) {
    margin-top: .52rem;
    display: flex;
    /*transform: scale(.8);*/
    font-size: .4rem;
  }

  .trs {
    font-size: .4rem;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
  }

  .ontime {
    font-size: .4rem;
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
