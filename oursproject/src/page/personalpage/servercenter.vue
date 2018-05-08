<template>
  <div>
    <Header :title="title"></Header>
    <div class="serverselect">
      <div>
        <img src="./img/12.png" alt="">
        <p>在线客服</p>
      </div>
      <div>
        <img src="./img/13.png" alt="">
        <p>在线客服</p>
      </div>
    </div>
    <h4 class="problemtitle">热门问题</h4>
    <ul class="problemslist">
      <li v-for="value in problems">
        <router-link :to="{path:'/servercenter/'+value.id,query:{name:value.name,des:value.des}}" class="astyle">
          {{value.name}}
          <img src="./img/14.png" alt="">
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "servercenter",
    data() {
      return {
        title: "服务中心",
        problems:[]
      }
    },
    components: {
      Header: header
    },
    created(){
      this.$http.get("http://cangdu.org:8001/v3/profile/explain").then((response)=>{
        this.problems=this.publicfunction.dealjson(response.data)
        console.log(this.problems)
      })
    }
  }
</script>
<style>

</style>
<style scoped>
  .serverselect {
    background-color: white;
    overflow: hidden;
    border-bottom: .05rem solid #f5f5f5;
  }

  .serverselect > div {
    height: 4rem;
    text-align: center;
    width: 49.5%;
    float: left;

  }

  .serverselect div:nth-child(1) {
    border-right: .05rem solid #f5f5f5;
  }

  .serverselect img {
    margin-top: 1rem;
    width: 1rem;
  }

  .serverselect p {
    width: 100%;
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }

  .problemtitle {
    background-color: white;
    font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
  }

  .problemslist {
    background-color: white;
  }

  .problemslist li {
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .6rem;
  }

  .astyle {
    width: 100%;
    display: flex;
    color: #666;
    justify-content: space-between;
    align-items: center;
  }
  .astyle img{
    width: .6rem;
  }
</style>
