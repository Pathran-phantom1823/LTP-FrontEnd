import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "LandingPage",
        component: () =>
            import ("../views/LandingPage")
    },
    {
        path: "/quotation",
        name: "Quotation",
        component: () =>
            import ("../views/Content/Quotation/Services")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login")
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/Register")
    },
    {
        path: "/forgot",
        name: "ForgotPassword",
        component: () =>
            import ("../views/ForgotPassword")
    },
    {
        path: "/home",
        name: "Home",
        component: () =>
            import ("../views/Home"),
        meta: { requiresAuth: true, requiresAdminAuth: false, requiresUserAuth: true }
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
        meta: { requiresAuth: true, requiresAdminAuth: true, requiresUserAuth: false }
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
        const token = localStorage.getItem('token')
        if (to.meta.requiresAuth) {
            if (token === undefined || token === null) {
                next({ name: '/' })
            } else {
                next()
            }
        } else {
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