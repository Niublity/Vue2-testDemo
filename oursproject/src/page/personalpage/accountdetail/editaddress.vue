<template>
  <div>
    <Header :title="title" class="address-header"></Header>
    <header class="edit-container">
      <span class="edit" @click="showCH">{{des}}</span>
    </header>
    <section class="address-section">
      <!--收获地址-->
      <ul class="address-list">
        <li v-for="(value,index) in address">
          <div>
          <p>{{value.address}}</p>
          <p>{{value.phone}}</p>
          </div>
          <div v-show="showclose">
            <img src="./img/close.png" alt=""  @click="deletaddress($event,value.id,index)">
          </div>
        </li>
      </ul>
     <!--新增地址-->
      <router-link to="/accountdetail/editaddress/newaddress">
        <div class="new-address">
          <span>新增地址</span>
          <img src="../img/14.png" alt="">
        </div>
      </router-link>
    </section>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <router-view class="positions11"></router-view>
    </transition>
  </div>
</template>

<script>
import header from "../../../components/foodheader/foodheader";

export default {
  name: "editaddress",

  data() {
    return {
      title: "编辑地址",
      showclose: false,
      address: [],
      des: "编辑"
    };
  },

  components: {
    Header: header
  },

  created() {
    let url =
      "http://cangdu.org:8001/v1/users/" +
      JSON.parse(sessionStorage.getItem("user")).user_id +
      "/addresses";
    this.$http.get(url).then(res => {
      console.log(res);
      this.address = res.data;
    });
  },
  methods: {
    showCH() {
      this.showclose = !this.showclose;
      if (this.showclose) {
        this.des = "完成";
      } else {
        this.des = "编辑";
      }
    },
    deletaddress($event,id,index) {
      let url =
        "http://cangdu.org:8001/v1/users/" +
        JSON.parse(sessionStorage.getItem("user")).user_id +
        "/addresses/" +
        id;
      this.$http.delete(url).then(res => {
        // console.log(res);
        // this.address = res.data
        // console.log($event.target.parentNode.parentNode.parentNode)
        // var el = $event.target.parentNode.parentNode.parentNode
        // // console.log(el)
        // el.remove(index)
        let url =
          "http://cangdu.org:8001/v1/users/" +
          JSON.parse(sessionStorage.getItem("user")).user_id +
          "/addresses";
        this.$http.get(url).then(res => {
          console.log(res);
          this.address = res.data;
        });
      });
    }
  }
};
</script>

<style scoped>
/*新增地址*/
.positions11{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
/**/
.address-section {
  margin-top: 0.4rem;
}

/*编辑*/

.edit {
  position: fixed;
  top: 0.7rem;
  right: 0.4rem;
  font-size: 0.7rem;
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
  padding: 0.4rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address-list > li:nth-child(1) {
  background: #fff8c3;
}
.address-list li div:nth-child(2) img {
  width: 0.8rem;
}

.address-list li p {
  line-height: 0.96rem;
  font-size: 0.6rem;
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
  padding: 0.2rem 0.4rem;
  margin-top: 0.4rem;
  box-sizing: border-box;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}

.new-address span {
  font-size: 0.7rem;
  color: #333;
}

.new-address img {
  width: 0.7rem;
  height: 0.7rem;
}
</style>
