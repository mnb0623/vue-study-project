import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const UpdateEmailPage = () => import('../components/UpdateEmailPage');
const Customer = () => import('../components/Customer');
const Parent = () => import('../components/Parent');
const ChildOne = () => import('../components/ChildOne');
const ChildTwo = () => import('../components/ChildTwo');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mail/update',
    name: 'UpdateEmail',
    component: UpdateEmailPage,
  },
  {
    path: '/customer/',
    name: 'Customer',
    component: Customer,
    meta: {
      title: '資産推移',
    },
  },
  {
    path: '/parent/',
    // meta: {
    //   scope: '/customer/parent/personal',
    // },
    component: Parent,
    children: [
      // {
      //   path: '/',
      //   name: 'Parent',
      //   component: Parent,
      // },
      {
        path: 'child-one',
        name: 'ChildOne',
        component: ChildOne,
      },
      {
        path: 'child-two',
        name: 'ChildTwo',
        component: ChildTwo,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
