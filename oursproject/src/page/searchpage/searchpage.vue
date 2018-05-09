<template>
  <div>
    <Header :title="title"></Header>

  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"
    export default {
        name: "searchpage",
      data(){
         return{
           title:"搜索"
         }
      },
      components:{
          Header:header
      }
    }
</script>

<style scoped>

</style>
