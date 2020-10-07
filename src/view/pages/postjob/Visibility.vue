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
            <strong>Who can see the job:</strong>
          </label>
          <b-row>
            <b-col sm="6" v-for="cansee in canSeeFunc" :key="cansee.id">
              <v-card
                class="p-5 projecType"
                @click="handleCanSee(cansee.id)"
                :style="
                  cansee.click === true
                    ? 'background-color: rgb(17, 58, 240); color:white'
                    : null
                "
              >
                <center>
                  <strong>
                    <p>{{ cansee.name }}</p>
                  </strong>
                </center>
              </v-card>
            </b-col>
          </b-row>
        </v-card>
        <br />
        <v-card style="padding: 10px">
          <label for="title">
            <strong>Level of confidentiality</strong>
          </label>
          <b-form-group class="pl-3">
            <b-form-radio
              v-model="confidential"
              class="form-check-input"
              value="High"
              name="optradio"
              >High</b-form-radio
            >
            <b-form-radio
              v-model="confidential"
              class="form-check-input"
              value="Medium"
              name="optradio"
              >Medium</b-form-radio
            >
            <b-form-radio
              v-model="confidential"
              class="form-check-input"
              value="Low"
              name="optradio"
              >Low</b-form-radio
            >
          </b-form-group>
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
  data() {
    return {
      IsNext: false,
      AddBtnClick: false,
      canSee: [
        { id: 0, name: "AnyOne", click: false },
        { id: 1, name: "Only Member", click: false },
      ],
      confidential: null,
      tempCanSee: null,
      tempTranslator: null,
      snackbar: false,
      text: "Fields with(*) are required",
      timeout: 3000,
    };
  },
  computed: {
    canSeeFunc() {
      return this.canSee;
    },
    handleNext() {
      return this.IsNext;
    },
  },
  methods: {
    handleCanSee(id) {
      this.canSee.map((el) => {
        if (el.id === id) {
          this.tempCanSee = el.name;
          el.click = true;
        } else {
          el.click = false;
        }
      });
    },
    next() {
      if (this.tempCanSee === null || this.confidential === null) {
        this.snackbar = true
      } else {
        let visibility = {
          canSee: this.tempCanSee,
          confidential: this.confidential,
        };
        this.$emit("visibility", visibility);
        this.IsNext = true;
      }
    },
    reset() {
      this.tempCanSee = null;
      this.confidential = null;
      let visibility = {
        canSee: this.tempCanSee,
        confidential: this.confidential,
      };
      this.$emit("visibility", visibility);
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
.projecType:hover {
  background-color: rgb(17, 58, 240);
  color: white;
  box-shadow: 2px 2px 3px #999;
  cursor: pointer;
}
.actionBtn {
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
}
</style>