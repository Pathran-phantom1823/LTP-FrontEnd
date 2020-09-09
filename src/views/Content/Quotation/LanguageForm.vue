<template>
  <div style="padding:10px">
    <h3>Select Laguages</h3>
    <hr />
    <form>
      <label for="languages">Translate From:</label>
      <div class="form-group">
        <select class="yit-nice-select width-full form-control">
          <option data-display="Select Services">Select Services</option>
          <option :value="index" v-for="(lang, index) in languages" :key="index">{{lang}}</option>
        </select>
      </div>
      <label for="translatedto">Translate To:</label>
      <button
        type="button"
        class="btn btn-block"
        data-toggle="modal"
        data-target="#exampleModalForm"
      >Modal</button>
      <div
        class="modal fade"
        id="exampleModalForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalSenderForm"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalSenderForm">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="yit-contact-form common-form">
                <form>
                  <div class="checkbox" v-for="(lang, index) in languages" :key="index">
                    <label>
                      <input type="checkbox" value />{{lang}}
                    </label>
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
      languages: []
    };
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/lang/es").then(res => {
      res.data.map(el => {
        el.languages.map(lang => {
          // console.log(lang.name)
          this.tempLanguage.push(lang.name);
        });
      });
      this.languages = [...new Set(this.tempLanguage)];
    });
  }
};
</script>

<style>
</style>