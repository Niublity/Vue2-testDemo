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
      path:"/shopcar",
      name:Shopcar,
      component:Shopcar
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
    }
  ]
})
