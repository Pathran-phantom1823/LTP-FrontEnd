<template>
  <div style="padding:10px">
    <h3>Select languages</h3>
    <hr />
    <form>
      <label for="languages">Translate From:</label>
      <div class="form-group">
        <select class="yit-nice-select width-full form-control">
          <option data-display="Select Services">Select Services</option>
          <option :value="index" v-for="(lang, index) in languages" :key="index">{{lang.name}}</option>
        </select>
      </div>
      <label for="translatedto">Translate To:</label>
      <button
        type="button"
        class="btn btn-block showModal"
        data-toggle="modal"
        data-target="#exampleModalForm"
      >Select Language</button>
      <button
        type="button"
        class="btn btn mt-10 mb-10 btnDone"
      >Done</button>
      <div
        class="modal fade"
        id="exampleModalForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalSenderForm"
        aria-hidden="true"
        data-keyboard="false" data-backdrop="static"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalSenderForm">Select Languages</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <label>
                <input type="radio" v-model="allSelected" @click="selectAll" />&nbsp;Select All |
                <input type="radio" v-model="allUnSelected" @click="unselecteAll" />&nbsp;Unselect All
              </label>
              <div class="yit-contact-form common-form">
                <form>
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-xl-4" v-for="(lang, index) in languages" :key="index">
                      <div class="pad-20-all light-grey-color-bg">
                        <div class="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              :value="lang.iso"
                              v-model="languageIso"
                              @click="select"
                            />
                            &nbsp;{{lang.name}}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-green btn-xsmall" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-red btn-xsmall">Update</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LanguageForm",
  data() {
    return {
      tempLanguage: [],
      languages: [],
      allSelected: false,
      allUnSelected: false,
      languageIso: []
    };
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/lang/es").then(res => {
      res.data.map(el => {
        el.languages.map(lang => {
          // console.log(lang.name)
          this.tempLanguage.push({
            name: lang.name,
            iso: lang.iso639_2
          });
        });
      });
      this.languages = this.getUnique(this.tempLanguage, "iso");
    });
  },
  methods: {
    selectAll() {
      console.log(this.allSelected);
      this.allSelected = true;
      this.allUnSelected = false;
      this.languageIso = [];
      if (this.allSelected) {
        this.languages.forEach(el => {
          this.languageIso.push(el.iso);
        });
      }
    },
    select() {
      this.allSelected = false;
    },
    unselecteAll() {
      console.log(this.allSelected);
      this.allSelected = false;
      this.allUnSelected = true;
      this.languageIso = [];
      if (this.allUnSelected) {
        this.languages.forEach(el => {
          this.languageIso.pop(el.iso);
        });
      }
    },
    getUnique(arr, comp) {
      const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    }
  }
};
</script>

<style scoped>
.showModal{
  background-color:gray;
  border:none
}
.btnDone{
    width: 100px;
    color: black;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #999;
    float: right;
}
.btnDone:hover{
    width: 100px;
    color: white;
    background-color: rgb(17, 58, 240);
    border-radius: 10px;
    box-shadow: 2px 2px 3px #999;
}
</style>