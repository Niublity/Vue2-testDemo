<template>
  <div>
    <Header :title="title"></Header>
    <section class="quick-remark">
      <p>快速备注</p>
      <ul class="remark-items-container">
        <li class="remark-items" v-for="(remarktips,Index) in remarkInfor">
          <span v-for="(val,index) in remarktips" @click="chooseRemark(index,$event,val)">{{val}}</span>
        </li>
      </ul>
    </section>
    <section class="other-remark">
      <p>其他备注</p>
      <textarea placeholder="请输入备注内（可不填）" class="input_text" v-model="inputText"></textarea>
    </section>
    <section class="sure-remark">
      <div @click="goBack">确定</div>
    </section>
  </div>
</template>

<script>
import header from "../../../components/foodheader/foodheader";
export default {
    name: "orderRemark",
    data() {
        return {
            title: "订单备注",
            remarkInfor: [],
            remarktips: [],
            inputText: ""
        };
    },
    components: {
        Header: header
    },
    methods: {
        chooseRemark(index, $event, val) {
            for (
                let i = 0;
                i < $event.currentTarget.parentNode.childNodes.length;
                i++
            ) {
                $event.currentTarget.parentNode.childNodes[i].style.background =
                    "";
                $event.currentTarget.parentNode.childNodes[i].style.color = "";
            }
            $event.currentTarget.style.background = "#3190e8";
            $event.currentTarget.style.color = "#fff";
            console.log(val);
        },
        goBack() {
            // console.log(this.inputText);
            this.$router.go(-1);
        }
    },
    created() {
        this.$http
            .get("http://cangdu.org:8001/v1/carts/1/remarks")
            .then(response => {
                // console.log(typeof response.data.remarks[0]);
                this.remarkInfor = response.data.remarks;
                for (let i = 0; i < this.remarkInfor.length; i++) {
                    // console.log(this.remarkInfor[i]);
                    for (let key in this.remarkInfor[i]) {
                        // console.log(this.remarkInfor[i][key]);
                    }
                }
            });
    }
};
</script>


<style lang='scss' scoped>
.quick-remark,
.other-remark {
    background-color: #fff;
    margin-top: 0.4rem;
    padding: 0 0.6rem 1rem;
}
.remark-items-container {
    display: flex;
    flex-wrap: wrap;
}
.remark-items-container .remark-items {
    margin: 0 0.6rem 0.6rem 0;
    box-sizing: border-box;
}

.quick-remark p:nth-child(1),
.other-remark p:nth-child(1) {
    font-size: 0.65rem;
    color: #333;
    line-height: 2rem;
}
.remark-items-container .remark-items span:first-child {
    border-left: 0.025rem solid #3190e8;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
}
.remark-items-container .remark-items span:last-child {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    border-right: 0.025rem solid #3190e8 !important;
}
.remark-items-container .remark-items span:nth-child(2) {
    border-left: solid 0px red;
    border-right: solid 0px red;
}
.quick-remark .remark-items span {
    font-size: 0.6rem;
    color: #333;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    display: inline-block;
}
// 其他备注
.input_text {
    width: 100%;
    background-color: #f9f9f9;
    border: 0.025rem solid #eee;
    resize: none;
    min-height: 4.5rem;
    border-radius: 0.2rem;
    font-size: 0.6rem;
    color: #666;
    padding: 0.5rem;
    box-sizing: border-box;
}

</style>