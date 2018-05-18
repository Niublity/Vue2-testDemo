<template>
    <div>
        <Header :title="title"></Header>
        <section class="section-container">
            <section class="section-wrapper">
                <span class="section-left">联系人</span>
                <section class="section-right">
                    <input type="text" placeholder="你的名字" class="input-text" v-model="username">
                    <div class="contactPer-right-choose">
                        <span class="choose-sex">
                            <img src="../../personalpage/vipcenter/image/green.png" alt="">
                            <span>先生</span>
                        </span>
                        <span class="choose-sex">
                            <img src="../../personalpage/vipcenter/image/grey.png" alt="">
                            <span>女士</span>
                        </span>
                    </div>
                </section>
            </section>
            <section class="section-wrapper">
                <span class="section-left">联系电话</span>
                <section class="contact-tel-right">
                    <div>
                        <input type="text" placeholder="你的手机号" class="input-text" v-model="phone">
                        <img src="./img/addtel.png" alt="" class="addtel-img" @click="planBstate">
                    </div>
                    <input type="text" placeholder="备选电话" class="input-text  input-planB" v-if="planB">
                </section>
            </section>
            <section class="section-wrapper">
                <span class="section-left">送餐地址</span>
                <section class="section-right">
                    <div type="text" class="choose-address" ref="address">小区/写字楼/学校等</div>
                    <input type="text" placeholder="详细地址（如门牌号等）" class="input-text" v-model="detailAddress">
                </section>
            </section>
            <section class="section-wrapper">
                <span class="section-left">标签</span>
                <section class="section-right">
                    <input type="text" placeholder="无/家/学校/公司" class="input-text" v-model="labels">
                </section>
            </section>
        </section>
        <footer class="sure-choose">
            <div @click="goBack">确定</div>
        </footer>
        <transition enter-active-class="animated bounceIn">
            <Jump v-if="shows" :warnText="warnText" class="Jump" @hide123="showHide"></Jump>
        </transition>
    </div>
</template>

<script>
import Header from "../../../components/foodheader/foodheader";
import Jump from "../../../components/jumpkuangkuang/jumpkuang";
export default {
    name: "addAddress",
    data() {
        return {
            title: "添加地址",
            planB: false,
            shows: false,
            username: "",
            warnText: "请输入姓名",
            phone: "",
            detailAddress: "",
            labels: ""
        };
    },
    components: {
        Header,
        Jump
    },
    methods: {
        hide() {},
        goBack() {
            // if (this.username=="") {

            // }
            console.log(this.username);
            console.log(this.phone);
            console.log(this.labels);
            console.log(this.detailAddress);
            console.log(this.$refs.address);
            this.shows = true;
        },
        planBstate() {
            this.planB = true;
        },
        showHide() {
            this.shows = false;
            console.log("1111");
        }
    }
};
</script>
<style lang='scss' scoped>
.Jump {
    position: fixed;
    left: 2rem;
    top: 27%;
}
.section-container {
    background-color: #fff;
    padding: 0 0.7rem;
}
/*联系人*/
.section-wrapper {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.025rem solid #f5f5f5;
}
.section-left {
    font-size: 0.7rem;
    color: #333;
    line-height: 2.5rem;
    flex: 2;
}
.section-right,
.contact-tel-right {
    flex: 5;
}

.contactPer-right-choose {
    line-height: 2.5rem;
    border-top: 0.025rem solid #f5f5f5;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
}
.choose-sex {
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
}
.section-right .choose-sex img {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.3rem;
}
contactPer-right-choose .section-right .choose-sex span {
    font-size: 0.7rem;
    color: #333;
}
/*联系电话*/

.contact-tel-right div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.addtel-img {
    width: 1rem;
    height: 1rem;
}
.input-planB {
    border-top: 0.025rem solid #f5f5f5;
    border-bottom: 0.025rem;
}
.input-text {
    width: 100%;
    height: 2.5rem;
    font-size: 0.7rem;
    color: #999;
    outline: none;
    box-sizing: border-box;
}
.choose-address {
    font-size: 0.7rem;
    color: #999;
    line-height: 2.5rem;
    border-bottom: 0.025rem solid #f5f5f5;
}
.sure-choose {
    margin-top: 0.6rem;
}
</style>