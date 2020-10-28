import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "banner",
            component: () =>
                import ("@/view/pages/LandingPage.vue")
        },
        {
            path: "/postjob",
            name: "postjob",
            component: () =>
                import ("@/view/pages/postjob/PostJob.vue")
        },
        {
            path: "/instant-quote",
            name: "instantQuote",
            component: () =>
                import ("@/view/pages/postjob/PostJob.vue")
        },
        {
            path: "/forums",
            name: "forum",
            component: () =>
                import ("@/view/pages/forum.vue")
        },
        {
            path: "/forumdetails",
            name: "forum",
            component: () =>
                import ("@/view/pages/forumDetails.vue")
        },
        {
            path: "/user",
            redirect: "/user/feed",
            component: () =>
                import ("@/view/myLayouts/Standard"),
            children: [{
                    path: "/user/feed",
                    name: "feed",
                    component: () =>
                        import ("@/view/pages/userfeed.vue")
                },
                {
                    path: "/user/job_board",
                    name: "jobboard",
                    component: () =>
                        import ("@/view/pages/job.vue")
                },
                {
                    path: "/user/messenger",
                    name: "messenger",
                    component: () =>
                        import ("@/view/pages/communication/Messenger.vue")
                },
                {
                    path: "/user/userprofile",
                    name: "profile",
                    component: () =>
                        import ("@/view/pages/UserProfile.vue")
                },
                {
                    path: "/user/review_bids/:id",
                    name: "reviewbids",
                    component: () =>
                        import ("@/view/pages/ReviewBids.vue")
                },
                {
                    path: "/user/forum",
                    name: "forum",
                    component: () =>
                        import ("@/view/pages/forum.vue")
                },
                {
                    path: "/user/forumdetails/:id",
                    name: "forum",
                    component: () =>
                        import ("@/view/pages/forumDetails.vue")
                },
                {
                    path: "/user/orgprofile",
                    name: "orgprofile",
                    component: () =>
                        import ("@/view/pages/OrgProfile.vue")
                },
                {
                    path: "/user/viewprofile",
                    name: "viewprofile",
                    component: () =>
                        import ("@/view/pages/ViewProfile.vue")
                },
                {
                    path: "/user/payment",
                    name: "payment",
                    component: () =>
                        import ("@/view/pages/Payment.vue")
                },
                {
                    path: "/user/booking",
                    name: "booking",
                    component: () => import ("@/view/pages/booking.vue")
                }
                // ADD ROUTES HERE FOR USERS
            ]
        },
        {
            path: "/organization",
            redirect: "/organization/dashboard",
            component: () =>
                import ("@/view/myLayouts/Layout"),
                children: [
                {
                    path: "/organization/dashboard",
                    name: "dashboard",
                    component: () =>
                        import ("@/view/pages/Dashboard.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Dashboard' }
                        ]
                    },
                },
                {
                    path: "/organization/forum",
                    name: "forum",
                    component: () =>
                        import ("@/view/pages/forum.vue")
                },
                {
                    path: "/organization/forumdetails",
                    name: "forum",
                    component: () =>
                        import ("@/view/pages/forumDetails.vue")
                },
                {
                    path: "/organization/quotation",
                    name: "quotation",
                    component: () =>
                        import ("@/view/pages/postjob/PostJob.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Quotation', link: 'quotation' }
                        ]
                    }
                },
                {
                    path: "/organization/accounts",
                    name: "accounts",
                    component: () =>
                        import ("@/view/pages/account-management/Accounts.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Accounts', link: 'accounts' },
                            { name: 'View Accounts' }
                        ]
                    }
                },
                {
                    path: "/organization/add_account",
                    name: "accounts",
                    component: () =>
                        import ("@/view/pages/account-management/AddAccounts.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Accounts', link: 'accounts' },
                            { name: 'Add Accounts' }
                        ]
                    }
                },


                // JObs Here
                {
                    path: "/organization/view_jobs",
                    name: "viewJobs",
                    component: () =>
                        import ("@/view/pages/job-management/ViewJobs.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Jobs', link: 'viewJobs' },
                            { name: 'View Jobs' }
                        ]
                    }
                },
                {
                    path: "/organization/post_job",
                    name: "orgPostjob",
                    component: () =>
                        import ("@/view/pages/postjob/PostJob.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Jobs', link: 'viewJobs' },
                            { name: 'Post Jobs' }
                        ]
                    }
                },
                {
                    path: "/organization/job_board",
                    name: "Job_Board",
                    component: () =>
                        import ("@/view/pages/Organization/JobBoard.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Jobs', link: 'viewJobs' },
                            { name: 'Job Board' }
                        ]
                    }
                }
            ]
        },
        {
            path: "/admin",
            redirect: "/admin/Dashboard",
            component: () =>
                import ("@/view/myLayouts/Layout"),
            children: [{
                    path: "/admin/Dashboard",
                    name: "adminDashboard",
                    component: () =>
                        import ("@/view/pages/Dashboard.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Dashboard' }
                        ]
                    }
                },
                {
                    path: "/admin/quotation",
                    name: "adminQuotations",
                    component: () =>
                        import ("@/view/pages/admin/Quotations.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Quotations' }
                        ]
                    }
                },
                {
                    path: "/admin/members-translators",
                    name: "MemberTranslators",
                    component: () =>
                        import ("@/view/pages/admin/Members.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Members Translators' }
                        ]
                    }
                },
                {
                    path: "/admin/non-members-translators",
                    name: "NonMemberTranslators",
                    component: () =>
                        import ("@/view/pages/admin/NonMembers.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Non Members Translators' }
                        ]
                    }
                },
                {
                    path: "/admin/organizations",
                    name: "Organizations",
                    component: () =>
                        import ("@/view/pages/admin/Organizations.vue"),
                    meta: {
                        breadcrumb: [
                            { name: 'Organizations' }
                        ]
                    }
                }
            ]
        },
        {
            path: "/login",
            component: () =>
                import ("@/view/pages/auth/Auth"),
            children: [{
                    name: "login",
                    path: "/login",
                    component: () =>
                        import ("@/view/pages/auth/Login")
                },
                {
                    name: "register",
                    path: "/register",
                    component: () =>
                        import ("@/view/pages/auth/Register")
                },
                {
                    name: "forgotpass",
                    path: "/forgotpass",
                    component: () =>
                        import ("@/view/pages/auth/ForgotPass")
                }
            ]
        }
    ]
});