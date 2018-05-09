<template>
  <div >
    <Header :title="title" class="address-header"></Header>
    <header class="edit-container">
      <span class="edit">编辑</span>
    </header>
    <section class="address-section">
      <!--收获地址-->
      <ul class="address-list">
        <li>
          <p>1111111详细送餐地址</p>
          <p>11111111手机号</p>
        </li>
      </ul>
      <!--新增地址-->
      <router-link to="/accountdetail/editaddress/newaddress">
        <div class="new-address">
          <span>新增地址</span>
          <img src="./img/14.png" alt="">
        </div>
      </router-link>
    </section>
  </div>

</template>

<script>
  import header from "../../components/foodheader/foodheader"

  export default {
    name: "editaddress",
    data() {
      return {
        title: "编辑地址"
      }
    },
    components: {
      Header: header
    }
  }
</script>

<style scoped>
  .address-section {
    margin-top: .4rem;
  }

  /*编辑*/
  .edit {
    position: fixed;
    top: .7rem;
    right: .4rem;
    font-size: .7rem;
    color: #fff;
    font-weight: 100;
  }

  /*地址列表*/

  .address-list {
    border-top: 1px solid #d9d9d9;
    background: white;
    border-bottom: 1px solid #d9d9d9;

  }

  .address-list li {
    padding: .4rem;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }

  .address-list li p {
    line-height: .96rem;
    font-size: .6rem;
    color: #333;
  }

  /*新增地址*/
  .new-address {
    width: 100%;
    height: 2rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .4rem;
    margin-top: .4rem;
    box-sizing: border-box;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }

  .new-address span {
    font-size: .7rem;
    color: #333;
  }

  .new-address img {
    width: .7rem;
    height: .7rem;
  }

</style>
