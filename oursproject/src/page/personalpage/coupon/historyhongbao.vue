<template>
  <div class="historybody">
    <Header class="header" :title="title"></Header>
    <ul class="historybody_list">
      <li class="historybody_li" v-for="value in hongbao ">
        <section class="historybody_container">
          <div class="historybody_first">
            <span>￥</span>
            <span>5</span>
            <span>.</span>
            <span>0</span>
            <p>满 25 元可用</p>
          </div>
          <div class="historybody_second">
            <h4>{{value.name}}</h4>
            <p>{{value.description_map.validity_periods
              }}</p>
            <p>{{value.description_map.phone}}</p>
          </div>
          <img class="hongbaoimg" src="./img/QQ2018.png" alt="">
        </section>
        <p v-if="value.limit_map" class="limitxx">{{value.limit_map.restaurant_flavor_ids}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  import header from "../../../components/foodheader/foodheader"

  export default {
    name: "historyhongbao",
    data() {
      return {
        title: "历史红包",
        hongbao:[]
      }
    },
    components: {
      Header: header
    },
    created() {
      let url = "http://cangdu.org:8001/promotion/v2/users/"+JSON.parse(sessionStorage.getItem("user")).user_id+"/expired_hongbaos?limit=20&offset=0"
      this.$http.get(url).then((res)=>{
        console.log(res)
        this.hongbao = res.data
      })
    }
  }
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .historybody {
    margin-top: 2rem;
    height: 100%;
    background: #f5f5f5;
  }

  .historybody_list {
    padding: 1rem .5rem;
  }

  .historybody_li {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==
    ) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    position: relative;
  }

  .historybody_container {
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
    position: relative;
  }

  .historybody_first {
    width: 4.2rem;
    border-right: .025rem dotted #ccc;
    font-size: 0;
  }

  .historybody_first span {
    font-size: .75rem;
    color: #ccc;
    font-weight: 700;
  }

  .historybody_first > span:nth-child(2) {
    font-size: 2rem;
    font-weight: 200;
  }

  .historybody_first p {
    margin-top: .5rem;
    font-size: .4rem;
    color: #999;
  }

  .historybody_second {
    flex: 2;
    margin-left: 1.5rem;
  }

  .historybody_second h4 {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
    font-weight: 200;
  }

  .historybody_second p {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
    margin-top: .3rem;
  }

  .hongbaoimg {
    position: absolute;
    right: 0.5rem;
    top: 0.8rem;

  }
  .limitxx{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
  }
</style>
