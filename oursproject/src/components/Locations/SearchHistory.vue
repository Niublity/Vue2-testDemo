<template>
  <div class="city">
    <div class="city_header">
      <router-link to="/CityList">
        <img :src="back" alt="" class="arrow-left">
      </router-link>
      <span class="top_title">{{citys.name}}</span>
      <router-link to="/CityList" class="change_city">切换城市</router-link>
    </div>
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
  /*-------top-------*/
  .city_header .top_title,
  .city_header .change_city{
    color: white;

  }
  .city_header .arrow-left{
    width: 1rem;
    height: 1rem;
  }
  /*中*/
  .city_header .top_title{
    font-size: .8rem;
    font-weight: 400;
  }
  /*右*/
  .city_header .change_city{
    font-size: .6rem;
    font-weight: 100;
  }
</style>
