import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Location from '@/pages/location/Location'
import Detail from '@/pages/detail/Detail'
import detailGalary from '@/pages/detail/components/detailGalary'
import mapContent from '@/pages/detail/components/mapContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      children: [{
        path: 'galary',
        component: detailGalary
      },{
        path: 'map',
        component: mapContent
      }]
    }
  ]
})
