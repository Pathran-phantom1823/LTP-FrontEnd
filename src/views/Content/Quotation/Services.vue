<template>
  <div class="container-fluid" style="margin-top:100px;">
    <div class="row">
      <div class="col">
        <h5 class="text-center mb-40">Translate Languages Worldwide</h5>
      </div>
    </div>

    <!-- /Column BOC -->
    <div class="row">
      <div class="col-lg-8 col-md-8 col-xl-8">
        <div class="pad-20-all light-grey-color-bg">
          <!-- /Process Listing BOC -->
          <div>
           <div class="progress-bar progress-bar-striped progress-bar-animated" style="border-radius:5px" :style="'width:' + progress + '%'">{{progress}}% Progress</div>
          </div>
          <div class="card mt-50">
            <div v-if="current_step === 1">
              <Upload/>
            </div>
            <div v-if="current_step === 2">
              <LanguageForm/>
            </div>
          </div>
          <button class="btn btn-primary back" style="width:100px;float:left" v-show="current_step !== 1" @click="onClickBack">Back</button>
          <button class="btn btn-primary next" style="width:100px;float:right" @click="onClickNext">Next</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-xl-4">
        <div class="pad-20-all light-grey-color-bg">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptatum voluptates, alias quisquam adipisci iste, eligendi ipsum incidunt cum, quasi ex, praesentium placeat in. Cum quos.</p>
        </div>
      </div>
    </div>
    <!-- /Column EOC -->
  </div>
</template>

<script>
import Upload from "./UploadForm"
import LanguageForm from "./LanguageForm"
export default {
  name: "Services",
  components: {
    Upload,
    LanguageForm
  },
  data() {
    return {
      steps: [
        {
          name: "Step 1",
          status: false,
          id: 0,
          icon: "flat-icon flaticon-idea"
        },
        {
          name: "Step 2",
          status: false,
          id: 1,
          icon: "flat-icon flaticon-monitor-1"
        },
        {
          name: "Step 3",
          status: false,
          id: 2,
          icon: "flat-icon flaticon-magnifying-glass"
        },
        {
          name: "Step 4",
          status: false,
          id: 3,
          icon: "flat-icon icon flaticon-inclined-rocket"
        }
      ],
      max_step: 4,
      current_step: 1,
      width: null
    };
  },
  computed: {
    progress(){
      return Math.round(100 / this.max_step) * this.current_step
    },
  },
  methods: {
    onClickNext(){
      this.current_step++;
    },
    onClickBack(){
      this.current_step--;
    }
  }
};
</script>

<style scoped>
  .next{
    background-color:#1a75ff;
    position: relative;
  }
  .back{
    background-color: #cccc;
    position: relative;
    border:none
  }

  .next:hover, .back:hover{
    box-shadow: 2px 2px 3px #999;
  }

</style>