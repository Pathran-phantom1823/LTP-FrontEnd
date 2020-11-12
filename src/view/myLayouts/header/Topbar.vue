<template>
<!-- begin:: Header Topbar -->
<div class="topbar">

    <!--begin: Search -->
    <!-- <KTSearchDefault></KTSearchDefault> -->
    <!--end: Search -->


    <!-- Begin:Forums -->
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn text class="mt-1" title="Forums" v-bind="attrs" v-on="on" @click="$router.push('/organization/forum')">
                <span class=" svg-icon svg-icon-xl svg-icon-primary">
                <inline-svg src="media/svg/icons/Communication/Group-chat.svg" />
                </span>
            </v-btn>
        </template>
        <span>Forums</span>
    </v-tooltip>
    <!-- End: Forum -->

    <!--begin: Notifications -->
    <b-dropdown size="sm" variant="link" toggle-class="topbar-item text-decoration-none" no-caret right no-flip>
        <template v-slot:button-content>
            <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
                <span class="svg-icon svg-icon-xl svg-icon-primary">
                    <inline-svg src="media/svg/icons/General/Notifications1.svg" />
                </span>
                <span class="pulse-ring"></span>
            </div>
        </template>
        <b-dropdown-text tag="div" class="min-w-md-350px">
            <form>
                <KTDropdownNotification :quotations="data"></KTDropdownNotification>
            </form>
        </b-dropdown-text>
    </b-dropdown>
    <!--end: Notifications -->

    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
</div>
<!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
    .dropdown-toggle {
        padding: 0;

        &:hover {
            text-decoration: none;
        }

        &.dropdown-toggle-no-caret {
            &:after {
                content: none;
            }
        }
    }

    .dropdown-menu {
        margin: 0;
        padding: 0;
        outline: none;

        .b-dropdown-text {
            padding: 0;
        }
    }
}
</style>

<script>
// import KTSearchDefault from "@/view/myLayouts/extras/dropdown/SearchDefault.vue";
import KTDropdownNotification from "@/view/myLayouts/extras/dropdown/DropdownNotification.vue";
import KTQuickUser from "@/view/myLayouts/extras/offcanvas/QuickUser.vue";
import i18nService from "@/core/services/i18n.service.js";
import ApiService from "@/core/services/api.service";

export default {
    name: "KTTopbar",
    data() {
        return {
            languageFlag: "",
            languages: i18nService.languages,
            data: []
        };
    },
    components: {
        // KTSearchDefault,
        KTDropdownNotification,
        KTQuickUser,
    },
    mounted(){
        this.retrieveQuotation()
    },
    methods: {
        onLanguageChanged() {
            this.languageFlag = this.languages.find(val => {
                return val.lang === i18nService.getActiveLanguage();
            }).flag;
        },

        retrieveQuotation(){
        const id = localStorage.getItem("value");
        const userID = id.substr(id.lastIndexOf("*") + 1);
        ApiService.post("getmyAssignedQuotations", {id: userID}).then((res) => {
            // console.log("quote", res.data);
            this.data = res.data
        })
        }
    },
    computed: {
        getLanguageFlag() {
            return this.onLanguageChanged();
        }
    }
};
</script>
