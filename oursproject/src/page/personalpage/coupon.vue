<template>
  <div>
    <Header :title="title"></Header>
    <div class="nav">
      <div><span>红包</span></div>
      <div><span>商家代金券</span></div>
    </div>
    <section class="hongbao_container">
      <div class="hongbao_header">
        <div>有<span> 3 </span>个红包即将到期</div>
        <div><img src="./img/10.png" alt=""><span>红包说明</span></div>
      </div>
      <ul class="hongbao_list">
        <li v-for="coupon in coupons">
          <section class="list_item">
            <div>
              <div><span>￥</span>
                <span>{{[...JSON.stringify(coupon.amount)][0]}}</span>
                <span>.</span>
                <span>{{[...JSON.stringify(coupon.amount)][2]}}0</span>
              </div>
              <p>满{{coupon.sum_condition}}元可用</p>
            </div>
            <div>
              <p>{{coupon.name}}</p>
              <p>{{coupon.end_date}}到期</p>
              <p>限收获手机号为</p><span>{{coupon.phone}}</span>
            </div>
            <div>剩3日</div>
          </section>
        </li>
      </ul>
      <p>
        限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理
      </p>
    </section>
    <div class="footernav">
      <div><span>兑换红包</span></div>
      <div><span>推荐有奖</span></div>
    </div>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "coupon",
    data() {
      return {
        title: "我的优惠",
        coupons: [],
        amounts: []
      }
    },
    created() {
      this.$http.get("http://cangdu.org:8001/promotion/v2/users/1/hongbaos?limit=20&offset=0").then((response) => {
        console.log(response.data)
        this.coupons = response.data;
        console.log(this.amounts);
        console.log([...JSON.stringify(response.data[2].amount)][2]);
      })
    },
    components: {
      Header: header
    }

  }
</script>

<style scoped>
  .nav {
    height: 2rem;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav div {
    padding-bottom: .4rem;
  }

  .nav div span {
    /*color: #3190e8;*/
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
    border-bottom: .1rem solid #fff;
    border-bottom-color: #3190e8;
  }

  .hongbao_container {
    padding: 0 .7rem;
  }

  .hongbao_header {
    height: 2rem;
    font-weight: 400;
    color: #666;
    font-size: .55rem;
    display: flex;
    justify-content: space-between;
  }

  .hongbao_header div:nth-child(1) {
    color: #666;
    line-height: 2rem;
  }

  .hongbao_header div:nth-child(1) span {
    color: red;
  }

  .hongbao_header div:nth-child(2) {
    display: flex;
    align-items: center;
    color: #3190e8;
  }

  .hongbao_header img {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }

  .hongbao_list li {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    /*justify-content: space-between;*/
    padding: 1rem .5rem .8rem;
  }

  .list_item > div:nth-child(1) {
    border-right: .025rem dotted #ccc;
    width: 3.2rem;
  }

  .list_item > div:nth-child(1) div span:nth-child(1) {
    font-size: .75rem;
    color: #ff5340;
    font-weight: 700;
  }

  .list_item > div:nth-child(1) div span:nth-child(2) {
    margin: 0 -.1rem 0 -.3rem;
    font-size: 1.5rem;
    color: #ff5340;
  }

  .list_item > div:nth-child(1) div span:nth-child(3), .list_item > div:nth-child(1) div span:nth-child(4) {
    margin: 0 -.1rem;
    font-size: .8rem;
    color: #ff5340;
    font-weight: 700;
  }

  .list_item p {
    line-height: 1rem;
    font-size: .4rem;
    color: #999;
    letter-spacing: 1px;
  }

  .list_item > div:nth-child(2) {
    width: 6rem;
    margin-left: 1.5rem;
  }

  .list_item > div:nth-child(2) p {
    line-height: 1.5;
    letter-spacing: 0px;
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .list_item > div:nth-child(2) p:nth-child(1) {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }

  .list_item > div:nth-child(2) span {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .list_item > div:nth-child(3) {
    margin-left: .9rem;
    font-size: .75rem;
    color: #ff5340;
  }

  .hongbao_container > p {
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
  }

  .footernav {
    position: fixed;
    bottom: 0;
    height: 2rem;
    background-color: white;
    width: 100%;
    overflow: hidden;
  }

  .footernav div {
    text-align: center;
    line-height: 1.6rem;
    float: left;
    width: 50%;
    padding-bottom: .4rem;
  }

  .footernav div span {
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
    border-bottom: .1rem solid #fff;
    border-bottom-color: #3190e8;
  }
</style>
