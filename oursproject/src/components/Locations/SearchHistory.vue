<template>
  <div class="city">
    <div class="city_header">
      <router-link to="/CityList">
        <img :src="back" alt="" class="arrow-left">
      </router-link>
      <span class="top_title">{{citys.name}}</span>
      <router-link to="/CityList" class="change_city">切换城市</router-link>
    </div>
    <form class="city_form">
     <div> <input type="text" placeholder="输入学校、商务楼、地址" class="form_input"></div>
      <div><button class="form_btn">提交</button></div>
    </form>
  </div>
</template>

<script>

  /*引入图片*/
  import back from "./img/返回 (1).png";

  export default {
    name: "SearchHistory",
    data() {
      return {
        citys: '',
        back
      }
    },
    created() {
      var city = this.$route.params.id;
      console.log(city);
      this.axios.get("http://cangdu.org:8001/v1/cities/" + city).then((response) => {
        console.log(response.data);
        this.citys = response.data;
      })
    }
  }
</script>

<style scoped>
  .city {
    background: #f5f5f5;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

  }
  /*-------top-------*/
  .city_header .top_title,
  .city_header .change_city {
    color: white;

  }

  .city_header .arrow-left {
    width: 1rem;
    height: 1rem;
  }

  /*中*/
  .city_header .top_title {
    font-size: .8rem;
    font-weight: 400;
  }

  /*右*/
  .city_header .change_city {
    font-size: .6rem;
    font-weight: 100;
  }
  /*-------表单-------*/
  .city_form{
    display: block;
    background: white;
    margin-top: 2.45rem;
    padding:.4rem 5% .4rem 5%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  /*输入框*/
  .city_form .form_input{
    width: 100%;
    height: 1.4rem;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    font-size: .65rem;
    border-radius: .1rem;
    margin-bottom: .4rem;
    padding: 0 .3rem;
    font-weight: 200;
  }
  /*按钮*/
  .city_form .form_btn{
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    width: 100%;
    height: 1.4rem;
    border: 1px solid #3190e8;
    border-radius: .1rem;
font-weight: 100;
  }
</style>
