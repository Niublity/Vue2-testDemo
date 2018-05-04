import Vue from 'vue'
import Router from 'vue-router'
import CityList from "@/components/Locations/CityLIst"
import Shopshow from "../page/shopshow/shopshow"
import SearchHistory from "@/components/Locations/SearchHistory"
import Login from "@/components/User/Login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/CityList',
      name: 'CityList',
      component: CityList
    },
    {
      path:"/Shopshow",
      name:"Shopshow",
      component:Shopshow
    },
    {
      path: '/city/:id',
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
