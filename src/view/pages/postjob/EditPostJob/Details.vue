<template>
  <div>
    <v-container>
      <form style="text-align:left">
        <v-card style="padding:10px">
          <label for="title">
            <strong>Type of project you have:</strong>
          </label>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-xl-4" v-for="type in tempProjectType" :key="type.id">
              <v-card
                class="p-3 projecType"
                @click="handleSelectedType(type.id)"
                :style="type.click === true ? 'background-color:rgb(17, 58, 240);color:white' : null"
              >
                <strong>
                  <p>{{type.name}}</p>
                  <hr />
                </strong>
                <p>{{type.description}}</p>
              </v-card>
            </div>
          </div>
        </v-card>
        <br />
        <v-card style="padding:10px">
          <label for="title">
            <strong>Screening Question/s:</strong>
          </label>
          <br />
          <div v-if="AddBtnClick">
            <b-form-input v-model="questionInput" placeholder="Question"></b-form-input>
            <v-btn color="success" @click.prevent="handleAddQuestion">Add</v-btn>
            <div class="yit-table mt-10 table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Questions</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(question, index) in questions" :key="index">
                    <td>{{question}}</td>
                    <td>
                      <v-btn text color="error" @click="deleted(question)">Delete</v-btn>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <v-btn @click.prevent="AddBtnClick = !AddBtnClick">Add Question</v-btn>
          <div class="mt-20">
            <v-btn color="primary" @click.prevent="next" :disabled="handleNext">Done</v-btn>
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
      projectType: [
        {
          id: 0,
          name: "One-time Project",
          click: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 1,
          name: "Ongoing Project",
          click: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 2,
          name: "Complete Project",
          click: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
      ],
      selectType: [],
      questions: [],
      questionInput: null,
    };
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
    handleAddQuestion() {
      this.questions.push(this.questionInput);
      this.questionInput = null;
      // console.log(this.questions);
    },
    deleted(data) {
      // console.log(this.questions.indexOf(data));
      this.questions.splice(this.questions.indexOf(data), 1);
    },
    next() {
      if (
        this.selectType.length === 0 ||
        (this.selectType === undefined && this.questions.length === 0) ||
        this.questions === undefined
      ) {
        alert("Fields are required");
      } else {
        this.$parent.onClickNext();
        let details = {
          type: this.selectType,
          questions: this.questions,
        };
        // this.data.push(details)
        this.$emit("details", details);
        this.IsNext = true;
      }
    },
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 50px;
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