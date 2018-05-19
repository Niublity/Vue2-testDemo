<template>
    <div id="chooseAddress">
        <Header :title="title"></Header>
        <router-link to="/orderforgoods/chooseAddress/addAddress" class="choose-address">
            <img src="./img/download.png" alt="">
            <span>新增收获地址</span>
        </router-link>
        <!-- 地址信息 -->
        <ul>
            <li class="username">
                <div class="chooseAddress">1111</div>
                <div>
                    <p>
                        <span>111</span>
                        <span>先生</span>
                        <span>15037136545</span>
                    </p>
                    <p>
                        <span>公司</span>
                        <span>帝湖花园22栋</span>
                    </p>
                </div>
            </li>
        </ul>
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" mode="out-in">
            <router-view class="childrens"></router-view>
        </transition>
    </div>
</template>

<script>
import Header from "../../../components/foodheader/foodheader";
export default {
    name: "chooseAddress",
    data() {
        return {
            title: "选择地址"
        };
    },

    components: {
        Header
    }
};
</script>
<style lang='scss' scoped>
// 地址信息
.username {
    display: flex;
    padding: 0.7rem;
    line-height: 1rem;
    align-items: center;
    border-bottom: 0.025rem solid #f5f5f5;
}
.chooseAddress{
    margin-right: .4rem;
}
.username p:nth-of-type(1) {
    font-size: 0.65rem;
    color: #333;
    margin-bottom: 0.1rem;
}

.username p:nth-of-type(1) span:nth-of-type(1) {
    font-size: 0.8rem;
    font-weight: 700;
}

.username p:nth-of-type(2) span:nth-of-type(1) {
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

.username p:nth-of-type(2) span:nth-of-type(2) {
    font-size: 0.55rem;
    color: #777;
    font-weight: 200;
}

//
.childrens {
    z-index: 211;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
}
#chooseAddress {
    background-color: #fff;
}
.choose-address {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.choose-address img {
    width: 1.2rem;
    height: 1.2rem;
}
.choose-address span {
    font-size: 0.7rem;
    color: #3190e8;
    margin-left: 0.3rem;
}
</style>