<template>
  <ul ref="menu-nav" class="menu-nav menu">
    <router-link v-for="(dItems, ndx) in returnItems" :key="ndx" :to="dItems.link" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i :class="'menu-icon ' + dItems.icon"></i>
          <span class="menu-text">{{dItems.name}}</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "KTMenu",
  data() {
    return {
      index: null,
       items: [
         //Agent sidebar
        [
          'Home',
          {
            icon: "flaticon2-architecture-and-city",
            name: "Dashboard",
            link: "/agent/dashboard"
          },
          {
            icon: "flaticon2-expand",
            name: "Quotations",
            link: "/agent/quotations"
          },
          'Account Management',
          {
            icon: "fas fa-id-badge",
            name: "Member Translators",
            link: "/agent/members-translators"
          },
          {
            icon: "fas fa-user-friends",
            name: "Non Member Translators",
            link: "/agent/non-members-translators"
          },
          {
            icon: "fas fa-user",
            name: "Organizations",
            link: "/agent/organizations"
          }
        ],

        //Agency sidebar
        [
          'Home',
          {
            icon: "flaticon2-architecture-and-city",
            name: "Dashboard",
            link: "/organization/dashboard"
          },
          'Account Management',
          {
            icon: "fa fa-user-plus",
            name: "Add Members",
            link: "/organization/add_account"
          },
          {
            icon: "fa fa-users",
            name: "Members",
            link: "/organization/accounts"
          },
          'Account Management',
          {
            icon: "fa fa-language",
            name: "View Jobs",
            link: "/organization/view_jobs"
          },
          {
            icon: "fas fa-tools",
            name: "Job Board",
            link: "/organization/job_board"
          }
        ],

         // Agency Member sidebar
        [
          'Home',
          {
            icon: "flaticon2-architecture-and-city",
            name: "Dashboard",
            link: "/agencyMember/dashboard"
          },
          'Task Management',
          {
            icon: "fas fa-tasks",
            name: "View Jobs",
            link: "/agency/ViewJobs" 
          },
        ],

        //Super admin sidebar
        [
          'Home',
          {
            icon: "flaticon2-architecture-and-city",
            name: "Dashboard",
            link: "/superAdmin/dashboard"
          },
          'Account Management',
          {
            icon: " fas fa-user-friends",
            name: "Agents",
            link: "/superAdmin/Account"
          },
          {
            icon: "flaticon2-expand",  
            name: "Reports",
            link: "/superAdmin/Report"
          },
          {
            icon: "fab fa-wpforms",  
            name: "Quotations",
            link: "/superAdmin/Quotation"
          }
        ],   
      ],

      
      item_index: []
    };
  },
  beforeMount(){
    this.drawerItems();
  },
  mounted(){
    this.addGrouper()
  },
  computed: {
    ...mapGetters([
      "getRole"
    ]),
    returnIndex(){
      return this.index
    },
    returnItems(){
      return this.items[this.index].filter(element => {
        return typeof element !== 'string'
      })
    }
  },
  methods: {
    drawerItems(){
      // this.items.forEach((element, index) => {
      //   if(element.user === 'organization'){
      //     this.index = index
      //   }
      // })
      // console.log("encrypted ", this.getRole)
      this.$store.commit('get_Role', localStorage.getItem("role"))
      // console.log("decrypted ", this.getRole)
      switch(this.getRole.toLowerCase()){
        case 'agency':
          this.index = 1;
          break;
        case 'agent':
          this.index = 0;
          break;
        case 'agency-member':
          this.index = 2;
          break;
        case 'super-admin':
          this.index = 3;
          break;
        default: 
          this.index = 1
      }
      // this.index = 3;
    },
    addGrouper(){
      this.items[this.index].forEach((element, index) => {
        if(typeof element === 'string'){
          let new_child = document.createElement('li')
          new_child.className = 'menu-section'
          new_child.innerHTML = '<h4 class="menu-text">'+ element +'</h4><i class="menu-icon flaticon-more-v2"></i>'
          this.$refs['menu-nav'].insertBefore(new_child, this.$refs['menu-nav'].children[index])
        }
      })
    },
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
    goToQuotation() {
      localStorage.setItem("method", "quotation");
    },
    goToPostJobs() {
      localStorage.setItem("method", "postjob");
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
