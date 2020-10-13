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

    <router-link to="/quotation" v-slot="{ href, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="goToQuotation">
                <i class="menu-icon flaticon2-expand"></i>
                <span class="menu-text">Instant Quote</span>
            </a>
        </li>
    </router-link>

    <router-link to="/admin/quotation" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon flaticon2-expand"></i>
                <span class="menu-text">Quotations</span>
            </a>
        </li>
    </router-link>

    <li class="menu-section">
        <h4 class="menu-text">Account Management</h4>
        <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/add-accounts" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fa fa-user-plus"></i>
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
                <i class="menu-icon fa fa-users"></i>
                <span class="menu-text">View member accounts</span>
            </a>
        </li>
    </router-link>


    <li class="menu-section">
        <h4 class="menu-text">Jobs Management</h4>
        <i class="menu-icon flaticon-more-v2"></i>
    </li>

     <router-link to="/view-jobs" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fa fa-language"></i>
                <span class="menu-text">View Jobs</span>
            </a>
        </li>
    </router-link>

     <router-link to="/organization/postjob" v-slot="{ href, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="goToPostJobs">
                <i class="menu-icon fas fa-upload"></i>
                <span class="menu-text">Post Jobs</span>
            </a>
        </li>
    </router-link>

     <router-link to="/accounts" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-tools"></i>
                <span class="menu-text">Post Board</span>
            </a>
        </li>
    </router-link>

    <li class="menu-section">
        <h4 class="menu-text">Accounts</h4>
        <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/admin/members-translators" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-id-badge"></i>
                <span class="menu-text">Member Translators</span>
            </a>
        </li>
    </router-link>

    <router-link to="/admin/non-members-translators" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-user-friends"></i>
                <span class="menu-text">Non Member Translators</span>
            </a>
        </li>
    </router-link>

    <router-link to="/admin/organizations" v-slot="{ href, navigate, isActive, isExactActive }">
        <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
            <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-users"></i>
                <span class="menu-text">Organizations</span>
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
        },
        goToQuotation(){
            localStorage.setItem('method', 'quotation')
        },
        goToPostJobs(){
            localStorage.setItem('method', 'postjob')
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
