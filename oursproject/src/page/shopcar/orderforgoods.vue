<template>
    <div class="sure-orderforgoods">
        <Header :title="title" class="sure-orderforgoods-header"></Header>
        <img src="./img/商户线性.png" alt="" class="orderfg-top">
        <!--个人信息-->
        <section class="ouser-Infor">
            <section class="ouser-Infor-left">
                <img src="./img/定位.png" alt="" class="olocation">
                <!-- <div class="left-username">
          <p>
            <span>111</span>
            <span>先生</span>
            <span>15037136545</span>
          </p>
          <p>
            <span>公司</span>
            <span>帝湖花园22栋</span>
          </p>
        </div> -->
                <p class="new-adress">请添加一个收货地址</p>
            </section>
            <router-link to="/orderforgoods/chooseAddress">
                <img src="../personalpage/img/14.png" alt="" class="tochoose-address">
            </router-link>
        </section>
        <!--送达时间-->
        <section class="osend-time">
            <p>送达时间</p>
            <div class="osend-time-right">
                <p>尽快送达|预计16:08</p>
                <p>蜂鸟转送</p>
            </div>
        </section>
        <!--支付方式-->
        <section class="opay-way">
            <div class="opay-way-one">
                <span>支付方式</span>
                <p @click="showPayWay=!showPayWay">
                    <span>在线支付</span>
                    <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
                </p>
            </div>
            <div class="opay-way-two">
                <span>红包</span>
                <span>暂时只在饿了吗APP中支持</span>
            </div>
        </section>
        <!--购物车食品列表-->
        <section class="ofood-List">
            <header class="ofood-List-header">
                <img src="./img/test.jpeg" alt="">
                <h4>效果演示</h4>
            </header>
            <section class="ofood-List-container">
                <ul>
                    <li class="ofood-List-wrapper">
                        <p>食品名称</p>
                        <span class="wrapper-count">X
                            <span>3</span>
                        </span>
                        <span class="wrapper-price">￥
                            <span>20</span>
                        </span>
                    </li>
                </ul>
                <footer class="ofood-List-footer">
                    <p>订单￥
                        <span>11111</span>
                    </p>
                    <p>
                        <span>待支付</span>
                        <span>￥
                            <span>11111</span>
                        </span>
                    </p>
                </footer>
            </section>
        </section>
        <!--备注信息-->
        <section class="oremark">
            <section class="oremark-wrapper">
                <span>订单备注</span>
                <router-link to="/orderforgoods/orderRemark" class="oremark-tochoose">
                    <span class="remark-text">{{ttt}}</span>
                    <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
                </router-link>
            </section>
            <section class="oremark-wrapper border">
                <span>发票抬头</span>
                <router-link to="/orderforgoods/orderbill" class="oremark-tochoose">
                    <span>不需要开发票</span>
                    <img src="../personalpage/img/14.png" alt="" class="tochoose-pay">
                </router-link>
            </section>
        </section>
        <footer class="confirm-order">
            <div>
                <span>待支付
                    <span>￥</span>
                    <span>1111</span>
                </span>
            </div>
            <div>
                <router-link to="/perchasevip" class="orderforgoods-surpay">确认下单</router-link>
            </div>
        </footer>
        <!--支付方式-->
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <section class="opay-way-choose" v-if="showPayWay">
                <header class="opaytitle">支付方式</header>
                <section class="opay-option">
                    <span>货到付款
                        <span>（商家不支持货到付款）</span>
                    </span>
                    <img src="../personalpage/vipcenter/image/grey.png" alt="">
                </section>
                <section class="opay-option">
                    <span>在线支付</span>
                    <img src="../personalpage/vipcenter/image/green.png" alt="">
                </section>
            </section>
        </transition>
        <div class="sure-orderforgoods-mark" v-if="showPayWay" @click="showPayWay=!showPayWay"></div>
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <router-view class="position"></router-view>
        </transition>
    </div>

</template>

<script>
import header from "../../components/foodheader/foodheader";

export default {
    name: "orderforgoods",
    data() {
        return {
            title: "确认订单",
            showPayWay: false,
            remarkTips: []
        };
    },
    created() {
        // console.log(this.$store.state.shopCarList);
        // console.log(this.$store.state.remarkTips)
    },
    computed: {
        ttt() {
            if (this.$store.state.remarkTips) {
                for (let i in this.$store.state.remarkTips) {
                    this.remarkTips.push(this.$store.state.remarkTips[i]);
                }
                return this.remarkTips.join(",");
                // console.log(this.$store.state.remarkTips)
            } else {
                return "口味，偏好等";
            }
        }
    },
    components: {
        Header: header
    }
};
</script>
<style>
.sure-remark div:nth-child(1),
.sure-choose div:nth-child(1) {
    background-color: #4cd964;
    font-size: 0.7rem;
    color: #fff;
    text-align: center;
    margin: 0 0.7rem;
    line-height: 1.8rem;
    border-radius: 0.2rem;
}
.fadeInRight,
.fadeOutRight {
    -webkit-animation-duration: 0.5s;
}
.position {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 210;
    background-color: #f5f5f5;
}
</style>
<style scoped>
.fadeInUp,
.fadeOutDown {
    -webkit-animation-duration: 0.3s;
}
.sure-orderforgoods-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 180;
    background-color: rgba(0, 0, 0, 0.3);
}

.sure-orderforgoods {
    overflow-y: scroll;
    padding-bottom: 3rem;
    position: relative;
}

.sure-orderforgoods-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.sure-orderforgoods::-webkit-scrollbar {
    display: none;
}

