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

    <router-link to="/myDashboard" v-slot="{ href, navigate, isActive, isExactActive }">
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

    <router-link to="/myDashboard" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fa fa-users"></i>
                <span class="menu-text">Accounts</span>
            </a>
        </li>
    </router-link>

    <router-link to="/myDashboard" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon flaticon2-expand"></i>
                <span class="menu-text">Jobs</span>
            </a>
        </li>
    </router-link>
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
