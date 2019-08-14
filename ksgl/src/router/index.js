import Vue from 'vue'
import Router from 'vue-router'

//课程模块
import Course from "../components/courseManagement/Course.vue";
import FenLei from "../components/courseManagement/FenLei.vue";
import Coursemng from "../components/courseManagement/Coursemng.vue";
import MoKuaigl from "../components/courseManagement/MoKuaigl.vue";
//证书模块
import Ccie from '../components/ccie/Ccie.vue'
//用户模块
import User from '../components/linemodule/User.vue'
import UserManagement from '../components/linemodule/UserManagement.vue'
import RoleManagement from '../components/linemodule/RoleManagement.vue'
import Moduledesign from '../components/linemodule/Moduledesign.vue'
import ModelManagement from '../components/linemodule/ModelManagement.vue'


import Login from "../components/login/Login.vue";
import ShouYe from '../components/shouye/ShouYe.vue'
import Register from '../components/register/Register.vue'
import Personal from '../components/personal/Personal.vue'
import Privacy from '../components/personal/Privacy.vue'
import Integral from '../components/personal/Integral.vue'
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
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '/usermanagement',
          name: 'usermanagement',
          component: UserManagement
        },
        {
          path: '/rolemanagement',
          name: 'rolemanagement',
          component: RoleManagement
        },
        {
          path: '/moduledesign',
          name: 'moduledesign',
          component: Moduledesign
        },
        {
          path: '/modelmanagement',
          name: 'modelmanagement',
          component: ModelManagement
        }

      ]
    },
    {
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
    },

    {
      path: '/course',
      name: 'course',
      component: Course,
      children: [
        {
          path: '/classification',
          name: 'classification',
          component: FenLei
        },
        {
          path: '/coursemng',
          name: 'coursemng',
          component: Coursemng
        },
        {
          path: '/moKuaigl',
          name: 'moKuaigl',
          component: MoKuaigl
        }

      ]
    },
    {
      path: '/ccie',
      name: 'ccie',
      component: Ccie
    }
  ]
})