<template>
  <div>
    <Header :title="title"></Header>
    <div class="buyvip">
      为账户<span>{{username}}</span>购买会员
    </div>
    <section class="menbershippower">
      <router-link to="/vipcenter/vipdescription">
        <div class="menbershippower_top">
          <div>会员特权</div>
          <div>会员说明 <img src="../img/14.png" alt=""></div>
        </div>
      </router-link>
      <div class="menbershippower_des">
        <div>
          <img
            src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII="
            alt="">
        </div>
        <div>
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
      <div class="menbershippower_des">
        <div>
          <img
            src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII="
            alt="">
        </div>
        <div>
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
    </section>
    <section class="apply_vip">
      <div class="header">
        开通会员
      </div>
      <router-link to="/perchasevip">
        <div class="apply_vip_buy">
          <div>
            <span>1个月</span><span>￥20</span>
          </div>
          <div>购买</div>
        </div>
      </router-link>
    </section>
    <router-link to="/vipcenter/exchangevip" class="astyle">
      <span>兑换会员</span>
      <div>使用卡号卡密 <img src="../img/14.png" alt=""></div>
    </router-link>

    <router-link to="/vipcenter/buyrecord" class="astyle">
      <span>购买记录</span>
      <div>开发票<img src="../img/14.png" alt=""></div>
    </router-link>
    <router-view class="children-route"></router-view>
  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "vip",
    data() {
      return {
        title: "会员中心",
        problems: [],
        username:""
      }
    },
    components: {
      Header: header
    },
    created(){
      this.username=JSON.parse(sessionStorage.getItem("user")).username
    }
  }
</script>

<style scoped>
  .children-route {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
  }

  .buyvip {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }

  .buyvip span {
    color: black;
    font-weight: 800;
  }

  .menbershippower {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }

  .menbershippower_top {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }

  .menbershippower_top > div:nth-child(1) {
    font-size: .7rem;
    color: #333;
  }

  .menbershippower_top > div:nth-child(2) {
    font-size: .6rem;
    color: #999;
    margin-right: .2rem;
  }

  .menbershippower_top img {
    width: .5rem;
    height: .5rem;
  }

  .menbershippower_des {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: .8rem 0;

  }

  .menbershippower_des > div:nth-child(1) {
    margin-right: .6rem;
  }

  .menbershippower_des > div:nth-child(1) img {
    width: 1.6rem;
    height: 1.8rem;
  }

  .menbershippower_des > div:nth-child(2) h4 {
    font-size: .7rem;
    color: #333;
    font-weight: 400;
  }

  .menbershippower_des > div:nth-child(2) p {
    font-size: .5rem;
    color: #999;
    line-height: 1rem;
    font-weight: 200;
    font-family: Helvetica Neue, Tahoma, Arial;
  }

  .apply_vip {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
    font-size: .7rem;
    color: #333;
  }

  .apply_vip_buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .7rem;
    font-size: .7rem;
    line-height: 2.6rem;
  }

  .apply_vip_buy > div:nth-child(1) span:nth-of-type(2) {
    font-weight: 700;
    color: #f60;
  }

  .apply_vip_buy > div:nth-child(1) span:nth-of-type(1) {
    font-weight: 700;
    color: #333;
  }

  .apply_vip_buy > div:nth-child(2) {
    border: .025rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
    font-weight: 100;
  }

  .astyle {
    font-size: .7rem;
    color: #333;
    padding: 0 .7rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .astyle img {
    width: .5rem;
    height: .5rem;
  }

  .astyle div {
    font-size: .6rem;
    color: #999;
    margin-right: .2rem;
  }
</style>
