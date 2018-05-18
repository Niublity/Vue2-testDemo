<template>
    <div id="chooseAddress">
        <Header :title="title"></Header>
        <router-link to="/orderforgoods/chooseAddress/addAddress" class="choose-address">
            <img src="./img/download.png" alt="">
            <span>新增收获地址</span>
        </router-link>
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
.childrens{
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