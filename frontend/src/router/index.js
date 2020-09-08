import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home"),
    meta: { requiresAuth: true, requiresAdminAuth: false, requiresUserAuth: true }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { requiresAuth: true, requiresAdminAuth: true, requiresUserAuth: false } 
  },
  {
    path: "/component1",
    name: "Component1",
    component: () => import("../views/Component1.vue")
  },
  {
    path: "/component2",
    name: "Component2",
    component: () => import("../views/Component2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if(to.meta.requiresAuth){
    if(token === undefined || token === null){
      next({name: 'Component2'})
    }else{
      next()
    }
  }else{
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   const AuthUser = JSON.parse(localStorage.getItem('token'))
//   if(to.meta.requiresAuth){
//     console.log("true", AuthUser)
//     if(!AuthUser || !AuthUser.token){
//       next({name: 'Login'})
//     }else if(to.meta.requiresAdminAuth){
//       if(AuthUser.data.role === 'ADMIN'){
//         next()
//       }else{
//         next({name: 'home'})
//       }
//     }
//   }else if(to.meta.requiresUserAuth){
//     console.log("false", AuthUser)
//     if(AuthUser.data.role === 'USER'){
//       next()
//     }else{
//       next({name: 'about'})
//     }
//   }else{
//     next()
//   }
// })

export default router;
