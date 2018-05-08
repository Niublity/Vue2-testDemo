import Vue from 'vue'
import Router from 'vue-router'
import CityList from "@/components/Locations/CityLIst"
import Shopshow from "../page/shopshow/shopshow"
import SearchHistory from "@/components/Locations/SearchHistory"
import Login from "@/components/User/Login"
import Home from "../page/homepage/homepage"
import Search from "../page/searchpage/searchpage"
import Personal from "../page/personalpage/personalpage"
import Order from "../page/orderpage/orderpage"
import Shopcar from "../page/shopcar/shopcar"
import Balance from "../page/personalpage/balance"
import Integral from "../page/personalpage/integral"
import Coupon from "../page/personalpage/coupon"
import Download from "../page/personalpage/download"
import Servercenter from "../page/personalpage/servercenter"
import Vipcenter from "../page/personalpage/vip"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: Home,
      component: Home
    },
    {
      path: "/search",
      name: Search,
      component: Search
    },
    {
      path: "/shopcar",
      name: Shopcar,
      component: Shopcar
    },
    {
      path: "/personal",
      name: Personal,
      component: Personal
    },
    {
      path: '/CityList',
      name: 'CityList',
      component: CityList
    },
    {
      path: "/shopshow",
      name: "Shopshow",
      component: Shopshow
    },
    {
      path: '/city/${id}',
      name: 'SearchHistory',
      component: SearchHistory
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/balance",
      name: Balance,
      component: Balance
    },
    {
      path: "/integral",
      name: Integral,
      component: Integral
    }, {
      path: "/coupon",
      name: Coupon,
      component: Coupon
    }, {
      path: "/download",
      name:Download,
      component:Download
    },
    {
      path:"/servercenter",
      name:Servercenter,
      component:Servercenter
    },
    {
      path:"/vipcenter",
      name:Vipcenter,
      component:Vipcenter
    }
  ]
})
