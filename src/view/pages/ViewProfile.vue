<template>
<div>
    <KTCodePreview v-bind:title="'Media with text'">
        <template v-slot:preview>
               <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                        <b-card tag="article" style="width: 15rem;height:15rem;float:left;" class="mb-2 card-img-input" img-src="https://placekitten.com/300/300" img-alt="Image" img-top @click="clickFile">
                        </b-card>
                        <input type="file" name="myImage" accept="image/*" @change="handleImageChange" hidden ref="fileBtn" />
                            <div class="row py-6 px-6">
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <span style="font-family:verdana;font-size:120%;font-weight:bold">Juan dela Cruz</span><br>
                                        <span style="font-family:verdana;font-size:100%;color:blue">delacruz@gmail.com</span><br>
                                        <span style="font-family:verdana;font-size:100%;">Lisbon,Portugal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                            <div class="row py-6 px-6">
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <span style="font-family:verdana;font-size:120%;font-weight:bold">Juan dela Cruz</span><br>
                                        <span style="font-family:verdana;font-size:100%;color:blue">delacruz@gmail.com</span><br>
                                        <span style="font-family:verdana;font-size:100%;">Lisbon,Portugal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                <v-card-actions>
                    <v-btn color="orange" text>
                        Share
                    </v-btn>

                    <v-btn color="orange" text>
                        Explore
                    </v-btn>
                </v-card-actions>
         
        </template>
        <template v-slot:html>
            {{ code4.html }}
        </template>
    </KTCodePreview>
</div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import {
    SET_BREADCRUMB
} from "@/core/services/store/breadcrumbs.module";

export default {
    data() {
        return {}
            
    },
    components: {
        KTCodePreview
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB,
        [
            {
                title: "Vuetify",
                route: "alerts"
            },
            {
                title: "Cards"
            }
        ]);
    }
}
</script>
