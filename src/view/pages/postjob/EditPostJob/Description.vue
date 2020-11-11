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
      <form style="text-align: left">
        <v-card style="padding: 10px">
          <label for="title">
            <strong>Description:*</strong>
          </label><br>
            <span style="color:orange">Descibe the jobs that you will post, and/or the kind of translator that you want to work</span>
          <br><br>
          <b-form-textarea
            type="text"
            v-model="descriptions.description"
            id="title"
            class="form-control"
          ></b-form-textarea>
        </v-card>
        <br />
        <v-card style="padding: 10px">
          <b-row>
            <b-col sm="6">
              <label for="title">
                <strong>Current Language used in Document:*</strong>
              </label>
              <v-select
                v-model="descriptions.languageFrom"
                :items="languages"
                label="Select"
                multiple
                chips
                outlined
                height="20"
              ></v-select>
            </b-col>
            <b-col sm="6">
              <label for="title">
                <strong>Translate To:*</strong>
              </label>
              <v-select
                v-model="descriptions.languageTo"
                :items="languages"
                label="Select"
                multiple
                chips
                outlined
                height="20"
              ></v-select>
            </b-col>
          </b-row>
        </v-card>
        <br />
        <v-card style="padding: 10px">
          <label for="title">
            <strong>Additional File: *</strong>
          </label>
          <b-form-file class="form-control" @change="getFile"></b-form-file>
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
  name: "Description",
  props: ['descriptions'],
  data() {
    return {
      dialog: false,
      IsNext: false,
      file: [],
      tempFile: null,
      languages: [
        "English",
        "French",
        "Italian",
        "Spanish",
        "Chinese",
        "Japanes",
      ],
      snackbar: false,
      text: "Fields with(*) are required",
      timeout: 3000,
    };
  },
  computed: {
    handleNext() {
      return this.IsNext;
    },
  },
  mounted(){
    let vm = this;

    // console.log(vm.descriptions);
    this.file = vm.descriptions.file
    this.tempFile = vm.descriptions.file
  },
  methods: {
    getFile(event) {
      let vm = this;
      this.file = event.target.files;
      vm.descriptions.file = event.target.files

    },
    next() {
      let vm = this.descriptions
      // console.log(vm.file === this.tempFile);
      if (
        vm.description === "" ||
        vm.languageFrom.length === 0 ||
        vm.languageTo.length === 0 || vm.file === this.tempFile
      ) {
        this.snackbar = true
      } else {
        this.$emit("description", vm);
        // this.IsNext = true;
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
}
</style>