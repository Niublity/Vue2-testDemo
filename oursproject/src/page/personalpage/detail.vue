<template>
  <div class="bg">
    <Header class="header" :title="title"></Header>
    <div class="des"><h2>{{$route.query.des}}</h2></div>
  </div>
</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "detail",
    data() {
      return {
        title: ""
      }
    },
    created() {
      this.title = this.$route.query.name
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .bg {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 16rem;
    height: 100%;
    overflow: scroll;
    background-color: white;
  }
  .bg::-webkit-scrollbar{
    display: none;
  }

  .des {
    margin-top: 2rem;
    font-size: .65rem;
    padding: 0 .7rem;
    color: #666;
    padding-bottom: 2rem;
  }

  h2 {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
</style>
