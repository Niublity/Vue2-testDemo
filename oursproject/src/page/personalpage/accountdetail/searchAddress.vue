<template>
    <div class="searchAddress">
        <Header :title="title"></Header>
        <form class="searchPage-form">
            <input type="text" placeholder="请输入小区/写字楼/学校等" class="search-text" v-model="keywords" @keyup.13="searchAddress">
            <div class="deteleRecord" v-if="keywords" @click="clearKeyWords">x</div>
            <button class="submit" @click="searchAddress">搜索</button>
        </form>
        <section class="empty-tips" v-if="emptyTips">
            <p>找不到地址？</p>
            <p>尝试输入小区、写字楼或学校名</p>
            <p>详细地址（如门牌号等）可稍后输入哦</p>
        </section>

        <ul class="search_record">
            <div>
                <li v-for="record in searchRecord" @click="addressDetail(record)">
                    <h4 class="record_title">{{record.name}}</h4>
                    <p class="record_address">{{record.address}}</p>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
import Header from "../../../components/foodheader/foodheader";
export default {
    name: "searchAddress",
    data() {
        return {
            title: "搜索",
            keywords: "",
            searchRecord: null,
            emptyTips: true
        };
    },
    methods: {
        // 获取点击的地址信息
        addressDetail(record) {
            this.$store.state.searchAddress = record.name;
            this.$router.push({
                path: "/orderforgoods/chooseAddress/addAddress"
            });
        },
        // 清除关键字
        clearKeyWords() {
            this.keywords = "";
        },
        // 搜索地址
        searchAddress() {
            this.$http
                .get(
                    "http://cangdu.org:8001/v1/pois?city_id=32&keyword=" +
                        this.keywords +
                        "&type=search"
                )
                .then(response => {
                    // console.log(response.data);
                    this.searchRecord = response.data;
                });
            this.emptyTips = false;
        }
    },
    components: {
        Header
    }
};
</script>
<style lang='scss' scoped>

.searchAddress {
    background-color: #fff;
}
.searchPage-form {
    padding: 0.7rem;
    display: flex;
    position: relative;
}
.search-text,
.submit {
    font-size: 0.65rem;
    outline: none;
}
.search-text {
    height: 1.5rem;
    flex: 4;
    background: #f1f1f1;
    color: #999;
    margin-right: 0.6rem;
    padding: 0 0.4rem;
    border-radius: 0.125rem;
}

.submit {
    flex: 1;
    background-color: #3190e8;
    border-radius: 0.15rem;
    color: #fff;
    border: 0;
}
.deteleRecord {
    position: absolute;
    right: 4.8rem;
    top: 1rem;
    color: #1e1594;
}
/*温馨提示*/
.empty-tips {
    position: absolute;
    top: 50%;
    left: 1.2%;
    width: 100%;
    text-align: center;
}
.empty-tips > p {
    font-size: 0.5rem;
    color: #aaa;
    line-height: 0.7rem;
}
/*搜索列表*/
.search_record {
    background: white;
    padding: 0.7rem;
    z-index: 10;
}

.search_record li {
    border-bottom: 0.025rem solid #f5f5f5;
    padding: 0.7rem 0;
    box-sizing: border-box;
    line-height: 1rem;
}

.record_title {
    font-size: 0.75rem;
    color: #555;
}

.record_address {
    font-size: 0.65rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: 0.03rem;
}
</style>