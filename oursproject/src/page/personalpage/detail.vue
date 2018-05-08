<template>
  <div>
    <Header :title="title"></Header>
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
    components: {
      Header: header
    }
  }
</script>

<style scoped>

</style>
