import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SearchPage from '@/components/views/SearchPage'
import MainContent from '@/components/views/MainContent'
import NewsList from '@/components/views/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/content/__all__',
      children: [
        {
          path: 'search',
          name: 'Search',
          component: SearchPage
        },
        {
          path: 'content',
          name: 'content',
          redirect: '/__all__',
          children: [
            {
              path: ':id',
              component: NewsList
            }
          ],
          component: MainContent
        }
      ],
      component: Index
    }
  ]
})
