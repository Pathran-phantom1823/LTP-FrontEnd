<template>
  <div>
    <form style="text-align:left">
      <v-card style="padding:10px">
        <label for="title">
          <strong>What skills and expertise a translator must have:</strong>
        </label>
        <b-row>
          <b-col sm="4" v-for="skill in skillFunc" :key="skill.id">
            <div class="projecType pl-20">
              <v-btn
                class="btn-add-skill"
                @click.prevent="selectSkills(skill)"
                :style="skill.click === true ? 'background-color:rgb(17, 58, 240);color:white' : null"
              >
                <i class="fa fa-plus"></i>
                {{skill.name}}
              </v-btn>
            </div>
          </b-col>
        </b-row>
      </v-card>
      <br />
      <v-card style="padding:10px">
        <label for="title">
          <strong>Translation Type:</strong>
        </label>
        <b-row>
          <b-col sm="4" v-for="type in translationTypeFunc" :key="type.id">
            <div class="projecType pl-20">
              <v-btn
                class="btn-add-skill"
                @click.prevent="selectType(type)"
                :style="type.click === true ? 'background-color:rgb(17, 58, 240);color:white' : null"
              >
                <i class="fa fa-plus"></i>
                {{type.name}}
              </v-btn>
            </div>
          </b-col>
        </b-row>
      </v-card>
      <br />
      <v-card style="padding:10px">
        <label for="title">
          <strong>Language known:</strong>
        </label>
        <v-select
          height="20"
          v-model="selectedLanguages"
          :items="languagesFunc"
          label="Select"
          multiple
          chips
          outlined
        ></v-select>
      </v-card>
      <br />
      <v-card style="padding:10px">
        <label for="title">
          <strong>Level of Experience:</strong>
        </label>
        <b-row>
          <b-col sm="4" v-for="level in levelOfExperienceFunc" :key="level.id">
            <div class="projecType pl-20">
              <v-btn
                class="btn-add-skill-level"
                @click.prevent="selectLevel(level.id)"
                :style="level.click === true ? 'background-color:rgb(17, 58, 240);color:white' : null"
              >{{level.name}}</v-btn>
            </div>
          </b-col>
        </b-row>
        <div class="mt-20">
          <v-btn
            color="primary"
            :disabled="handleNext"
          >Done</v-btn>
        </div>
      </v-card>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LanguageForm",
  data() {
    return {
      IsNext: false,
      tempLanguage: [],
      languages: [],
      allSelected: false,
      allUnSelected: false,
      languageIso: [],
      selectedLanguages: [],
      selectedSkill: [],
      selectedTranslationType: [],
      selectedLevel: null,
      skills: [
        { name: "Email", id: 0, click: false },
        { name: "Localization Content", id: 1, click: false },
        { name: "Documentation", id: 2, click: false },
        { name: "Software Localization", id: 3, click: false },
        { name: "Medical Reports", id: 4, click: false },
      ],
      translationType: [
        { name: "Live Interpreter", id: 0, click: false },
        { name: "Transcription", id: 1, click: false },
        { name: "Written", id: 2, click: false },
      ],
      levelOfExperience: [
        { name: "Entry Level", id: 0, click: false },
        { name: "Intermediate", id: 1, click: false },
        { name: "Expert", id: 2, click: false },
      ],
    };
  },
  computed: {
    languagesFunc() {
      return this.languages;
    },
    skillFunc() {
      return this.skills;
    },
    translationTypeFunc() {
      return this.translationType;
    },
    levelOfExperienceFunc() {
      return this.levelOfExperience;
    },
    handleNext() {
      return this.IsNext;
    },
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/lang/es").then((res) => {
      res.data.map((el) => {
        el.languages.map((lang) => {
          // console.log(lang.name)
          this.tempLanguage.push({
            name: lang.name,
            iso: lang.iso639_2,
            click: false,
          });
        });
      });
      this.languages = this.getUnique(this.tempLanguage, "iso");
    });
  },
  methods: {
    selectSkills(skill) {
      if (this.selectedSkill.includes(skill.name)) {
        skill.click = false;
        this.selectedSkill.splice(this.selectedSkill.indexOf(skill.name), 1);
      } else {
        this.selectedSkill.push(skill.name);
        skill.click = true;
      }
    },
    selectType(type) {
      if (this.selectedTranslationType.includes(type.name)) {
        type.click = false;
        this.selectedTranslationType.splice(
          this.selectedTranslationType.indexOf(type.name),
          1
        );
      } else {
        this.selectedTranslationType.push(type.name);
        type.click = true;
      }
    },
    selectLevel(level) {
      this.levelOfExperience.map((el) => {
        if (el.id === level) {
          this.selectedLevel = el.name;
          el.click = true;
        } else {
          el.click = false;
        }
      });
    },
    next() {
      if (
        this.selectedLanguanges.length === 0 &&
        this.selectSkills.length === 0 &&
        this.selectedTranslationType === 0 &&
        this.selectedLevel === null
      ) {
        alert("Fields are required");
      } else {
        this.$parent.onClickNext();
        let languages = {
          skills: this.selectedSkill,
          translationType: this.selectedTranslationType,
          languages: this.selectedLanguanges,
          levelOfExperience: this.selectedLevel,
        };
        this.$emit("languages", languages);
        this.IsNext = true;
      }
    },
    getUnique(arr, comp) {
      const unique = arr
        .map((e) => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => arr[e])
        .map((e) => arr[e]);

      return unique;
    },
  },
};
</script>

<style scoped>
.showModal {
  background-color: gray;
  border: none;
}
.btnDone {
  width: 100px;
  color: black;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #999;
  float: right;
}
.btnDone:hover {
  width: 100px;
  color: white;
  background-color: rgb(17, 58, 240);
  border-radius: 10px;
  box-shadow: 2px 2px 3px #999;
}
.btn-add-skill {
  color: rgb(17, 58, 240);
  background-color: #ffff;
}
.btn-add-skill:hover {
  color: rgb(17, 58, 240);
  background-color: rgb(17, 58, 240);
}
.btn-add-skill-level {
  color: rgb(17, 58, 240);
  background-color: #ffff;
}
.btn-add-skill-level:active {
  color: rgb(17, 58, 240);
  background-color: #ffff;
  border-bottom-color: rgb(17, 58, 240);
  border-bottom: solid 10px;
}
</style>