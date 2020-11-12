<template>
  <div class="viewProfile">
    <div>
      <b-card  justify="center">
        <b-media>
          <template v-slot:aside>
            <b-img
              width="110"
              height="110"
              alt="placeholder"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
            ></b-img>
          </template>
          <br />
          <h5 class="mt-0 font-weight-bold">John Doe</h5>
          <v-row class="mb-2">
            <span class="group pa-2">
              <v-icon>mdi-map-marker</v-icon> Cebu City, Philippines
              <v-icon>mdi-email</v-icon>translator@gmail.com
            </span>
          </v-row>
          <br />
          <hr />
        </b-media>
        <b-media class="asideHere">
          <h5 class="mt-0 font-weight-bold">
            Availability
          </h5>
          <p class="mx-12">
            Available Less than 30 hrs/week
          </p>
          <hr />
          <h5 class="mt-0 font-weight-bold">
            Languages
          </h5>
          <ul class="mx-12">
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
          <hr />

          <h5 class="mt-0 font-weight-bold">
            Education
          </h5>
          <p class="mx-12">
            <span class="mt-0 font-weight-bold">
              University of El Salvador
            </span>
            <br />
            Bachelor's degree, English language 2008-2013
          </p>
          <h5 class="mt-0 font-weight-bold">
            Professional Japanese/English Translator
          </h5>
          <p class="mx-12 justify">
            I´m a bilingual speaker on English and Spanish languages. Also, I
            currently have a BA in English language. I also know French. So my
            fields are English/Spanish and French/Spanish translations. I have
            taken several courses on translation and have carried out
            translations on different subjects such as informational technology,
            engineering, medicine and law. I am always looking forward to
            improving my translations; hence, I am constantly studying. I use
            different softwares to carry out my translations. One of them Trados
            SDL. I also have Nuance power PDF editing and OCR tool for different
          </p>
          <br />
          <h5 class="mt-0 font-weight-bold">Skils & Expertise</h5>
          <p class="mx-12">
            <v-chip class="ma-2" label>
              Content Writing
            </v-chip>
            <v-chip class="ma-2" label>
              Website Localization
            </v-chip>
            <v-chip class="ma-2" label>
              Medical Translation
            </v-chip>
            <v-chip class="ma-2" label>
              Thesis Translation
            </v-chip>
          </p></b-media
        >
        <br />
      </b-card>
      <br />
    </div>
  </div>
</template>
<style scoped>
.viewProfile {
  margin-top: 170px;
  width: 80%;
  margin-left: 200px!important;
}
.leftSideDetails {
  width: 290px;
  height: 320px !important;
  position: absolute;
  top: 155px;
  border-radius: 20px !important;
}
</style>