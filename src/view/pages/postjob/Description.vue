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
            v-model="description"
            id="title"
            class="form-control"
          ></b-form-textarea>
        </v-card>
        <br />
        <v-card style="padding: 10px">
          <b-row>
            <b-col sm="6">
              <label for="title">
                <strong>Languange From:*</strong>
              </label>
              <v-select
                v-model="languageFrom"
                :items="languages"
                label="Select"
                outlined
                height="20"
              ></v-select>
            </b-col>
            <b-col sm="6">
              <label for="title">
                <strong>Translate To:*</strong>
              </label>
              <v-select
                v-model="languageTo"
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
            <v-btn color="danger" @click.prevent="reset">Reset</v-btn>
          </div>
        </v-card>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      dialog: false,
      IsNext: false,
      description: null,
      languageFrom: null,
      languageTo: [],
      file: [],
      data: [],
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
  methods: {
    getFile(event) {
      this.file = event.target.files;
    },
    next() {
      if (
        this.description === null ||
        this.languageFrom === null ||
        this.languageTo.length === 0
      ) {
        this.snackbar = true
      } else {
        let description = {
          description: this.description,
          file: this.file,
          languageFrom: this.languageFrom,
          languageTo: this.languageTo,
        };
        this.data.push(description);
        this.$emit("description", description);
        this.IsNext = true;
      }
    },
    reset() {
      this.description = null;
      this.languageFrom = [];
      this.languageTo = [];
      this.file = null;
      let description = {
        description: this.description,
        file: this.file,
        languageFrom: this.languageFrom,
        languageTo: this.languageTo,
      };
      this.$emit("description", description);
      this.IsNext = false;
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