/*导航栏*/
.orderfg-top {
    width: 0.9rem;
    height: 0.9rem;
    position: fixed;
    top: 0.5rem;
    right: 0.4rem;
}

/*用户信息 地址等*/
.ouser-Infor {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 0.6rem;
    align-items: center;
    min-height: 3.5rem;
    margin-top: 2rem;
}

.ouser-Infor-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ouser-Infor .olocation {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.4rem;
}

.left-username p:nth-of-type(1) {
    font-size: 0.65rem;
    color: #333;
    margin-bottom: 0.1rem;
}

.left-username p:nth-of-type(1) span:nth-of-type(1) {
    font-size: 0.8rem;
    font-weight: 700;
}

.left-username p:nth-of-type(2) span:nth-of-type(1) {
    font-size: 0.5rem;
    font-weight: 700;
    color: #fff;
    background-color: rgb(76, 217, 100);
    line-height: 0.6rem;
    height: 0.6rem;
    border-radius: 0.15rem;
    margin-right: 0.3rem;
    padding: 0 0.2rem;
}

.left-username p:nth-of-type(2) span:nth-of-type(2) {
    font-size: 0.55rem;
    color: #777;
    font-weight: 200;
}

.tochoose-address {
    width: 1rem;
    height: 1rem;
}

/*送达时间*/
.sure-orderforgoods .osend-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin: 0.4rem 0;
    padding: 0 0.7rem;
    border-left: 0.2rem solid #3190e8;
    min-height: 4rem;
    box-sizing: border-box;
}

.osend-time p:nth-of-type(1) {
    font-size: 0.8rem;
    color: #333;
    font-weight: 700;
    padding-left: 0.3rem;
}

.osend-time-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.osend-time-right p:nth-of-type(1) {
    font-size: 0.7rem;
    color: #3190e8;
    font-weight: 200;
}

.osend-time-right p:nth-of-type(2) {
    font-size: 0.5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    margin-top: 0.5rem;
    border-radius: 0.12rem;
    padding: 0.1rem;
    font-weight: 100;
}

/*支付方式*/
.opay-way {
    background-color: #fff;
    padding: 0 0.7rem;
}

.opay-way > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tochoose-pay {
    width: 0.5rem;
    height: 0.5rem;
}

.sure-orderforgoods .opay-way .opay-way-one {
    font-size: 0.7rem;
    color: #666;
    border-bottom: 0.025rem solid #f5f5f5;
    line-height: 2rem;
}

.opay-way .opay-way-one p:nth-of-type(1) span {
    font-size: 0.6rem;
    color: #aaa;
}

.opay-way .opay-way-two span {
    font-size: 0.6rem;
    color: #aaa;
    line-height: 2rem;
    font-weight: 200;
}

/*购物车食品列表*/
.ofood-List {
    background-color: #fff;
    margin: 0.4rem 0;
}

.ofood-List-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.7rem;
    border-bottom: 0.025rem solid #f5f5f5;
}

.ofood-List-header img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.3rem;
}

.ofood-List-header h4 {
    font-size: 0.8rem;
    color: #333;
}

.ofood-List p,
.ofood-List span {
    font-size: 0.65rem;
    font-weight: 200;
}

.wrapper-count,
.ofood-List-footer p:nth-of-type(2) {
    color: #f60;
}

.ofood-List-wrapper p:nth-of-type(1) {
    width: 11rem;
}

.ofood-List-wrapper {
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 0.7rem;
}

.ofood-List-footer {
    display: flex;
    justify-content: flex-start;
    border-top: 0.025rem solid #f5f5f5;
    line-height: 1.8rem;
    padding: 0 0.7rem;
}

.ofood-List-footer p:nth-of-type(1) {
    width: 11rem;
}

.ofood-List-footer p:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/*备注信息*/
.oremark {
    background-color: #fff;
    padding: 0 0.7rem;
}

.oremark-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2rem;
}

.oremark .border {
    border-top: 0.025rem solid #f5f5f5;
}

.oremark-wrapper span:nth-of-type(1) {
    font-size: 0.7rem;
    color: #666;
    font-weight: 100;
}

.oremark .oremark-tochoose span {
    font-size: 0.6rem;
    line-height: 2rem;
    color: #aaa;
    font-weight: 100;
}
.oremark-tochoose {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.remark-text {
    display: block;
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/*footer*/
.confirm-order {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 100;
    /*justify-content: space-between;*/
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
}

.confirm-order div {
    line-height: 2rem;
    color: white;
    font-weight: 100;
}

.confirm-order div:nth-of-type(1) {
    flex: 5;
    background-color: #3c3c3c;
    padding-left: 0.7rem;
    font-size: 0.7rem;
}

.confirm-order div:nth-of-type(2) {
    background-color: #56d176;

    text-align: center;
    flex: 2;
}

.orderforgoods-surpay {
    color: white;
    font-size: 0.75rem;
    font-weight: 100;
}

/*在线支付选择*/
.sure-orderforgoods .opay-way-choose {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 10rem;
    background-color: #fff;
    z-index: 200;
}

.opay-way-choose .opaytitle {
    background-color: #fafafa;
    font-size: 0.7rem;
    color: #333;
    line-height: 2rem;
    text-align: center;
}

.opay-way-choose .opay-option:nth-of-type(2) span {
    color: #333;
}

.opay-way-choose .opay-option span {
    font-weight: 200;
}

.opay-way-choose .opay-option {
    font-size: 0.7rem;
    color: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.7rem;
    line-height: 2.5rem;
}

.opay-option img {
    width: 0.8rem;
    height: 0.8rem;
}
.new-adress {
    font-size: 0.7rem;
    color: #333;
}
</style>
