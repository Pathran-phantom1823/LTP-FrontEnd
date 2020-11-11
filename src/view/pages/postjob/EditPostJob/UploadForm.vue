<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      left
      color="red"
      elevation="24"
    >
      {{ text }}
    </v-snackbar>
    <v-container>
      <form>
        <v-card class="p-5">
          <label for="title">
            <strong>Enter the title of your job*</strong>
          </label>
          <b-form-input
            type="text"
            v-model="titles.title"
            id="title"
            class="form-control"
          ></b-form-input> </v-card
        ><br />
        <v-card style="padding: 10px">
              <label for="title">
                <strong>Subject field of the document:</strong>
              </label>
              <v-select
                v-model="titles.subject"
                :items="subjects"
                label="Select"
                outlined
                height="20"
              ></v-select>
        </v-card>
        <br>
        <v-card class="p-5">
          <label for="title">
            <strong>Translation Service:</strong>
          </label>
          <b-form-group class="pl-3">
            <b-form-radio
              v-model="titles.category"
              class="form-check-input"
              value="Document Translation"
              name="optradio"
              >Document Translation</b-form-radio
            >
            <b-form-radio
              v-model="titles.category"
              class="form-check-input"
              value="Video Translation"
              name="optradio"
              >Video Translation</b-form-radio
            >
            <b-form-radio
              v-model="titles.category"
              class="form-check-input"
              value="E-Learning Translation"
              name="optradio"
              >E-Learning Translation</b-form-radio
            >
            <b-form-radio
              v-model="titles.category"
              class="form-check-input"
              value="Local Translation"
              name="optradio"
              >Local Translation</b-form-radio
            >
            <b-form-radio
              v-model="titles.category"
              class="form-check-input"
              name="optradio"
              value="Certified Translation"
              >Certified Translation</b-form-radio
            >
          </b-form-group>
          <div class="mt-20">
            <v-btn color="primary" @click.prevent="next" :disabled="handleNext"
              >Done</v-btn
            >
          </div>
        </v-card>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['titles'],
  data() {
    return {
      IsNext: false,
      snackbar: false,
      text: "Fields cannot be empty",
      timeout: 3000,
      subjects: [
        "Agriculture",
        "Architecture",
        "Arts Crafts",
        "Automotive",
        "Banking",
        "Biotechnology",
        "Certification & Lincences",
        "Chemical"
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("service") !== null) {
      this.category = localStorage.getItem("service");
    } else {
      this.category = null;
    }
  },
  computed: {
    tempProjectType() {
      return this.projectType;
    },
    handleNext() {
      return this.IsNext;
    },
  },
  methods: {
    handleSelectedType(data) {
      this.projectType.map((el) => {
        if (el.id === data) {
          this.selectType = el;
          el.click = true;
        } else {
          el.click = false;
        }
      });
    },
    next() {
      // console.log(this.category);
      let vm = this.titles
      console.log(vm);
      if (vm.title === "" || vm.category === "" || vm.subject === "") {
        this.snackbar = true;
      } else {
        this.$emit("title", vm);
      }
    },
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  cursor: not-allowed;
}
.projecType:hover {
  background-color: rgb(17, 58, 240);
  color: white;
  box-shadow: 2px 2px 3px #999;
  cursor: pointer;
}
</style>