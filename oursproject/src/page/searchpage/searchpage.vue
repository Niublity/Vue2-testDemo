<template>
  <div>
    <Header :title="title"></Header>
    <form class="searchPage-form">
      <input type="text" placeholder="请输入商家或美食名称" ref="aa" v-model="searchs" class="search-text" @keyup.13="submit">
      <div class="deteleRecord" @click="emptyInput" v-if="renderX">x</div>
      <div class="submit" @click="submit">提交</div>
    </form>
    <section class="searchPage-history">
      <h4 class="searchPage-history-title">搜索历史</h4>
      <ul v-if="renderUl">
        <li class="searchPage-history-list" v-if="searchContent" v-for="(searchData,index) in searchContent">
          <p>{{searchData}}</p>
          <img src="./img/close1.png" alt="" @click="deteleSearch($event,index)">
        </li>
      </ul>
      <footer v-show="searchContent.length" v-if="renderUl" class="clear_history" @click="clearSearch">清空搜索历史</footer>
      <div class="search-none" v-if="renderSearchC">很抱歉！无搜索结果</div>
    </section>

    <Footernav class="searchpage"></Footernav>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"
  import footernav from "../../components/footernav/footernav"

  export default {
    name: "searchpage",
    data() {
      return {
        title: "搜索",
        searchs:"",
        searchContent: [],
        renderSearchC:false,
        renderUl: false
      }
    },
    created() {
      this.renderUl=true
      if (JSON.parse(localStorage.getItem("searchContents"))) {
        this.searchContent = JSON.parse(localStorage.getItem("searchContents"))
      }
    },
    methods: {
      submit() {
        this.renderSearchC=true
        this.renderUl=false
        if (JSON.parse(localStorage.getItem("searchContents"))) {
          this.searchContent = JSON.parse(localStorage.getItem("searchContents"))
        }
        this.searchContent.push(this.searchs)
        localStorage.setItem("searchContents", JSON.stringify(this.searchContent));
      },
      clearSearch() {
        localStorage.clear()
        this.searchContent = []
        this.renderUl = false
      },
      deteleSearch(index){
        var arr=JSON.parse(localStorage.getItem("searchContents"))
        arr.splice(index,1)
        localStorage.setItem("searchContents",JSON.stringify(arr))
        this.searchContent = JSON.parse(localStorage.getItem("searchContents"))
        if (this.searchContent=[]){
          this.renderUl=false
        }
      },
      emptyInput(){
        this.searchs=""
      }
    },
    computed:{
      renderX(){
        if(this.searchs!=""){
          return true
        }else{
          return false
        }

      }
    },
    components: {
      Header: header,
      Footernav: footernav
    }
  }
</script>
<style scoped>
.searchPage-form {
    background-color: #fff;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
    .search-text, .submit {
    height: 1.5rem;
    font-size: .65rem;
    border-radius: .125rem;
    padding: 0 .25rem;
  }
  
  .search-text {
    width: 80%;
    background: #f2f2f2;
    color: #333;
    border: .025rem solid #e4e4e4;
    font-weight: 500;
    outline: none;
  }

  .submit {
    width: 20%;
    background-color: #3190e8;
    border-radius: .125rem;
    color: #fff;
    margin-left: .2rem;
    outline: none;
    text-align: center;
    line-height: 1.5rem;
    font-weight: 100;
  }
  .searchpage {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .deteleRecord{
    position: absolute;
    right: 4.3rem;
    top: 0.85rem;
    color: #1d10d2;
  }

  .searchPage-history{
    position: relative;
  }

  .searchPage-history-title {
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    color: #666;
    font-weight: 700;
  }

  /*搜索列表*/
  .searchPage-history-list {
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    padding: 0 .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: .7rem/2rem Microsoft YaHei;
  }

  .searchPage-history-list img {
    width: .8rem;
    height: .8rem;
  }

  .searchPage-history-list p {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*清空历史记录*/
  .clear_history {
    background-color: #fff;
    color: #3190e8;
    font: .7rem/2rem Microsoft YaHei;
    font-weight: 700;
    text-align: center;
  }
  /*无搜索结果*/
  .search-none{
    font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: .125rem;
    position: absolute;
    left: 0;
    right: 0;
    top: -0.1rem;


  }
</style>
