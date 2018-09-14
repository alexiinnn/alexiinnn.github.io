import Vue from 'vue'
import Router from 'vue-router'
import TicketsView from '@/components/TicketsView'
import StatsView from '@/components/StatsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tickets',
      component: TicketsView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    }
  ]
})
