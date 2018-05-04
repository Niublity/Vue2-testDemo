import Vue from 'vue'
import Router from 'vue-router'
import CityList from "@/components/Locations/CityLIst"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/CityList',
      name: 'CityList',
      component: CityList
    }
  ]
})
