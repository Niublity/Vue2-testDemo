<template>
    <div class="mm">
      <Header :title="title"></Header>
      <section class="form-container">
        <form>
          <section class="ui-padding-block">
          <div class="input-new">
            <input type="text" placeholder="请填写你的姓名" v-model="des.name">
          </div>
          <router-link to="/home" class="input-new">
            <input type="text" placeholder="小区/写字楼/学校等">
          </router-link>
          <div class="input-new">
            <input type="text" placeholder="请填写详细的送餐地址" v-model="des.address">
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写能够联系到你的手机号" v-model="des.phone">
          </div>
          <div class="input-new">
            <input type="text" placeholder="备用手机电话（选填）" v-model="des.secphone">
          </div>
          </section>
        </form>
      </section>
      <div class="sunbtn" @click="sunbtn">新增地址</div>
    </div>
</template>

<script>
import header from "../../../components/foodheader/foodheader";
export default {
  name: "newaddress",
  data() {
    return {
      title: "新增地址",
      des:{
        name:"",
        address:"",
        desaddress:"",
        phone:"",
        secphone:""
      }
    };
  },
  components: {
    Header: header
  },
  methods: {
    sunbtn() {
      console.log(this.des)
      // var param = {
      //   user_id: JSON.parse(sessionStorage.getItem("user")).user_id,
      //   address: this.$store.state.searchAddress,
      //   address_detail: this.detailAddress,
      //   geohash: "34.80552,113.56189",
      //   name: this.username,
      //   phone: this.phone,
      //   tag: this.labels,
      //   sex: sexs,
      //   phone_bk: this.phone_bk,
      //   tag_type: 2
      // };
      // console.log(param);
      // var url =
      //   "http://cangdu.org:8001/v1/users/" +
      //   JSON.parse(sessionStorage.getItem("user")).user_id +
      //   "/addresses";

      // this.$http.post(url, param).then(response => {
      //   console.log(response.data);
      // });
    }
  }
};
</script>

<style scoped>
.mm {
  width: 100%;
  height: 100%;
  background: white;
}
.form-container {
  margin-top: 0.4rem;
}
.form-container form {
  /* padding: 0 .5rem; */
  display: block;
  margin-top: 0em;
}
.ui-padding-block {
  background: #fff;
  padding-top: 0.4rem;
}
.input-new {
  display: block;
  padding-bottom: 0.4rem;
}
.input-new input {
  display: block;
  width: 15rem;
  font-size: 0.6rem;
  margin: 0 auto;
  padding: 0.3rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}
.sunbtn {
  text-align: center;
  margin: 0.6rem auto;
  width: 15rem;
  background: #4cd964;
  border-radius: 3px;
  font-size: 0.6rem;
  color: #fff;
  line-height: 1.6rem;
  font-weight: 700;
}
</style>

