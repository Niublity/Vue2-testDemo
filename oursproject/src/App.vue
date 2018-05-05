<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*城市列表导航条*/
  .city_header{
    width: 100%;
    height: 1.97rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
