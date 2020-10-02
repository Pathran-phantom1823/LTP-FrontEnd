<template>
<div class="card card-custom">
    <div class="card-body p-0">
        <!--begin: Wizard-->
        <div class="wizard wizard-1" id="kt_wizard_v1" data-wizard-state="step-first" data-wizard-clickable="true" style="padding-bottom:0px;padding-left:7px;padding-top:68px">
            <div class="wizard-nav border-bottom">
                <div class="wizard-steps p-8 p-lg-10">
                    <div class="wizard-step" data-wizard-type="step" data-wizard-state="current">
                        <div class="wizard-label">
                            <i class="wizard-icon flaticon-information"></i>
                            <h3 class="wizard-title">1.Information</h3>
                        </div>
                        <i class="wizard-arrow flaticon2-next"></i>
                    </div>
                    <div class="wizard-step" data-wizard-type="step">
                        <div class="wizard-label">
                            <i class="wizard-icon flaticon-bus-stop"></i>
                            <h3 class="wizard-title">2.Setup Address</h3>
                        </div>
                        <i class="wizard-arrow flaticon2-next"></i>
                    </div>
                    <div class="wizard-step" data-wizard-type="step">
                        <div class="wizard-label">
                            <i class="wizard-icon flaticon-responsive"></i>
                            <h3 class="wizard-title">3.Services and Skills</h3>
                        </div>
                        <i class="wizard-arrow flaticon2-next"></i>
                    </div>
                    <div class="wizard-step" data-wizard-type="step">
                        <div class="wizard-label">
                            <i class="wizard-icon flaticon-list"></i>
                            <h3 class="wizard-title">4.About</h3>
                        </div>
                    </div>  
                </div>
            </div>
            <!--end: Wizard Nav-->
            <!--begin: Organization Profile Body-->
            <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                <div class="col-xl-12 col-xxl-7">
                    <!--begin: Wizard Form-->
                    <form class="form" id="kt_form">
                        <!--begin: Wizard Step 1-->
                        <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                        <b-card tag="article" style="width: 15rem;height:15rem;margin:auto;border-top-width:0px;border-left-width:0px;border-top-width:0px;border-right-width:0px;" class="mb-2 card-img-input" img-src="https://placekitten.com/300/300" img-alt="Image" img-top @click="clickFile">
                        </b-card>
                        <input type="file" name="myImage" accept="image/*" @change="handleImageChange" hidden ref="fileBtn" />
                            <h3 class="mb-10 font-weight-bold text-dark">
                                Organization Information
                            </h3>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Organization Name</label> <span style="color:red">*</span>
                                        <input type="text" class="form-control form-control-solid form-control-lg" name="orgname" placeholder="Organization Name" />
                                        <span class="form-text text-muted">Please enter your organization name</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Effective date</label><span style="color:red">*</span>
                                        <input type="date" class="form-control form-control-solid form-control-lg" name="startdate" placeholder="Startdate" />
                                        <span class="form-text text-muted">Please enter your organization's effective date</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Website</label>
                                        <input type="eamil" class="form-control form-control-solid form-control-lg" name="website" placeholder="Website" />
                                        <span class="form-text text-muted">Please enter your Organization's website(optional)</span>
                                    </div>
                                </div>
                                
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Email</label><span style="color:red">*</span>
                                        <input type="eamil" class="form-control form-control-solid form-control-lg" name="email" placeholder="Email" />
                                        <span class="form-text text-muted">Please enter your Organization's email</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                            <h3 class="mb-10 font-weight-bold text-dark">
                                Address
                            </h3>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Postcode</label><span style="color:red">*</span>
                                        <input type="text" class="form-control form-control-solid form-control-lg" name="postcode" placeholder="Postcode" />
                                        <span class="form-text text-muted">Please enter your Postcode.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>City</label><span style="color:red">*</span>
                                        <input type="text" class="form-control form-control-solid form-control-lg" name="city" placeholder="City" />
                                        <span class="form-text text-muted">Please enter your City.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>State</label><span style="color:red">*</span>
                                        <input type="text" class="form-control form-control-solid form-control-lg" name="state" placeholder="State" />
                                        <span class="form-text text-muted">Please enter your State.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Country</label><span style="color:red">*</span>
                                        <select name="country" class="form-control form-control-solid form-control-lg">
                                            <option value="">Select</option>
                                            <option v-for="(country, index) in countries" :key="index" :value="country.initial">{{country.name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end: Wizard Step 1-->
                        <div class="pb-5" data-wizard-type="step-content">
                            <h4 class="mb-10 font-weight-bold text-dark">
                                Select your organization's translation's skills
                            </h4>
                            <div class="form-group">
                                <label>Languages</label><span style="color:red">*</span>
                                <v-select multiple chips filled :items="languages" name="languages" dense>
                                </v-select>
                            </div>

                            <h4 class="mb-10 font-weight-bold text-dark">
                                Select services that your organization provides
                            </h4>
                            <div class="form-group">
                                <label>Services</label><span style="color:red">*</span>
                                <v-select multiple chips filled :items="services" name="services" dense>
                                </v-select>
                            </div>

                        </div>
                       
                        <!--begin: Wizard Step 2-->
                        <div class="pb-5" data-wizard-type="step-content">
                            <h4 class="mb-10 font-weight-bold text-dark">
                                About your organization
                            </h4>
                            <div class="form-group">
                                 <div class="form-group">
                                        <label>Additional Information</label>
                                         <b-form-textarea
                                            id="textarea-rows"
                                            placeholder="About us"
                                            rows="8"
                                        ></b-form-textarea>
                                </div>
                            <div>
                        </div>    
                            </div>
                        </div>
                        <!--end: Wizard Step 2-->
                        <!--begin: Wizard Actions -->
                        <div class="d-flex justify-content-between border-top pt-10">
                            <div class="mr-2">
                                <button class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4" data-wizard-type="action-prev">
                                    Previous
                                </button>
                            </div>
                            <div>
                                <button v-on:click="submit" class="btn btn-success font-weight-bold text-uppercase px-9 py-4" data-wizard-type="action-submit">
                                    Submit
                                </button>
                                <button class="btn btn-primary font-weight-bold text-uppercase px-9 py-4" data-wizard-type="action-next">
                                    Next Step
                                </button>
                            </div>
                        </div>
                        <!--end: Wizard Actions -->
                    </form>
                    <!--end: Wizard Form-->
                </div>
            </div>
            <!--end: Wizard Body-->
        </div>
    </div>
    <!--end: Wizard-->
</div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";

.card-img-input {
    cursor: pointer
}
</style>

<script>
import {
    SET_BREADCRUMB
} from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";

export default {
    name: "Wizard-1",
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{
                title: "Wizard"
            },
            {
                title: "Wizard-1"
            }
        ]);

        // Initialize form wizard
        const wizard = new KTWizard("kt_wizard_v1", {
            startStep: 1, // initial active step number
            clickableSteps: true // allow step clicking
        });

        // Validation before going to next page
        wizard.on("beforeNext", function ( /*wizardObj*/ ) {
            // validate the form and use below function to stop the wizard's step
            // wizardObj.stop();
        });

        // Change event
        wizard.on("change", function ( /*wizardObj*/ ) {
            setTimeout(() => {
                KTUtil.scrollTop();
            }, 500);
        });
    },
    data: () => ({
        file2: [],
        countries: [{
                name: "Viet Nam",
                initial: "VN",
            },
            {
                name: "United States",
                initial: "US",
            }
        ],
        languages: ["Russian", "English"],
        services: ["Architecture", "Medicine"]
    }),
    methods: {
        clickFile: function () {
            this.$refs.fileBtn.click()
        },
        handleImageChange: function (e) {
            let img = e.target.files[0];
            this.file2 = img;

        },
        submit: function (e) {
            e.preventDefault();
            let payload = new FormData();
            payload.append('img', this.file2);
            // axios script
            Swal.fire({
                title: "",
                text: "Your information has been successfully updated!",
                icon: "success",
                confirmButtonClass: "btn btn-secondary"
            });
        }
    }
};
</script>
