import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/login/Login.vue";
import ShouYe from '../components/shouye/ShouYe.vue'
import Register from '../components/register/Register.vue'
import Personal from '../components/personal/Personal.vue'
import Privacy from '../components/personal/Privacy.vue'
import Integral from '../components/personal/Integral.vue'
// 考试
import KaoShi from '../components/kaoshi/KaoShi.vue'
import Kcgl from '../components/kaoshi/Kcgl.vue'
import Stgl from '../components/kaoshi/Stgl.vue'
import Ks from '../components/kaoshi/Ks.vue'
import Moni from '../components/kaoshi/Moni.vue'
import ZhengShi from '../components/kaoshi/ZhengShi.vue'
//课程
import KeCheng from '../components/kecheng/KeCheng.vue'
import Kclb from '../components/kecheng/Kclb.vue'
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
      children:[
        {
          path:'/kcgl',
          name:'kcgl',
          component:Kcgl
        },
        {
          path:'/stgl',
          name:'stgl',
          component:Stgl
        },
        {
          path:'/ks',
          name:'ks',
          component:Ks
        },
        {
          path:'/moni',
          name:'moni',
          component:Moni
        },
        {
          path:'/zhengshi',
          name:'zhengshi',
          component:ZhengShi
        }
      ]
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/kecheng',
      name: 'kecheng',
      component: KeCheng,
      children:[
        {
          path: '/kclb',
          name: 'kclb',
          component: Kclb
        }
      ]
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