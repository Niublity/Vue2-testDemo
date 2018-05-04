<template>
  <div>
    搜索历史
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "SearchHistory",
    data() {
      return {
        msg: ""
      }
    },
    created(){
      this.msg = this.$route.params.id
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>

</style>
