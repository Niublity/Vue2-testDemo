<template>
  <div>
    <Header :title="title"></Header>
    <form>
      <input type="text" placeholder="请输入商家或美食名称" class="search-food">
      <div class="submit">提交</div>
    </form>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"
  import footer from "../../components/footernav/footernav"
    export default {
        name: "searchpage",
      data(){
         return{
           title:"搜索"
         }
      },
      components:{
          Header:header,
        Footer:footer
      }
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

  form{
    background-color: #fff;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
  }
  input, .submit{
    height: 1.5rem;
    font-size: .65rem;
    border-radius: .125rem;
    padding: 0 .25rem;

  }
  .search-food{
    width: 80%;
    background: #f2f2f2;
    color: #333;
    border: .025rem solid #e4e4e4;
    font-weight: 600;
  }
  .submit{
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
</style>
