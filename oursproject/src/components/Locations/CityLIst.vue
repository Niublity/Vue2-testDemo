<template>
  <div class="city">
    <!--头部-->
    <div class="city_header">
      <span class="head_logo" @click="reload">ele.me</span>
      <span>
        <router-link to="/login" class="head_login">登录|</router-link><a href="##" class="head_login">注册</a>
      </span>
    </div>
    <div class="header_two">
      <span>当前定位城市：</span>
      <span>定位不准时，请在城市列表中选择</span>
    </div>
    <!--当前城市-->
    <router-link :to="{name:'SearchHistory',params:{id:guess.id}}" class="now_city">
      <span>{{guess.name}}</span>
      <i class="el-icon-arrow-right arrow_right"></i>
    </router-link>
    <!--热门城市-->
    <div class="city_list">
      <h4 class="city_title">热门城市</h4>
      <ul class="hot">
        <li v-for="CityHot in CityHots">
          <router-link :to="{name:'SearchHistory',params:{id:CityHot.id}}">{{CityHot.name}}</router-link>
        </li>
      </ul>
    </div>

    <!--所有城市-->
    <div class="city_list" v-for="(groups,index) in groupss">
      <h4 class="city_title">{{index}} <span v-if="index=='A'">（按字母排序）</span></h4>
      <ul class="allCity">
        <li v-for="group in groups">
          <router-link :to="{name:'SearchHistory',params:{id:group.id}}">{{group.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  /*引入图片*/
  import user from './img/user.jpg';

  //请求接口文档
  let apihot = "http://cangdu.org:8001/v1/cities?type=hot";
  let apigroup = "http://cangdu.org:8001/v1/cities?type=group";
  let apiguess = "http://cangdu.org:8001/v1/cities?type=guess";
  export default {
    name: "CityLIst",
    data() {
      return {
        user,
        guess: '',
        CityHots: null,
        groupss: null,
      }
    },
    created() {
      this.axios.get(apiguess).then((response) => {
        // console.log(response.data);
        this.guess = response.data;
        // console.log(this.guess.id)
      })
      this.axios.get(apihot).then((response) => {
        // console.log(response.data);
        this.CityHots = response.data;
      });
      this.axios.get(apigroup).then((response) => {
        //console.log(response.data);
        this.groupss = this.group(response.data)
      });
      this.$http.get(apiguess).then((response) => {
        // console.log(response.data);
        this.guess = response.data;
        this.localnow = response.data.id;
        // console.log(this.localnow)
        // console.log(this.$router.params);
      })
    },
    methods: {
      reload() {
        location.reload();
      }
    }

  }

</script>
<style>

</style>
<style scoped>
  span {
    font-weight: 200;
  }

  .city {
    box-sizing: border-box;
  }

  /*------头部-----*/

  .city_header .head_logo {
    font-size: .7rem;
    color: white;
    height: 1.95rem;
    line-height: 1.95rem;
    font-weight: 100;
    letter-spacing: 0.02rem;
  }

  .city_header .head_login {
    font-size: .65rem;
    color: white;
    font-weight: 100;
    letter-spacing: 0.02rem;
  }

  /*第二行*/
  .city .header_two {
    background: white;
    line-height: 1.45rem;
    display: flex;
    justify-content: space-between;
    padding: 2.35rem 0.45rem 0 0.45rem;
    border-bottom: 1px solid #e4e4e4;
  }

  .header_two span {
    font-size: .55rem;
    color: #666;
  }

  /*第三行*/
  .city .now_city {
    background: white;
    padding: 0 .45rem;
    width: 100%;
    height: 1.8rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e4e4e4;
  }

  .city .now_city span:first-of-type {
    color: #3190e8;
    font-size: .7rem;
  }

  .now_city .arrow_right {
    color: #999;
  }

  /*-----城市列表-----*/
  .city .city_list {
    margin-top: .4rem;
    background: white;
    overflow: hidden;
  }

  /*标题*/
  .city_list .city_title {
    color: #666;
    background: white;
    font-size: 0.55rem;
    text-indent: 0.45rem;
    line-height: 1.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }

  .city_title span {
    font-size: .475rem;
    color: #999;
  }

  .city_list ul li {
    box-sizing: border-box;
    float: left;
    width: 25%;
    height: 1.75rem;
    line-height: 1.75rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
  }

  .city_list .hot li a {
    color: #3190e8;
    font-size: 0.6rem;
  }

  .city_list .allCity li a {
    color: #666;
    font-size: 0.6rem;
    font-weight: 200;
  }
</style>
