import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/login/Login.vue";
import ShouYe from '../components/shouye/ShouYe.vue'
import Register from '../components/register/Register.vue'
import Personal from '../components/personal/Personal.vue'
import Privacy from '../components/personal/Privacy.vue'
import Integral from '../components/personal/Integral.vue'
import KaoShi from '../components/kaoshi/KaoShi.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shouye' // 默认路径
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/shouye',
      name: 'shouye',
      component: ShouYe
    }, {
      path: '/kaoshi',
      name: 'kaoshi',
      component: KaoShi,
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/personal',
      name: 'personal',
      component: Personal,
      children: [
        {
          path: '/privacy',
          name: 'privacy',
          component: Privacy
        },
        {
          path: '/integral',
          name: 'integral',
          component: Integral
        }
      ]
    }
  ]
})