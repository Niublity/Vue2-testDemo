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
      <div>
        <input type="text" placeholder="输入学校、商务楼、地址" class="form_input" v-model="keyword">
      </div>
      <div>
        <div class="form_btn" @click="render123">提交</div>
      </div>
    </form>
    <p class="search_history" v-if="">搜索历史</p>
    <ul class="search_record">
      <li v-for="record in searchRecord">
        <h4 class="record_title">{{record.name}}</h4>
        <p class="record_address">{{record.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

  /*引入图片*/
  import back from "./img/返回 (1).png";

  export default {
    name: "SearchHistory",
    data() {
      return {
        back,
        //当前城市
        citys: "",
        cityID:"",
        //搜索关键字
        keyword: "",
        //搜索历史
        searchRecord:null,
      }
    },
    created() {
      //获取当前城市Id
      this.cityID= this.$route.params.id;
      console.log(this.cityID);
      //获取点击城市信息
      this.axios.get("http://cangdu.org:8001/v1/cities/" + this.cityID).then((response) => {
        //console.log(response.data);
        this.citys = response.data;
      })
    },
    methods:{
      render123(){
        //获取搜索信息
        this.$http.get("http://cangdu.org:8001/v1/pois?city_id=" + this.cityID + "&keyword=" + this.keyword + "&type=search").then((response) => {
          console.log(response.data);
          this.searchRecord = response.data;
        })

        // console.log(this.cityID)
        // console.log(this.keyword)
        // console.log("http://cangdu.org:8001/v1/pois?city_id=" + this.cityID + "&keyword=" + this.keyword + "&type=search");
      }
    }
  }
</script>

<style scoped>
  .city {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
  .city_form {
    display: block;
    background: white;
    margin-top: 2.45rem;
    padding: .4rem 5% .4rem 5%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }

  /*输入框*/
  .city_form .form_input {
    width: 100%;
    height: 1.4rem;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    font-size: .65rem;
    border-radius: .1rem;
    margin-bottom: .4rem;
    padding: 0 .3rem;
    font-weight: 200;
    outline: none;
  }

  /*按钮*/
  .city_form .form_btn {
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    width: 100%;
    height: 1.4rem;
    border: 1px solid #3190e8;
    border-radius: .1rem;
    font-weight: 100;
    text-align: center;
    line-height: 1.4rem;
  }

  /*----搜索界面-----*/
  .search_history {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.475rem;
    padding-left: .5rem;
    color: #333;
  }

  .city .search_record {
    background: white;
    border-top: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.57rem;
  }

  .search_record li {
    border-bottom: 1px solid #e4e4e4;
    padding: .65rem 4.5% 0 4.5%;
    box-sizing: border-box;
  }
  .search_record .record_title{
    font-size: .65rem;
    color: #333;
    font-weight: 300;
  }
  .search_record .record_address{
    font-size: .45rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: .55rem 0;
    letter-spacing: 0.03rem;
    font-weight: 200;
  }
</style>
