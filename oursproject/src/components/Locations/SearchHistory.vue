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
      <form>
        <input type="text" placeholder="输入学校、商务楼、地址" class="form_input" v-model="keyword" @keyup.13="refreshPage()" required="required">
        <input type="submit" class="form_btn" @click="renderSearch" value="提交">
      </form>
    </form>
    <p class="search_history">搜索历史</p>
    <section class="searchHistorys-container" v-if="Records">
      <ul class="recordInfor">
        <li v-for="Record in Records">
          <h4 class="record_title">{{Record.name}}</h4>
          <p class="record_address">{{Record.address}}</p>
        </li>
      </ul>
      <footer class="clear-all-history" @click="clearHistory">清空所有</footer>
    </section>
    <ul class="search_record">
      <router-link to="/home">
        <li v-for="record in searchRecord" @click="requireInfor(record)">
          <h4 class="record_title">{{record.name}}</h4>
          <p class="record_address">{{record.address}}</p>
        </li>
      </router-link>
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
        cityID: "",
        //搜索关键字
        keyword: "",
        //搜索历史
        searchRecord: null,
        Records:[]
      }
    },
    created() {
      //获取当前城市Id
      this.cityID = this.$route.params.id;
      console.log(this.cityID);
      //获取点击城市信息
      this.axios.get("http://cangdu.org:8001/v1/cities/" + this.cityID).then((response) => {
        //console.log(response.data);
        this.citys = response.data;
      })
      // localStorage.setItem("Record","asd")
      if(localStorage.getItem("Record")){
        this.Records.push(JSON.parse(localStorage.getItem("Records")))
      }
    },
    methods: {
      renderSearch() {
        //获取搜索信息
        this.$http.get("http://cangdu.org:8001/v1/pois?city_id=" + this.cityID + "&keyword=" + this.keyword + "&type=search").then((response) => {
          //console.log(response.data);
          this.searchRecord = response.data;
        })
      },
      refreshPage() {
        console.log("你按了回车")
        this.$http.get("http://cangdu.org:8001/v1/pois?city_id=" + this.cityID + "&keyword=" + this.keyword + "&type=search").then((response) => {
          //console.log(response.data);
          this.searchRecord = response.data;
        })
        // console.log(JSON.parse(localStorage.getItem("Record")));
      },
      requireInfor(record) {
        // console.log(record);
        console.log(JSON.parse(JSON.stringify(record)));
        console.log(this.Records)
        if(localStorage.getItem("Record")){
          this.Records.push(JSON.parse(localStorage.getItem("Record")))
        }else{
          localStorage.setItem("Record",JSON.stringify(record))
          this.Records.push(JSON.parse(JSON.stringify(localStorage.getItem("Record"))))
        }
      },
      clearHistory() {
        console.log(this.Record);
        //localStorage.removeItem("Record");

      }
    },
    // computed: {
    //   aa() {
    //     return console.log(localStorage.hasOwnProperty("this.searchHistorys"))
    //   }
    // }
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

  .city .recordInfor {
    background: white;
    border-top: 1px solid #e4e4e4;
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 7.3rem;*/
  }

  .search_record li, .recordInfor li {
    border-bottom: 1px solid #e4e4e4;
    padding: .65rem 4.5% 0 4.5%;
    box-sizing: border-box;
  }

  .record_title {
    font-size: .65rem;
    color: #333;
    font-weight: 300;
  }

  .record_address {
    font-size: .45rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: .55rem 0;
    letter-spacing: 0.03rem;
    font-weight: 200;
  }

  /*清空所有*/
  .searchHistorys-container {
    position: relative;
  }

  .clear-all-history {
    width: 100%;
    font-size: .7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background: #fff;
    font-weight: 200;
  }
</style>
