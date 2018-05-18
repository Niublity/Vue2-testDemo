<template>
    <div>
        <Header :title="title"></Header>
    </div>
</template>

<script>
import Header from "../../../components/foodheader/foodheader";
export default {
    name:"searchAddress",
    data() {
        return {
            title:"搜索"
        };
    },
    components: {
        Header
    }
};
</script>
<style lang='scss' scoped>
</style>