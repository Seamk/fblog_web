import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/views/Menu'
import Chat from '@/components/views/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/menu',
      name:'menu',
      component: Menu
    },
    {
      path:'/chat',
      name:'chat',
      component:Chat
    }
  ]
})
