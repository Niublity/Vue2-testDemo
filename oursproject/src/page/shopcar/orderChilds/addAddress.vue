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
                            <img :src="sex?grey:green" alt="" @click="boysC" ref="boy">
                            <span>先生</span>
                        </span>
                        <span class="choose-sex">
                            <img :src="sex?green:grey" alt="" @click="girlsC">
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
                    <input type="text" placeholder="备选电话" class="input-text  input-planB" v-if="planB" v-model="phone_bk">
                </section>
            </section>
            <section class="section-wrapper">
                <span class="section-left">送餐地址</span>
                <section class="section-right">
                    <router-link to="/orderforgoods/chooseAddress/addAddress/searchAddress">
                        <div type="text" class="choose-address" ref="address">{{searchAddressDetail}}</div>
                    </router-link>
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
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <router-view class="position"></router-view>
        </transition>
    </div>
</template>

<script>
import Header from "../../../components/foodheader/foodheader";
import Jump from "../../../components/jumpkuangkuang/jumpkuang";
import green from "../../personalpage/vipcenter/image/green.png";
import grey from "../../personalpage/vipcenter/image/grey.png";
export default {
    name: "addAddress",
    data() {
        return {
            green: green,
            grey: grey,
            title: "添加地址",
            planB: false,
            shows: false,
            username: "",
            warnText: "请输入姓名",
            phone: "",
            detailAddress: "",
            labels: "",
            address: [],
            sex: false,
            phone_bk:"",
            
        };
    },
    methods: {
        goBack() {
            if (this.username == "") {
                this.warnText = "请输入姓名";
            } else if (this.username != "" && this.phone == "") {
                this.warnText = "请输入电话号码";
            } else if (
                this.username != "" &&
                this.phone != "" &&
                this.$store.state.searchAddress == ""
            ) {
                this.warnText = "选择地址";
            } else if (
                this.username != "" &&
                this.phone != "" &&
                this.$store.state.searchAddres != "" &&
                this.detailAddress == ""
            ) {
                this.warnText = "详细地址输入错误";
            } else if (
                this.username != "" &&
                this.phone != "" &&
                this.$store.state.searchAddres != "" &&
                this.detailAddress != "" &&
                this.labels == ""
            ) {
                this.warnText = "标签错误";
            } else {
                var sexs=null
                if (this.sex==false) {
                    sexs=1
                }else{
                    sexs=2
                }
                console.log(this.detailAddress);
                
                var param={ 
                    user_id:JSON.parse(sessionStorage.getItem("user")).user_id,address: this.$store.state.searchAddress,
                    address_detail: this.detailAddress,
                    geohash:"34.80552,113.56189",
                    name: this.username,
                    phone: this.phone,
                    tag: this.labels,
                    sex:sexs,
                    phone_bk:this.phone_bk,
                    tag_type:2
                    }
                    console.log(param)
                var url="http://cangdu.org:8001/v1/users/"+JSON.parse(sessionStorage.getItem("user")).user_id+"/addresses"

                this.$http.post(url,param).then((response)=>{
                    console.log(response.data);
                })
                // this.$store.commit("AddaddressDetaial",data);
                // this.$router.push({ path: "/orderforgoods/chooseAddress" });
            }
            console.log(this.sex);
            this.shows = true;
        },
        planBstate() {
            this.planB = true;
        },
        showHide() {
            this.shows = false;
            console.log("1111");
        },
        boysC() {
            this.sex = false;
        },
        girlsC() {
            this.sex = true;
        }
    },
    computed: {
        searchAddressDetail() {
            if (this.$store.state.searchAddress) {
                return this.$store.state.searchAddress;
            } else {
                return "小区/写字楼/学校等";
            }
        }
    },
    components: {
        Header,
        Jump
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