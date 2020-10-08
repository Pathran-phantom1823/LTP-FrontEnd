<template>
<ul class="menu-nav menu">
    <router-link to="/myDashboard" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon flaticon2-architecture-and-city"></i>
                <span class="menu-text">Dashboards</span>
            </a>
        </li>
    </router-link>

    <router-link to="/quotation" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon flaticon2-expand"></i>
                <span class="menu-text">Instant Quote</span>
            </a>
        </li>
    </router-link>

    <li class="menu-section">
        <h4 class="menu-text">Account</h4>
        <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu" v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }">
        <a href="#" class="menu-link menu-toggle">
            <i class="menu-icon fa fa-users"></i>
            <span class="menu-text">Account Management</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
            <span class="menu-arrow"></span>
            <ul class="menu-subnav">
                <router-link to="/add-accounts" v-slot="{ href, navigate, isActive, isExactActive }">
                    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
                        <a :href="href" class="menu-link" @click="navigate">
                            <i class="menu-bullet menu-bullet-dot">
                                <span></span>
                            </i>
                            <span class="menu-text">Add Members</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/accounts" v-slot="{ href, navigate, isActive, isExactActive }">
                    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
                        <a :href="href" class="menu-link" @click="navigate">
                            <i class="menu-bullet menu-bullet-dot">
                                <span></span>
                            </i>
                            <span class="menu-text">View Accounts</span>
                        </a>
                    </li>
                </router-link>
            </ul>
        </div>
    </li>

    <li class="menu-section">
        <h4 class="menu-text">Jobs</h4>
        <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu" v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }">
        <a href="#" class="menu-link menu-toggle">
            <i class="menu-icon fa fa-language"></i>
            <span class="menu-text">Job Management</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
            <span class="menu-arrow"></span>
            <ul class="menu-subnav">
                <router-link to="/view-jobs" v-slot="{ href, navigate, isActive, isExactActive }">
                    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
                        <a :href="href" class="menu-link" @click="navigate">
                            <i class="menu-bullet menu-bullet-dot">
                                <span></span>
                            </i>
                            <span class="menu-text">View Jobs</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/vue-bootstrap/alert" v-slot="{ href, navigate, isActive, isExactActive }">
                    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
                        <a :href="href" class="menu-link" @click="navigate">
                            <i class="menu-bullet menu-bullet-dot">
                                <span></span>
                            </i>
                            <span class="menu-text">Post Jobs</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/vue-bootstrap/alert" v-slot="{ href, navigate, isActive, isExactActive }">
                    <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
                        <a :href="href" class="menu-link" @click="navigate">
                            <i class="menu-bullet menu-bullet-dot">
                                <span></span>
                            </i>
                            <span class="menu-text">Job Board</span>
                        </a>
                    </li>
                </router-link>
            </ul>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    name: "KTMenu",
    methods: {
        hasActiveChildren(match) {
            return this.$route["path"].indexOf(match) !== -1;
        }
    }
};
</script>

<style lang="scss" scoped>
// .menu-nav, .menu-item{
//   background-color: #0093E9;
// background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

// }
</style>
